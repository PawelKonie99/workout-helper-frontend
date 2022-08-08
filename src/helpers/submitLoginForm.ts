import { NavigateFunction } from "react-router"
import { ILoginFormSchema } from "@/types"

export const submitLoginForm = (data: ILoginFormSchema, navigate: NavigateFunction) => {
    console.log("Login data", data)

    navigate("./here")
}
