import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { NewWorkoutForm } from "./components"
import { TrainingPlan } from "./components/TrainingPlan/TrainingPlan"

const Workout = () => {
    const { trainerRole } = useSelector((state: RootState) => state.userReducer.roles)

    return (
        <div className="flex flex-col items-center justify-center">
            {!trainerRole && <TrainingPlan />}
            <NewWorkoutForm />
        </div>
    )
}

export default Workout
