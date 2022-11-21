import * as yup from "yup"
import { IAddStudentPlanSchema } from "@/types"

export const addStudentPlanSchema = () => {
    const schema: yup.SchemaOf<IAddStudentPlanSchema> = yup.object().shape({
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
        userData: yup.object().shape({
            label: yup.string().required("Wybór podopiecznego jest wymagany"),
            value: yup.string().required("Wybór podopiecznego jest wymagany"),
        }),
    })

    return schema
}
