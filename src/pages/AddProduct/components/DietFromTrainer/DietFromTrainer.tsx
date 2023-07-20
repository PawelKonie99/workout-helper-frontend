import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from "@mui/material"
import { toast } from "react-toastify"
import { useState } from "react"
import { MacrosSummary, NormalButton } from "@/components"
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
        if (diet && diet?.dailySummary?.kcal <= 0) {
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
                buttonVariant="secondary"
                label="Pobierz dietę od trenera"
                onClick={handleGetDietFromTrainer}
                className="mb-4"
            />
            {userDiet && userDiet?.dailySummary?.kcal > 0 && (
                <div className="flex flex-col lg:flex-row mb-6">
                    <div className="max-w-xs md:max-w-full">
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Czas posiłku</TableCell>
                                        <TableCell align="right">Nazwa potrawy</TableCell>
                                        {/* <TableCell align="right">Ilość&nbsp;(g)</TableCell> */}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <DietTimeOfMeal
                                        timeOfMeal="Sniadanie"
                                        mealProducts={breakfast}
                                    />
                                    <DietTimeOfMeal
                                        timeOfMeal="Drugie sniadanie"
                                        mealProducts={brunch}
                                    />
                                    <DietTimeOfMeal timeOfMeal="Obiad" mealProducts={dinner} />
                                    <DietTimeOfMeal timeOfMeal="Deser" mealProducts={dessert} />
                                    <DietTimeOfMeal timeOfMeal="Kolacja" mealProducts={supper} />
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <MacrosSummary title="W sumie:" dailySummary={dailySummary} />
                </div>
            )}
        </div>
    )
}
