import { toast } from "react-toastify"
import { useState } from "react"
import { getTrainingPlan } from "@/api"
import { IWorkoutFields } from "@/types"
import { NormalButton, SingleWorkoutHistory } from "@/components"
import { BUTTON_VARIANT } from "@/enums"
import "react-toastify/dist/ReactToastify.css"

export const TrainingPlan = () => {
    const [userTrainingPlan, setUserTrainingPlan] = useState<IWorkoutFields[]>()

    const handleGetTrainingPlan = async () => {
        const { trainingPlan, success } = await getTrainingPlan()

        if (!success) {
            toast.error("Błąd podczas pobierania planu!")
        }

        setUserTrainingPlan(trainingPlan)
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <NormalButton
                buttonVariant={BUTTON_VARIANT.SECONDARY}
                label="Pobierz plan od trenera"
                onClick={handleGetTrainingPlan}
                className="mb-4"
            />
            {userTrainingPlan && userTrainingPlan?.length > 1 && (
                <SingleWorkoutHistory workoutData={userTrainingPlan} />
            )}
        </div>
    )
}
