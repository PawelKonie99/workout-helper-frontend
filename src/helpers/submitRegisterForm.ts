import { IRegisterFormSchema } from "@/types"
import { registerUser } from "@/api"

export const submitRegisterForm = async (data: IRegisterFormSchema) => {
    const { username, password } = data

    const registerUserPayload = {
        username: username,
        password: password,
    }

    const { code, message, success } = await registerUser(registerUserPayload)

    return { code, message, success }
}
