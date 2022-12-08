import { AppDispatch } from "@/store/store"
import { IUserRoles } from "@/types"
import { loginUser } from "../userReducer"

export const saveUserLogin = (
    dispatch: AppDispatch,
    token: string,
    roles: IUserRoles,
    username: string,
) => {
    dispatch(loginUser({ loggedIn: true, token, roles, username }))
}
