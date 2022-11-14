import { REMOVE_DIET_PRODUCT } from "@/constants"
import { IRemoveDietProduct, IStandardResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

//TODO ujednolicic nazwy, bo czasami jest remove a czasami delete
export const removeDietProduct = async (userAndProductData: IRemoveDietProduct) => {
    const { studentId, productToRemove } = userAndProductData

    const { data } = await instance.delete<IStandardResponse>(REMOVE_DIET_PRODUCT, {
        data: { studentId, productToRemove },
    })

    return data
}
