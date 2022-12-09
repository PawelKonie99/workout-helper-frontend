import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getUserInfo } from "@/api"
import { saveUserTrainer } from "@/store/userReducer/actions/saveUserTrainer"

export const useTrainerInfo = () => {
    const dispatch = useDispatch()

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
