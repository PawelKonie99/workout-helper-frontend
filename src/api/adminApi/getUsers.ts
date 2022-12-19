import { GET_USERS } from "@/constants"
import { isAxiosError } from "@/helpers"
import { IGetAllUsersResponse, IPaginationValuesPayload } from "@/types"
import { instance } from "../interceptors/sendToken"

export const getUsers = async (paginationValues: IPaginationValuesPayload) => {
    try {
        const { data } = await instance.get<IGetAllUsersResponse>(
            `${GET_USERS}/${paginationValues.offset}/${paginationValues.limit}`,
        )

        return data
    } catch (error: unknown) {
        if (isAxiosError<IGetAllUsersResponse>(error) && error.response?.data) {
            return error.response?.data
        }
        throw error
    }
}
