import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { NewWorkoutForm } from "./components"
import { TrainingPlan } from "./components/TrainingPlan/TrainingPlan"

const Workout = () => {
    const { isTrainer } = useSelector((state: RootState) => state.userReducer)

    return (
        <div className="flex flex-col items-center justify-center">
            {!isTrainer && <TrainingPlan />}
            <NewWorkoutForm />
        </div>
    )
}

export default Workout
