import { useForm, useFieldArray, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { TextInput } from "./TextInput/TextInput"
import { IWorkoutSeriesSchema } from "@/types"
import { INITIAL_REP_COUNT } from "@/constants"
import { workoutSeriesSchema } from "@/schema"
import { CustomSelect } from "./CustomSelect/CustomSelect"
import { RepInput } from "./RepInput/RepInput"

const defaultFormValues: IWorkoutSeriesSchema = {
    exerciseData: [
        {
            exerciseName: {
                value: "",
                label: "",
            },
            // numberOfReps: INITIAL_REP_COUNT,
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

    const onSubmit = (data: any) => console.log("data", data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ul>
                {fields.map((item, index) => {
                    return (
                        <li key={item.id}>
                            <Controller
                                name={`exerciseData.${index}.exerciseName`}
                                control={control}
                                defaultValue={item.exerciseName} // make sure to set up defaultValue
                                render={({ field: { name, onChange, ref, value } }) => (
                                    <CustomSelect
                                        name={name}
                                        onChange={onChange}
                                        inputRef={ref}
                                        value={value}
                                        isError={errors?.exerciseData?.[index]?.exerciseName?.label}
                                        errorMessage={
                                            errors?.exerciseData?.[index]?.exerciseName?.label
                                                ?.message
                                        }
                                    />
                                )}
                            />

                            {/* <Controller
                                name={`exerciseData.${index}.numberOfReps`}
                                control={control}
                                defaultValue={item.numberOfReps} // make sure to set up defaultValue
                                render={({ field: { name, onChange, ref, value } }) => (
                                    <RepInput
                                        label="Liczba powtórzen"
                                        name={name}
                                        onChange={onChange}
                                        inputRef={ref}
                                        value={value}
                                        isError={errors?.exerciseData?.[index]?.numberOfReps}
                                        errorMessage={
                                            errors?.exerciseData?.[index]?.numberOfReps?.message
                                        }
                                    />
                                )}
                            /> */}

                            <RepInput
                                label="Liczba powtórzen"
                                name={"elo"}
                                onChange={() => console.log("elo")}
                            />
                            <button type="button" onClick={() => remove(index)}>
                                Delete
                            </button>
                        </li>
                    )
                })}
            </ul>
            <section>
                <button
                    type="button"
                    onClick={() => {
                        append({
                            exerciseName: {
                                value: "",
                                label: "",
                            },
                            // numberOfReps: INITIAL_REP_COUNT,
                        })
                    }}
                >
                    append
                </button>

                <button
                    type="button"
                    onClick={() =>
                        reset({
                            exerciseData: [
                                {
                                    exerciseName: {
                                        value: "",
                                        label: "",
                                    },
                                    // numberOfReps: INITIAL_REP_COUNT,
                                },
                            ],
                        })
                    }
                >
                    reset
                </button>
            </section>

            <input type="submit" />
        </form>
    )
}
