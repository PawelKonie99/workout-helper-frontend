export interface INewWorkoutPayload {
    workoutData: {
        exerciseName: string
        repsQuantity: number
        seriesQuantity: number
        weightQuantity: number
    }[]
}
