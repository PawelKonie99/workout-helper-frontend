import { useAppSelector } from "@/store/hooks/storeHooks"
import { NewWorkoutForm } from "./components"
import { TrainingPlan } from "./components/TrainingPlan/TrainingPlan"

const Workout = () => {
    const { trainerRole } = useAppSelector((state) => state.userReducer.roles)

    return (
        <div className="flex flex-col items-center justify-center">
            {!trainerRole && <TrainingPlan />}
            <NewWorkoutForm />
        </div>
    )
}

export default Workout
