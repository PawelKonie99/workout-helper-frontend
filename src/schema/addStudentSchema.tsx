import * as yup from "yup"
import { IAddStudentSchema } from "@/types"

export const addStudentSchema = () => {
    const schema: yup.SchemaOf<IAddStudentSchema> = yup.object().shape({
        studentName: yup
            .string()
            .required("Nazwa uzytkownika jest wymagana")
            .min(3, "Nazwa uzytkownika jest za krótka"),
    })

    return schema
}
