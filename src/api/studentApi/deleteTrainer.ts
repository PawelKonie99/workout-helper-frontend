import { DELETE_TRAINER } from "@/constants"
import { IStandardResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const deleteTrainer = async () => {
    const { data } = await instance.delete<IStandardResponse>(DELETE_TRAINER)

    return data
}
