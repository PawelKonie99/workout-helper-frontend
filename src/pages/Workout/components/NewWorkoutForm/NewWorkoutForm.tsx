import { toast } from "react-toastify"
import { useForm, useFieldArray, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { IWorkoutSeriesSchema } from "@/types"
import { workoutSeriesSchema } from "@/schema"
import { EXERCISE_NAME, REPS_QUANTITY, SERIES_QUANTITY, WEIGHT_QUANTITY } from "@/constants"
import { BUTTON_TYPES, BUTTON_VARIANT, RESPONSE_CODE } from "@/enums"
import { CustomSelect, NormalButton } from "@/components"
import { addNewWorkout } from "@/api"
import "react-toastify/dist/ReactToastify.css"

const defaultFormValues: IWorkoutSeriesSchema = {
    workoutData: [
        {
            exerciseName: {
                value: "",
                label: "",
            },
            repsQuantity: {
                value: "",
                label: "",
            },
            seriesQuantity: {
                value: "",
                label: "",
            },
            weightQuantity: {
                value: "",
                label: "",
            },
        },
    ],
}

export const NewWorkoutForm = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm<IWorkoutSeriesSchema>({
        resolver: yupResolver(workoutSeriesSchema()),
        defaultValues: defaultFormValues,
        mode: "all",
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: "workoutData",
    })

    const onSubmit = async (data: IWorkoutSeriesSchema) => {
        const parsedSubmitedForm = data.workoutData.map((object) => ({
            exerciseName: object.exerciseName.value,
            repsQuantity: Number(object.repsQuantity.value),
            seriesQuantity: Number(object.seriesQuantity.value),
            weightQuantity: Number(object.weightQuantity.value),
        }))

        const newWorkoutPayload = {
            workoutData: parsedSubmitedForm,
        }

        const { code } = await addNewWorkout(newWorkoutPayload)

        if (code === RESPONSE_CODE.success) {
            toast.success("Trening dodany pomyślnie!")
        } else {
            toast.error("Błąd podczas dodawania treningu!")
        }

        reset()
        return data
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
            {fields.map((item, index) => {
                return (
                    <div key={item.id} className="flex items-start my-2">
                        <Controller
                            name={`workoutData.${index}.exerciseName`}
                            control={control}
                            defaultValue={item.exerciseName}
                            render={({ field: { name, onChange, ref, value } }) => (
                                <CustomSelect
                                    placeholder="Wybierz ćwiczenie"
                                    options={EXERCISE_NAME}
                                    name={name}
                                    onChange={onChange}
                                    inputRef={ref}
                                    value={EXERCISE_NAME.find((c) => c.value === value.value)}
                                    isError={errors?.workoutData?.[index]?.exerciseName?.label}
                                    errorMessage={
                                        errors?.workoutData?.[index]?.exerciseName?.label?.message
                                    }
                                />
                            )}
                        />
                        <Controller
                            name={`workoutData.${index}.repsQuantity`}
                            control={control}
                            defaultValue={item.repsQuantity}
                            render={({ field: { name, onChange, ref, value } }) => (
                                <CustomSelect
                                    placeholder="Dodaj ilość powtórzeń"
                                    options={REPS_QUANTITY}
                                    name={name}
                                    onChange={onChange}
                                    inputRef={ref}
                                    value={REPS_QUANTITY.find((c) => c.value === value.value)}
                                    isError={errors?.workoutData?.[index]?.repsQuantity?.label}
                                    errorMessage={
                                        errors?.workoutData?.[index]?.repsQuantity?.label?.message
                                    }
                                />
                            )}
                        />
                        <Controller
                            name={`workoutData.${index}.seriesQuantity`}
                            control={control}
                            defaultValue={item.seriesQuantity}
                            render={({ field: { name, onChange, ref, value } }) => (
                                <CustomSelect
                                    placeholder="Dodaj ilość serii"
                                    options={SERIES_QUANTITY}
                                    name={name}
                                    onChange={onChange}
                                    inputRef={ref}
                                    value={SERIES_QUANTITY.find((c) => c.value === value.value)}
                                    isError={errors?.workoutData?.[index]?.seriesQuantity?.label}
                                    errorMessage={
                                        errors?.workoutData?.[index]?.seriesQuantity?.label?.message
                                    }
                                />
                            )}
                        />
                        <Controller
                            name={`workoutData.${index}.weightQuantity`}
                            control={control}
                            defaultValue={item.weightQuantity}
                            render={({ field: { name, onChange, ref, value } }) => (
                                <CustomSelect
                                    placeholder="Dodaj wagę obciązenia"
                                    options={WEIGHT_QUANTITY}
                                    name={name}
                                    onChange={onChange}
                                    inputRef={ref}
                                    value={WEIGHT_QUANTITY.find((c) => c.value === value.value)}
                                    isError={errors?.workoutData?.[index]?.weightQuantity?.label}
                                    errorMessage={
                                        errors?.workoutData?.[index]?.weightQuantity?.label?.message
                                    }
                                />
                            )}
                        />
                        <NormalButton
                            onClick={() => remove(index)}
                            buttonVariant={BUTTON_VARIANT.DELETE}
                            className="ml-2 mt-2"
                            label="Usuń ćwiczenie"
                        />
                    </div>
                )
            })}
            <div className="flex flex-col pt-8">
                <NormalButton
                    buttonVariant={BUTTON_VARIANT.SECONDARY}
                    label="Dodaj ćwiczenie"
                    onClick={() => {
                        append(defaultFormValues.workoutData)
                    }}
                    className="mb-4"
                />
                <NormalButton label="Zakoncz" type={BUTTON_TYPES.SUBMIT} />
            </div>
        </form>
    )
}
