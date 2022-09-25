import { MEAL_TYPES, RESPONSE_CODE } from "@/enums"

export interface IProductPayload {
    typeOfMeal: MEAL_TYPES
    productName: string
    kcal: number
    proteins: number
    carbons: number
    fat: number
}

export interface ISaveProductResponse {
    code: RESPONSE_CODE
    message: string
    success: boolean
}
