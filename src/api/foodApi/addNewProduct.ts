import { FOOD_PRODUCT } from "@/constants"
import { isAxiosError } from "@/helpers"
import { IProductPayload, IStandardResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const addNewProduct = async (productPayload: IProductPayload) => {
    try {
        const { data } = await instance.post<IStandardResponse>(FOOD_PRODUCT, productPayload)

        return data
    } catch (error: unknown) {
        if (isAxiosError<IStandardResponse>(error) && error.response?.data) {
            return error.response?.data
        }
        throw error
    }
}
