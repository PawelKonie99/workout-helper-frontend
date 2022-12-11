import { GET_USERS } from "@/constants"
import { IGetAllUsersResponse, IPaginationValuesPayload } from "@/types"
import { instance } from "../interceptors/sendToken"

export const getUsers = async (paginationValues: IPaginationValuesPayload) => {
    const { data } = await instance.get<IGetAllUsersResponse>(
        `${GET_USERS}/${paginationValues.offset}/${paginationValues.limit}`,
    )

    return data
}
