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
        allDayMeals: {
            mealDate: string
            breakfast: IDatabaseProduct[]
            brunch: IDatabaseProduct[]
            dinner: IDatabaseProduct[]
            dessert: IDatabaseProduct[]
            supper: IDatabaseProduct[]
        }
        id: string
    }[]
}

export interface ITodayProductsResponse {
    code: RESPONSE_CODE
    success: boolean
    todayUserProducts?: ITodayProducts
    dailySummary?: IProductsSummary
}

export interface ITodayProducts {
    allDayMeals: {
        mealDate: string
        breakfast: IDatabaseProduct[]
        brunch: IDatabaseProduct[]
        dinner: IDatabaseProduct[]
        dessert: IDatabaseProduct[]
        supper: IDatabaseProduct[]
    }
    id: string
}

export interface IProductsSummary {
    totalKcal: number
    totalProteins: number
    totalFat: number
    totalCarbons: number
}
