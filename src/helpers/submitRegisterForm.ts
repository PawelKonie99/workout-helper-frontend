import { NavigateFunction } from "react-router"
import { IRegisterFormSchema } from "@/types"

export const submitRegisterForm = (data: IRegisterFormSchema, navigate: NavigateFunction) => {
    console.log("Register data", data)

    navigate("./here")
}
