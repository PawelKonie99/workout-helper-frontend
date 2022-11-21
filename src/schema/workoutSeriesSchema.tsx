import * as yup from "yup"
import { IWorkoutSeriesSchema } from "@/types"

export const workoutSeriesSchema = () => {
    const schema: yup.SchemaOf<IWorkoutSeriesSchema> = yup.object().shape({
        workoutData: yup.array().of(
            yup.object().shape({
                exerciseName: yup.object().shape({
                    label: yup.string().required("Wybór ćwiczenia jest wymagany"),
                    value: yup.string().required("Wybór ćwiczenia jest wymagany"),
                }),
                repsQuantity: yup.object().shape({
                    label: yup.string().required("Ilość powtórzeń jest wymagana"),
                    value: yup.string().required("Ilość powtórzeń jest wymagana"),
                }),
                seriesQuantity: yup.object().shape({
                    label: yup.string().required("Ilość serii jest wymagana"),
                    value: yup.string().required("Ilość serii jest wymagana"),
                }),
                weightQuantity: yup.string().required("Waga obciązenia jest wymagana"),
            }),
        ),
    })

    return schema
}
