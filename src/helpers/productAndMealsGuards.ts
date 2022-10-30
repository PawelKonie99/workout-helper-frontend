import { IProductsSummary, ITodayProducts } from "@/types"

export const isTodayProductsTypeGuard = (option: unknown): option is ITodayProducts => {
    return (option as ITodayProducts) !== undefined
}

export const isProductsSummaryTypeGuard = (option: unknown): option is IProductsSummary => {
    return (option as IProductsSummary) !== undefined
}
