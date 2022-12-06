import { toast } from "react-toastify"
import { useForm, useFieldArray, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { IAddStudentPlanSchema, IStudentData } from "@/types"
import { addStudentPlanSchema, studentPlanFormValues, workoutFormValues } from "@/schema"
import { CustomSelect, NormalButton, WorkoutFormFields } from "@/components"
import "react-toastify/dist/ReactToastify.css"
import { addNewTrainingPlan } from "@/api"
import { parseSubmitedUserData, parseSubmitedWorkoutData } from "@/helpers"

type Props = {
    myStudents?: IStudentData[]
}

export const AddStudentTrainingPlanForm = ({ myStudents }: Props) => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm<IAddStudentPlanSchema>({
        resolver: yupResolver(addStudentPlanSchema()),
        defaultValues: studentPlanFormValues,
        mode: "all",
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: "workoutData",
    })

    const onSubmit = async (data: IAddStudentPlanSchema) => {
        const { workoutData, userData } = data

        const parsedSubmitedForm = parseSubmitedWorkoutData(workoutData)
        const parsedUser = parseSubmitedUserData(userData)

        const newTrainingPlanPayload = {
            workoutData: parsedSubmitedForm,
            userData: parsedUser,
        }

        const { success } = await addNewTrainingPlan(newTrainingPlanPayload)

        if (success) {
            toast.success("Plan treningowy dodany pomyślnie!")
        } else {
            toast.error("Błąd podczas dodawania planu treningowego!")
        }

        reset()
    }

    const transformStudentArray = (students: IStudentData[]) =>
        students.map(({ studentName, id }) => ({ value: id, label: studentName }))

    return (
        <>
            {!myStudents || myStudents.length <= 0 ? (
                <span>Nie masz zadnych podopiecznych!</span>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start">
                    {fields.map((item, index) => {
                        return (
                            <WorkoutFormFields
                                control={control}
                                errors={errors}
                                index={index}
                                item={item}
                                remove={remove}
                                key={item.id}
                                showBestRecord={false}
                            />
                        )
                    })}
                    <Controller
                        name="userData"
                        control={control}
                        render={({
                            field: {
                                name,
                                onChange,
                                ref,
                                value: { value },
                            },
                        }) => (
                            <CustomSelect
                                label="Podopieczny"
                                placeholder="Wybierz podopiecznego"
                                options={transformStudentArray(myStudents)}
                                name={name}
                                onChange={onChange}
                                inputRef={ref}
                                value={transformStudentArray(myStudents).find(
                                    (chosenStudent) => chosenStudent.value === value,
                                )}
                                isError={errors?.userData?.label}
                                errorMessage={errors?.userData?.label?.message}
                            />
                        )}
                    />
                    <div className="flex flex-col pt-8 ml-2">
                        <NormalButton
                            buttonVariant="secondary"
                            label="Dodaj ćwiczenie"
                            onClick={() => {
                                append(workoutFormValues.workoutData)
                            }}
                            className="mb-4"
                        />
                        <NormalButton label="Zakoncz dodawanie treningu" type="submit" />
                    </div>
                </form>
            )}
        </>
    )
}
