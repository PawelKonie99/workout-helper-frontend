import axios from "axios"
import { ITranslationResponse } from "@/types"
import { isAxiosError } from "@/helpers"

export const translateProduct = async (productName: string): Promise<string> => {
    try {
        const {
            data: {
                responseData: { translatedText },
            },
        } = await axios.get<ITranslationResponse>("https://api.mymemory.translated.net/get", {
            params: { q: productName, langpair: "pl|en" },
        })

        return translatedText
    } catch (error: unknown) {
        if (isAxiosError<ITranslationResponse>(error) && error.response?.data) {
            return error.response?.data.responseData.translatedText
        }

        throw error
    }
}
