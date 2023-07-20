import useSWR, { Fetcher } from "swr"
import { getUserInfo } from "@/api"
import { saveUserTrainer } from "@/store/userReducer/actions/saveUserTrainer"
import { useAppDispatch } from "@/store/hooks/storeHooks"
import { IUserDataResponse } from "@/types"
import { GET_USER_INFO } from "@/constants"

const fetcher: Fetcher<IUserDataResponse, string> = () => getUserInfo()

export const useTrainerInfo = () => {
    const dispatch = useAppDispatch()
    const { data, error } = useSWR(GET_USER_INFO, fetcher)

    const { trainerName, trainerId } = data ?? {}

    if (trainerName && trainerId) {
        saveUserTrainer(dispatch, trainerName, trainerId)
    } else {
        saveUserTrainer(dispatch, "", "")
    }
}
