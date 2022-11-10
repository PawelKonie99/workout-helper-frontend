import { NewWorkoutForm } from "./components"
import { TrainingPlan } from "./components/TrainingPlan/TrainingPlan"

const Workout = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <TrainingPlan />
            <NewWorkoutForm />
        </div>
    )
}

export default Workout
