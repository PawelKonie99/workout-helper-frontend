import * as yup from "yup"
import { IWorkoutSeriesSchema } from "@/types"

export const workoutSeriesSchema = () => {
    const schema: yup.SchemaOf<IWorkoutSeriesSchema> = yup.object().shape({
        exerciseName: yup.string().required("Wybór ćwiczenia jest wymagany"),
        numberOfReps: yup.string().required("Ilość powtórzeń jest wymagana"),
    })

    return schema
}
