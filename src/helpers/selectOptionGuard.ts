import { ISelectOption } from "@/types"

export const isSelectOptionTypeGuard = (option: unknown): option is ISelectOption => {
    return (option as ISelectOption).value !== undefined
}
