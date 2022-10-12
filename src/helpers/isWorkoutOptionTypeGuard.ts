import { IWorkoutOption } from "@/types"

export const isWorkoutOptionTypeGuard = (option: unknown): option is IWorkoutOption => {
    return (option as IWorkoutOption).value !== undefined
}
