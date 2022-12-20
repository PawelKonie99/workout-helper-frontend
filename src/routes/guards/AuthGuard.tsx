import { Navigate } from "react-router-dom"
import { useAppSelector } from "@/store/hooks/storeHooks"

interface Props {
    children: React.ReactNode
}

export const AuthGuard = ({ children }: Props) => {
    const isLoggedIn = useAppSelector((state) => state.userReducer.loggedIn)

    return !isLoggedIn ? <Navigate to="/login" /> : <>{children}</>
}
