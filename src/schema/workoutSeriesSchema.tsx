import * as yup from "yup"
import { IWorkoutSeriesSchema } from "@/types"

export const workoutSeriesSchema = () => {
    const schema: yup.SchemaOf<IWorkoutSeriesSchema> = yup.object().shape({
        exerciseData: yup.array().of(
            yup.object().shape({
                // exerciseName: yup.string().required("Wybór ćwiczenia jest wymagany"),
                exerciseName: yup.object().shape({
                    label: yup.string().required("Wybór ćwiczenia jest wymagany"),
                    value: yup.string().required("Wybór ćwiczenia jest wymagany"),
                }),
                // numberOfReps: yup.number().positive().integer(),
            }),
        ),
    })

    return schema
}
