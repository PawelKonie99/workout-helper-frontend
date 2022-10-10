import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useForm, useFieldArray, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { IWorkoutOption, IWorkoutSeriesSchema } from "@/types"
import { workoutSeriesSchema } from "@/schema"
import { BUTTON_TYPES, BUTTON_VARIANT, RESPONSE_CODE } from "@/enums"
import { CustomSelect, NormalButton } from "@/components"
import { addNewWorkout, getAllWorkoutOptions } from "@/api"
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
    const [workoutOptions, setWorkoutOptions] = useState<{
        EXERCISE: IWorkoutOption[]
        WEIGHT: IWorkoutOption[]
        REPS: IWorkoutOption[]
        SERIES: IWorkoutOption[]
    }>()

    const { EXERCISE, WEIGHT, REPS, SERIES } = workoutOptions ?? {}
    console.log("EXERCISE, WEIGHT, REPS, SERIES", EXERCISE, WEIGHT, REPS, SERIES)

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

    useEffect(() => {
        const getWorkoutOptions = async () => {
            const { exercise, series, reps, weight } = await getAllWorkoutOptions()

            if (exercise && series && reps && weight) {
                setWorkoutOptions({
                    EXERCISE: exercise,
                    SERIES: series,
                    REPS: reps,
                    WEIGHT: weight,
                })
            }
        }

        getWorkoutOptions()
    }, [])

    const handleExerciseNameChange = (option: IWorkoutOption | unknown) => {
        console.log(typeof option)

        console.log("event", option)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
            {fields.map((item, index) => {
                return (
                    <div key={item.id} className="flex items-center my-2">
                        {EXERCISE && (
                            <Controller
                                name={`workoutData.${index}.exerciseName`}
                                control={control}
                                defaultValue={item.exerciseName}
                                render={({
                                    field: {
                                        name,
                                        onChange,
                                        ref,
                                        value: { value },
                                    },
                                }) => (
                                    <CustomSelect
                                        label="Ćwiczenie"
                                        placeholder="Wybierz ćwiczenie"
                                        options={EXERCISE}
                                        name={name}
                                        onChange={onChange}
                                        onChangeCustom={handleExerciseNameChange}
                                        inputRef={ref}
                                        value={EXERCISE.find(
                                            (chosenExercise) => chosenExercise.value === value,
                                        )}
                                        isError={errors?.workoutData?.[index]?.exerciseName?.label}
                                        errorMessage={
                                            errors?.workoutData?.[index]?.exerciseName?.label
                                                ?.message
                                        }
                                    />
                                )}
                            />
                        )}
                        {REPS && (
                            <Controller
                                name={`workoutData.${index}.repsQuantity`}
                                control={control}
                                defaultValue={item.repsQuantity}
                                render={({
                                    field: {
                                        name,
                                        onChange,
                                        ref,
                                        value: { value },
                                    },
                                }) => (
                                    <CustomSelect
                                        label="Powtórzenia"
                                        placeholder="Dodaj ilość powtórzeń"
                                        options={REPS}
                                        name={name}
                                        onChange={onChange}
                                        inputRef={ref}
                                        value={REPS.find(
                                            (chosenReps) => chosenReps.value === value,
                                        )}
                                        isError={errors?.workoutData?.[index]?.repsQuantity?.label}
                                        errorMessage={
                                            errors?.workoutData?.[index]?.repsQuantity?.label
                                                ?.message
                                        }
                                    />
                                )}
                            />
                        )}
                        {SERIES && (
                            <Controller
                                name={`workoutData.${index}.seriesQuantity`}
                                control={control}
                                defaultValue={item.seriesQuantity}
                                render={({
                                    field: {
                                        name,
                                        onChange,
                                        ref,
                                        value: { value },
                                    },
                                }) => (
                                    <CustomSelect
                                        label="Serie"
                                        placeholder="Dodaj ilość serii"
                                        options={SERIES}
                                        name={name}
                                        onChange={onChange}
                                        inputRef={ref}
                                        value={SERIES.find(
                                            (chosenSeries) => chosenSeries.value === value,
                                        )}
                                        isError={
                                            errors?.workoutData?.[index]?.seriesQuantity?.label
                                        }
                                        errorMessage={
                                            errors?.workoutData?.[index]?.seriesQuantity?.label
                                                ?.message
                                        }
                                    />
                                )}
                            />
                        )}
                        {WEIGHT && (
                            <Controller
                                name={`workoutData.${index}.weightQuantity`}
                                control={control}
                                defaultValue={item.weightQuantity}
                                render={({
                                    field: {
                                        name,
                                        onChange,
                                        ref,
                                        value: { value },
                                    },
                                }) => (
                                    <CustomSelect
                                        label="Waga"
                                        placeholder="Dodaj wagę obciązenia"
                                        options={WEIGHT}
                                        name={name}
                                        onChange={onChange}
                                        inputRef={ref}
                                        value={WEIGHT.find(
                                            (chosenWeight) => chosenWeight.value === value,
                                        )}
                                        isError={
                                            errors?.workoutData?.[index]?.weightQuantity?.label
                                        }
                                        errorMessage={
                                            errors?.workoutData?.[index]?.weightQuantity?.label
                                                ?.message
                                        }
                                    />
                                )}
                            />
                        )}
                        <NormalButton
                            onClick={() => remove(index)}
                            buttonVariant={BUTTON_VARIANT.DELETE}
                            className="ml-2"
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
