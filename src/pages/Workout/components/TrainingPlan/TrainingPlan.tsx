import { toast } from "react-toastify"
import { useState } from "react"
import { getTrainingPlan } from "@/api"
import { IWorkoutFields } from "@/types"
import { NormalButton, SingleWorkoutHistory } from "@/components"

export const TrainingPlan = () => {
    const [userTrainingPlan, setUserTrainingPlan] = useState<IWorkoutFields[]>()

    const handleGetTrainingPlan = async () => {
        const { trainingPlan, success } = await getTrainingPlan()

        if (!success) {
            toast.error("Błąd podczas pobierania planu!")
        }
        if (trainingPlan?.length === 0) {
            toast.error("Nie masz aktualnie planu treningowego!")
        }

        setUserTrainingPlan(trainingPlan)
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <NormalButton
                buttonVariant="secondary"
                label="Pobierz plan od trenera"
                onClick={handleGetTrainingPlan}
                className="mb-4"
            />
            {userTrainingPlan && userTrainingPlan?.length > 0 && (
                <div className="max-w-xs md:max-w-full">
                    <SingleWorkoutHistory workoutData={userTrainingPlan} />
                </div>
            )}
        </div>
    )
}
