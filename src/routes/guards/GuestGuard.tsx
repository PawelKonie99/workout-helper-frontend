import { Navigate } from "react-router-dom"
import { useAppSelector } from "@/store/hooks/storeHooks"

interface Props {
    children: React.ReactNode
}

export const GuestGuard = ({ children }: Props) => {
    //TODO Here token need to be checked, or smth else that recognize logged user
    const isLoggedIn = useAppSelector((state) => state.userReducer.loggedIn)

    return isLoggedIn ? <Navigate to="/" /> : <>{children}</>
}
