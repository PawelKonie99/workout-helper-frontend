import axios from "axios"
import { ITranslationResponse } from "@/types"

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
        return "error"
    }
}
