import { toast } from "react-toastify"
import { useForm, useFieldArray } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { IWorkoutSeriesSchema } from "@/types"
import { workoutFormValues, workoutSeriesSchema } from "@/schema"
import { BUTTON_TYPES, BUTTON_VARIANT } from "@/enums"
import { NormalButton, WorkoutFormFields } from "@/components"
import { addNewWorkout } from "@/api"
import "react-toastify/dist/ReactToastify.css"
import { parseSubmitedWorkoutData } from "@/helpers"

export const NewWorkoutForm = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm<IWorkoutSeriesSchema>({
        resolver: yupResolver(workoutSeriesSchema()),
        defaultValues: workoutFormValues,
        mode: "all",
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: "workoutData",
    })

    const onSubmit = async (data: IWorkoutSeriesSchema) => {
        const parsedSubmitedForm = parseSubmitedWorkoutData(data.workoutData)

        const newWorkoutPayload = {
            workoutData: parsedSubmitedForm,
        }

        const { success } = await addNewWorkout(newWorkoutPayload)

        if (success) {
            toast.success("Trening dodany pomyślnie!")
        } else {
            toast.error("Błąd podczas dodawania treningu!")
        }

        reset()
        return data
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
            <div className="flex flex-col justify-start">
                {fields.map((item, index) => {
                    return (
                        <WorkoutFormFields
                            control={control}
                            errors={errors}
                            index={index}
                            item={item}
                            remove={remove}
                            key={item.id}
                        />
                    )
                })}
            </div>
            <div className="flex flex-col pt-8">
                <NormalButton
                    buttonVariant={BUTTON_VARIANT.SECONDARY}
                    label="Dodaj ćwiczenie"
                    onClick={() => {
                        append(workoutFormValues.workoutData)
                    }}
                    className="mb-4"
                />
                <NormalButton label="Zakoncz" type={BUTTON_TYPES.SUBMIT} />
            </div>
        </form>
    )
}
