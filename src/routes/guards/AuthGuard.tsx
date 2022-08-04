import { Navigate } from "react-router-dom"

interface Props {
    children: React.ReactNode
}

export const AuthGuard = ({ children }: Props) => {
    //Here token need to be checked, or smth else that recognize logged user
    const isAuthenticated = true

    return !isAuthenticated ? <Navigate to="/login" /> : <>{children}</>
}
