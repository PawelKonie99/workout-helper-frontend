import * as yup from "yup"
import { ILoginFormSchema } from "@/types"

export const loginSchema = () => {
    const schema: yup.SchemaOf<ILoginFormSchema> = yup.object().shape({
        email: yup.string().required("Email jest wymagany").email("Zły format maila"),
        password: yup.string().required("Hasło jest wymagane").min(6, "Hasło jest za krótkie"),
    })

    return schema
}
