import { CHANGE_USER_PASSWORD } from "@/constants/apiRoutes"
import { IStandardResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

interface IChangeUserPasswordPayload {
    //TODO te payloady tutaj powinny byc a nie w typach
    userId: string
    newPassword: string
}

export const changeUserPassword = async (changeUserPasswordPayload: IChangeUserPasswordPayload) => {
    const { data } = await instance.post<IStandardResponse>(
        CHANGE_USER_PASSWORD,
        changeUserPasswordPayload,
    )

    return data
}
