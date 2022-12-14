import { DELETE_USER } from "@/constants"
import { IStandardResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const deleteUser = async (userIdToRemove: string) => {
    const { data } = await instance.delete<IStandardResponse>(DELETE_USER, {
        data: { userIdToRemove },
    })

    return data
}
