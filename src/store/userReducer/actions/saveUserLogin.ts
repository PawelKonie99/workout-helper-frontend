import { AppDispatch } from "@/store/store"
import { loginUser } from "../userReducer"

export const saveUserLogin = (dispatch: AppDispatch, token: string) => {
    dispatch(loginUser({ loggedIn: true, token }))
}
