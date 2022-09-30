import { TODAY_FOOD_PRODUCT } from "@/constants"
import { ITodayProductsResponse } from "@/types"
import { instance } from "../interceptors/sendToken"

export const getTodayProduct = async () => {
    const { data } = await instance.get<ITodayProductsResponse>(TODAY_FOOD_PRODUCT)
    //* Interceptor sie uzwa dlatego, ze tutaj mamy instance.post zamiast axios.post instance jest zrobiony recznie, jest to instacja axiosa

    return data
}
