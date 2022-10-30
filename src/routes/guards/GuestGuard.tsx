import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { RootState } from "@/store/store"

interface Props {
    children: React.ReactNode
}

export const GuestGuard = ({ children }: Props) => {
    //TODO Here token need to be checked, or smth else that recognize logged user
    const isLoggedIn = useSelector((state: RootState) => state.userReducer.loggedIn)

    return isLoggedIn ? <Navigate to="/" /> : <>{children}</>
}
