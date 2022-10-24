import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { RootState } from "@/store/store"

interface Props {
    children: React.ReactNode
}

export const TrainerGuard = ({ children }: Props) => {
    const isTrainer = useSelector((state: RootState) => state.userReducer.isTrainer)

    return isTrainer ? <>{children}</> : <Navigate to="/" />
}
