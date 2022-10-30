import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { toast } from "react-toastify"
import { yupResolver } from "@hookform/resolvers/yup"
import { addStudent } from "@/api"
import { NormalButton, TextInput } from "@/components"
import { BUTTON_TYPES } from "@/enums"
import { addStudentSchema } from "@/schema"
import { IAddStudentSchema } from "@/types"
import "react-toastify/dist/ReactToastify.css"

const defaultFormValues: IAddStudentSchema = {
    studentName: "",
}

export const AddStudentForm = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm<IAddStudentSchema>({
        resolver: yupResolver(addStudentSchema()),
        defaultValues: defaultFormValues,
        mode: "all",
    })

    const onSubmit: SubmitHandler<IAddStudentSchema> = async (data) => {
        const { studentName } = data

        const newStudentPayload = {
            studentName,
        }

        const { success } = await addStudent(newStudentPayload)

        if (success) {
            toast.success("Podopieczny dodany pomyślnie!")
        } else {
            toast.error("Błąd podczas dodawania podopiecznego!")
        }

        reset()
    }

    return (
        <div className="py-12 flex justify-center items-center">
            <div className="bg-white px-12 py-12 flex flex-col items-center w-96 rounded-lg">
                <h1 className="text-3xl pb-8">Dodaj podopiecznego</h1>
                <div className="w-full mx-auto flex justify-center">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col items-center justify-center w-full"
                    >
                        <Controller
                            name="studentName"
                            control={control}
                            render={({ field: { name, onChange, ref, value } }) => (
                                <TextInput
                                    isError={errors.studentName}
                                    name={name}
                                    label="Nazwa podopiecznego"
                                    onChange={onChange}
                                    inputRef={ref}
                                    value={value}
                                    errorMessage={errors.studentName?.message}
                                    placeholder="Nazwa podopiecznego"
                                    classname="pb-4"
                                />
                            )}
                        />
                        <NormalButton className="mt-6" label="Dodaj" type={BUTTON_TYPES.SUBMIT} />
                    </form>
                </div>
            </div>
        </div>
    )
}
