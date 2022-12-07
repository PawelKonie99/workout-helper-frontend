import { AppDispatch } from "@/store/store"
import { loginUser } from "../userReducer"

export const saveUserLogout = (dispatch: AppDispatch) => {
    dispatch(
        loginUser({
            loggedIn: false,
            token: "",
            roles: { adminRole: false, trainerRole: false, userRole: false },
        }),
    )
}
