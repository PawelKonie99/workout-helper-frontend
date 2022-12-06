import { GET_TRAINER_REQUEST } from "@/constants"
import { IGetTrainerRequestResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const getTrainerRequest = async () => {
    const { data } = await instance.get<IGetTrainerRequestResponse>(GET_TRAINER_REQUEST)

    return data
}
