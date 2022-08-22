import * as yup from "yup"
import { ILoginFormSchema } from "@/types"

export const loginSchema = () => {
    const schema: yup.SchemaOf<ILoginFormSchema> = yup.object().shape({
        username: yup
            .string()
            .required("Nazwa uzytkownika jest wymagana")
            .min(3, "Nazwa uzytkownika jest za krótka"),
        password: yup.string().required("Hasło jest wymagane").min(6, "Hasło jest za krótkie"),
    })

    return schema
}
