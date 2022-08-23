import * as yup from "yup"
import { IRegisterFormSchema } from "@/types"

export const registerSchema = () => {
    const schema: yup.SchemaOf<IRegisterFormSchema> = yup.object().shape({
        username: yup
            .string()
            .required("Nazwa uzytkownika jest wymagana")
            .min(3, "Nazwa uzytkownika jest za krótka"),
        password: yup.string().required("Hasło jest wymagane").min(6, "Hasło jest za krótkie"),
        confirmPassword: yup
            .string()
            .required("Powtorzenie hasła jest wymagane")
            .oneOf([yup.ref("password"), null], "Hasła nie zgadzają się"),
    })

    return schema
}
