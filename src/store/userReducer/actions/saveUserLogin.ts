import { AppDispatch } from "@/store/store"
import { IRoles } from "@/types"
import { loginUser } from "../userReducer"

export const saveUserLogin = (
    dispatch: AppDispatch,
    token: string,
    roles: IRoles,
    username: string,
) => {
    dispatch(loginUser({ loggedIn: true, token, roles, username }))
}
