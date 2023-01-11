import { IMealMacros, ITodayProducts } from "@/types"

export const isTodayProductsTypeGuard = (option: unknown): option is ITodayProducts => {
    return (option as ITodayProducts) !== undefined
}

export const isProductsSummaryTypeGuard = (option: unknown): option is IMealMacros => {
    return (option as IMealMacros) !== undefined
}
