import { TableRow, TableCell } from "@mui/material"
import { IMealMacros } from "@/types"

interface IProps {
    title: string
    timeOfMeal: IMealMacros
}

export const MealSummary = ({ title, timeOfMeal }: IProps) => {
    const { carbons, fat, kcal, proteins } = timeOfMeal

    return (
        <TableRow key={title} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
                {title}
            </TableCell>
            <TableCell align="right">{proteins.toFixed(2)} g</TableCell>
            <TableCell align="right">{carbons.toFixed(2)} g</TableCell>
            <TableCell align="right">{fat.toFixed(2)} g</TableCell>
            <TableCell align="right">{kcal.toFixed(2)} kcal</TableCell>
        </TableRow>
    )
}
