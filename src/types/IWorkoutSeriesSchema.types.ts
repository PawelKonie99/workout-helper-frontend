// export interface IWorkoutSeriesSchema {
//     exerciseData: {
//         exerciseName: string
//         numberOfReps: string
//     }[]
// }
export interface IWorkoutSeriesSchema {
    exerciseData: {
        exerciseName: {
            value: string
            label: string
        }
        // numberOfReps?: number
    }[]
}
// export interface IWorkoutSeriesSchema {
//     exerciseName: string
//     numberOfReps: string
// }
