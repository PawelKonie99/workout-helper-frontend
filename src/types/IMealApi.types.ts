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

export interface IDeleteProductResponse {
    code: RESPONSE_CODE
    success: boolean
}

export interface IDatabaseProduct {
    productName: string
    kcal: string
    proteins: string
    carbons: string
    fat: string
    _id: string
}

export interface IAllProductsResponse {
    code: RESPONSE_CODE
    success: boolean
    allUserProducts?: {
        mealDate: string
        breakfast: IDatabaseProduct[]
        brunch: IDatabaseProduct[]
        dinner: IDatabaseProduct[]
        dessert: IDatabaseProduct[]
        supper: IDatabaseProduct[]

        id: string
    }[]
}

export interface ITodayProductsResponse {
    code: RESPONSE_CODE
    success: boolean
    todayUserProducts: ITodayProducts | null
    dailySummary: IProductsSummary | null
}

export interface ITodayProducts {
    mealDate: string
    breakfast: IDatabaseProduct[]
    brunch: IDatabaseProduct[]
    dinner: IDatabaseProduct[]
    dessert: IDatabaseProduct[]
    supper: IDatabaseProduct[]
    id: string
}

export interface IProductsSummary {
    totalKcal: number
    totalProteins: number
    totalFat: number
    totalCarbons: number
}

export interface IMealHistoryResponse {
    mealHistory?: {
        dailySummary: IProductsSummary
        mealDate: string
        breakfast: IMealMacros
        brunch: IMealMacros
        dinner: IMealMacros
        dessert: IMealMacros
        supper: IMealMacros
    }[]
    code: RESPONSE_CODE
    success: boolean
}

export interface IMealHistory {
    dailySummary: IProductsSummary
    mealDate: string
    breakfast: IMealMacros
    brunch: IMealMacros
    dinner: IMealMacros
    dessert: IMealMacros
    supper: IMealMacros
}

export interface IMealMacros {
    kcal: number
    proteins: number
    carbons: number
    fat: number
}
