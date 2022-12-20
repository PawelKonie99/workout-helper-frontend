import { Navigate } from "react-router-dom"
import { RootState } from "@/store/store"
import { useAppSelector } from "@/store/hooks/storeHooks"

interface Props {
    children: React.ReactNode
}

export const TrainerGuard = ({ children }: Props) => {
    const isTrainer = useAppSelector((state: RootState) => state.userReducer.roles.trainerRole)

    return isTrainer ? <>{children}</> : <Navigate to="/" />
}
