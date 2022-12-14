import * as yup from "yup"
import { IChangeUserPasswordSchema } from "@/types"

export const changeUserPasswordSchema = () => {
    const schema: yup.SchemaOf<IChangeUserPasswordSchema> = yup.object().shape({
        password: yup.string().required("Hasło jest wymagane").min(6, "Hasło jest za krótkie"),
    })

    return schema
}
