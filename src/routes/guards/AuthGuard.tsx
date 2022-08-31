import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { RootState } from "@/store/store"

interface Props {
    children: React.ReactNode
}

export const AuthGuard = ({ children }: Props) => {
    const isLoggedIn = useSelector((state: RootState) => state.userReducer.loggedIn)

    return !isLoggedIn ? <Navigate to="/login" /> : <>{children}</>
}
