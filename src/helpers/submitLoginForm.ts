import { NavigateFunction } from "react-router"
import { ILoginFormSchema } from "@/types"
import { saveUserLogin } from "@/store/userReducer/actions/saveUserLogin"
import { AppDispatch } from "@/store/store"

export const submitLoginForm = (
    data: ILoginFormSchema,
    navigate: NavigateFunction,
    dispatch: AppDispatch,
) => {
    //tutaj bedzie zwrotka z backendu, jesli user podal odpowiedni login i haslo zapisujemy to w storze

    saveUserLogin(dispatch)

    navigate("./here")
}
