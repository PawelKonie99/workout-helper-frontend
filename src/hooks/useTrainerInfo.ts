import { useEffect } from "react"
import { getUserInfo } from "@/api"
import { saveUserTrainer } from "@/store/userReducer/actions/saveUserTrainer"
import { useAppDispatch } from "@/store/hooks/storeHooks"

export const useTrainerInfo = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const getTrainerInfo = async () => {
            const { trainerName, trainerId } = await getUserInfo()

            if (trainerName && trainerId) {
                saveUserTrainer(dispatch, trainerName, trainerId)
            } else {
                saveUserTrainer(dispatch, "", "")
            }
        }
        getTrainerInfo()
    }, [])
}
