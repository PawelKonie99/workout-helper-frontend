import { useState } from "react"
import {
    Controller,
    DeepRequired,
    FieldArrayWithId,
    FieldErrorsImpl,
    UseFieldArrayRemove,
} from "react-hook-form"
import { CustomSelect, NormalButton, TextInput } from "@/components"
import { ISelectOption, IWorkoutFields, IWorkoutSeriesSchema } from "@/types"
import { useGetAllWorkoutOptions } from "@/hooks"
import { getBestExercise } from "@/api"
import { isSelectOptionTypeGuard } from "@/helpers"

interface Props {
    item: FieldArrayWithId<IWorkoutSeriesSchema, "workoutData", "id">
    index: number
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: any //TODO pomyslec nad tym any
    errors: FieldErrorsImpl<DeepRequired<IWorkoutSeriesSchema>>
    remove: UseFieldArrayRemove
    showBestRecord?: boolean
}

export const WorkoutFormFields = ({
    item,
    index,
    control,
    errors,
    remove,
    showBestRecord = true,
}: Props) => {
    const { EXERCISE, WEIGHT, REPS, SERIES } = useGetAllWorkoutOptions() ?? {}
    const [bestExercise, setBestExercise] = useState<IWorkoutFields>()

    const handleExerciseNameChange = async (option: ISelectOption | unknown) => {
        if (isSelectOptionTypeGuard(option) && showBestRecord) {
            const bestExerciseResponse = await getBestExercise(option.value)

            const { exerciseName, repsQuantity, seriesQuantity, weightQuantity } =
                bestExerciseResponse?.exerciseWithRecord?.workoutData ?? {}

            if (exerciseName && repsQuantity && seriesQuantity && weightQuantity) {
                setBestExercise({ exerciseName, repsQuantity, seriesQuantity, weightQuantity })
            }
        }
    }

    return (
        <div className="flex flex-col lg:flex-row items-start mb-10 lg:h-4.35">
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
                            label="??wiczenie"
                            placeholder="Wybierz ??wiczenie"
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
                                errors?.workoutData?.[index]?.exerciseName?.label?.message
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
                            label="Powt??rzenia"
                            placeholder="Dodaj ilo???? powt??rze??"
                            options={REPS}
                            name={name}
                            onChange={onChange}
                            inputRef={ref}
                            value={REPS.find((chosenReps) => chosenReps.value === value)}
                            isError={errors?.workoutData?.[index]?.repsQuantity?.label}
                            errorMessage={
                                errors?.workoutData?.[index]?.repsQuantity?.label?.message
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
                            placeholder="Dodaj ilo???? serii"
                            options={SERIES}
                            name={name}
                            onChange={onChange}
                            inputRef={ref}
                            value={SERIES.find((chosenSeries) => chosenSeries.value === value)}
                            isError={errors?.workoutData?.[index]?.seriesQuantity?.label}
                            errorMessage={
                                errors?.workoutData?.[index]?.seriesQuantity?.label?.message
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
                    render={({ field: { name, onChange, ref, value } }) => (
                        <div className="ml-2">
                            <TextInput
                                inputType="number"
                                label="Waga (kg)"
                                placeholder="Dodaj wag?? obci??zenia"
                                name={name}
                                onChange={onChange}
                                inputRef={ref}
                                value={value}
                                isError={errors?.workoutData?.[index]?.weightQuantity}
                                errorMessage={errors?.workoutData?.[index]?.weightQuantity?.message}
                                isSmall
                                isLabelAbove
                            />
                        </div>
                    )}
                />
            )}

            {index > 0 && (
                <div className="h-full flex items-end">
                    <NormalButton
                        onClick={() => remove(index)}
                        buttonVariant="delete"
                        className="mt-4 lg:mt-0 ml-2"
                        label="Usu?? ??wiczenie"
                    />
                </div>
            )}

            {bestExercise && showBestRecord && (
                <div className="flex flex-col ml-6">
                    <span>
                        Tw??j najlepszy wynik <br /> w tym ??wiczeniu
                    </span>
                    <span>Ci??zar: {bestExercise.weightQuantity}</span>
                    <span>Powt??rzenia: {bestExercise.repsQuantity}</span>
                    <span>Serie: {bestExercise.seriesQuantity}</span>
                </div>
            )}
        </div>
    )
}
