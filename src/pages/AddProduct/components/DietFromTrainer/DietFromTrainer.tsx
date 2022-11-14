import { toast } from "react-toastify"
import { useState } from "react"
import { MacrosSummary, NormalButton } from "@/components"
import { BUTTON_VARIANT } from "@/enums"
import "react-toastify/dist/ReactToastify.css"
import { getDiet } from "@/api/studentApi/getDiet"
import { IUserDietData } from "@/types"
import { DietTimeOfMeal } from "../DietTimeOfMeal/DietTimeOfMeal"

export const DietFromTrainer = () => {
    const [userDiet, setUserDiet] = useState<IUserDietData | Record<string, never>>()

    const handleGetDietFromTrainer = async () => {
        const { diet, success } = await getDiet()

        if (!success) {
            toast.error("Błąd podczas pobierania diety!")
        }
        if (diet && diet?.dailySummary?.totalKcal <= 0) {
            toast.error("Nie masz aktualnie rozpisanej diety!")
        }

        if (diet) {
            setUserDiet(diet)
        }
    }

    const { breakfast, brunch, dinner, dessert, supper, dailySummary } = userDiet ?? {}

    return (
        <div className="flex flex-col justify-center items-center">
            <NormalButton
                buttonVariant={BUTTON_VARIANT.SECONDARY}
                label="Pobierz diete od trenera"
                onClick={handleGetDietFromTrainer}
                className="mb-4"
            />
            {userDiet &&
                userDiet?.dailySummary?.totalKcal < 0 && ( //TODO lepszy warunek, jak bedzie puste to chyba wyswietli
                    <div className="flex mb-6">
                        <DietTimeOfMeal timeOfMeal="Sniadanie" mealProducts={breakfast} />
                        <DietTimeOfMeal timeOfMeal="Drugie sniadanie" mealProducts={brunch} />
                        <DietTimeOfMeal timeOfMeal="Obiad" mealProducts={dinner} />
                        <DietTimeOfMeal timeOfMeal="Deser" mealProducts={dessert} />
                        <DietTimeOfMeal timeOfMeal="Kolacja" mealProducts={supper} />
                        <MacrosSummary title="W sumie:" dailySummary={dailySummary} />
                    </div>
                )}
        </div>
    )
}
