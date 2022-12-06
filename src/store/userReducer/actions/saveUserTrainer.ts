import { AppDispatch } from "@/store/store"
import { setUserTrainer } from "../userReducer"

export const saveUserTrainer = (dispatch: AppDispatch, trainerName: string) => {
    dispatch(setUserTrainer({ trainerName }))
}
