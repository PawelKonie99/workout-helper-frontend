import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { RootState } from "@/store/store"

interface Props {
    children: React.ReactNode
}

export const AdminGuard = ({ children }: Props) => {
    const isAdmin = useSelector((state: RootState) => state.userReducer.roles.adminRole)

    return isAdmin ? <>{children}</> : <Navigate to="/" />
}
