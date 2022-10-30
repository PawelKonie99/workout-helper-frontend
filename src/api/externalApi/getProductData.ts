import axios from "axios"
import { IFood, INutritionProductResponse } from "@/types"

export const getProductData = async (productName: string): Promise<IFood[]> => {
    const { REACT_APP_NUTRITION_APP_ID, REACT_APP_NUTRITION_KEY } = process.env

    const productData = await axios.post<INutritionProductResponse>(
        "https://trackapi.nutritionix.com/v2/natural/nutrients",
        {
            query: productName,
        },
        {
            headers: {
                "x-app-id": REACT_APP_NUTRITION_APP_ID ? REACT_APP_NUTRITION_APP_ID : " ",
                "x-app-key": REACT_APP_NUTRITION_KEY ? REACT_APP_NUTRITION_KEY : "",
            },
        },
    )

    return productData.data.foods
}
