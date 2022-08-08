import { AppDispatch } from "@/store/store"
import { loginUser } from "../userReducer"

export const saveUserLogin = (dispatch: AppDispatch) => {
    dispatch(loginUser({ loggedIn: true }))
}
