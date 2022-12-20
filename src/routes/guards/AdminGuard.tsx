import { Navigate } from "react-router-dom"
import { useAppSelector } from "@/store/hooks/storeHooks"

interface Props {
    children: React.ReactNode
}

export const AdminGuard = ({ children }: Props) => {
    const isAdmin = useAppSelector((state) => state.userReducer.roles.adminRole)

    return isAdmin ? <>{children}</> : <Navigate to="/" />
}
