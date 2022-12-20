import { CHANGE_USER_ROLE } from "@/constants/apiRoutes"
import { isAxiosError } from "@/helpers"
import { IChangeRolePayload, IStandardResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const changeUserRole = async (changeRolePayload: IChangeRolePayload) => {
    try {
        const { data } = await instance.post<IStandardResponse>(CHANGE_USER_ROLE, changeRolePayload)

        return data
    } catch (error: unknown) {
        if (isAxiosError<IStandardResponse>(error) && error.response?.data) {
            return error.response?.data
        }
        throw error
    }
}
