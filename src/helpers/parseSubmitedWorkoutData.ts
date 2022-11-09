import { IWorkoutFormField } from "@/types"

export const parseSubmitedWorkoutData = (workoutData: IWorkoutFormField[]) => {
    return workoutData.map((object) => ({
        exerciseName: object.exerciseName.value,
        repsQuantity: Number(object.repsQuantity.value),
        seriesQuantity: Number(object.seriesQuantity.value),
        weightQuantity: Number(object.weightQuantity.value),
    }))
}
