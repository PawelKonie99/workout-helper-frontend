import { CHANGE_USER_ROLE } from "@/constants/apiRoutes"
import { IChangeRolePayload, IStandardResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const changeUserRole = async (changeRolePayload: IChangeRolePayload) => {
    const { data } = await instance.post<IStandardResponse>(CHANGE_USER_ROLE, changeRolePayload)

    return data
}
