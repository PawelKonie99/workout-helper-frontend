import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from "@mui/material"
import { IMealHistory } from "@/types"
import { MealSummary } from "../../pages/Profile/components/MealSummary/MealSummary"

interface Props {
    singleMealDay: IMealHistory
}

export const SingleMealDayHistory = ({ singleMealDay }: Props) => {
    const { breakfast, brunch, dailySummary, dessert, dinner, mealDate, supper } = singleMealDay

    return (
        <div className="mb-6">
            {mealDate && <span className="text-lg">Data: {mealDate}</span>}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Posiłek</TableCell>
                            <TableCell align="right">Białka</TableCell>
                            <TableCell align="right">Węglowodany</TableCell>
                            <TableCell align="right">Tłuszcze</TableCell>
                            <TableCell align="right">Kalorie</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <MealSummary timeOfMeal={breakfast} title="Śniadanie:" />
                        <MealSummary timeOfMeal={brunch} title="Drugie śniadanie:" />
                        <MealSummary timeOfMeal={dinner} title="Obiad:" />
                        <MealSummary timeOfMeal={dessert} title="Deser:" />
                        <MealSummary timeOfMeal={supper} title="Kolacja:" />
                        <MealSummary title="W sumie:" timeOfMeal={dailySummary} />
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
