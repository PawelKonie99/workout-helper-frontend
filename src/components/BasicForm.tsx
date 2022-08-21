import { useForm, useFieldArray, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { IWorkoutSeriesSchema } from "@/types"
import { workoutSeriesSchema } from "@/schema"
import { CustomSelect } from "./CustomSelect/CustomSelect"
import { EXERCISE_NAME, REPS_QUANTITY, SERIES_QUANTITY, WEIGHT_QUANTITY } from "@/constants"
import { NormalButton } from "./NormalButton/NormalButton"
import { BUTTON_TYPES, BUTTON_VARIANT } from "@/enums"

const defaultFormValues: IWorkoutSeriesSchema = {
    exerciseData: [
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

export const BasicForm = () => {
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
        name: "exerciseData",
    })

    const onSubmit = (data: any) => {
        reset()
        console.log("data", data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
            {fields.map((item, index) => {
                return (
                    <div key={item.id} className="flex items-start my-2">
                        <Controller
                            name={`exerciseData.${index}.exerciseName`}
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
                                    isError={errors?.exerciseData?.[index]?.exerciseName?.label}
                                    errorMessage={
                                        errors?.exerciseData?.[index]?.exerciseName?.label?.message
                                    }
                                />
                            )}
                        />
                        <Controller
                            name={`exerciseData.${index}.repsQuantity`}
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
                                    isError={errors?.exerciseData?.[index]?.repsQuantity?.label}
                                    errorMessage={
                                        errors?.exerciseData?.[index]?.repsQuantity?.label?.message
                                    }
                                />
                            )}
                        />
                        <Controller
                            name={`exerciseData.${index}.seriesQuantity`}
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
                                    isError={errors?.exerciseData?.[index]?.seriesQuantity?.label}
                                    errorMessage={
                                        errors?.exerciseData?.[index]?.seriesQuantity?.label
                                            ?.message
                                    }
                                />
                            )}
                        />
                        <Controller
                            name={`exerciseData.${index}.weightQuantity`}
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
                                    isError={errors?.exerciseData?.[index]?.weightQuantity?.label}
                                    errorMessage={
                                        errors?.exerciseData?.[index]?.weightQuantity?.label
                                            ?.message
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
                        append(defaultFormValues.exerciseData)
                    }}
                    className="mb-4"
                />
                <NormalButton label="Zakoncz" type={BUTTON_TYPES.SUBMIT} />
            </div>
        </form>
    )
}
