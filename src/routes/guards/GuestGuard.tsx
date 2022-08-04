import { Navigate } from "react-router-dom"

interface Props {
    children: React.ReactNode
}

export const GuestGuard = ({ children }: Props) => {
    //Here token need to be checked, or smth else that recognize logged user
    const isAuthenticated = false

    return isAuthenticated ? <Navigate to="/" /> : <>{children}</>
}
