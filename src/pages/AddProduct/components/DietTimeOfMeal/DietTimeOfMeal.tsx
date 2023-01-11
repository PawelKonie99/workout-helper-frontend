import { TableRow, TableCell } from "@mui/material"
import { IDatabaseProduct } from "@/types"

interface Props {
    timeOfMeal: string
    mealProducts: IDatabaseProduct[]
}

export const DietTimeOfMeal = ({ timeOfMeal, mealProducts }: Props) => {
    return (
        <>
            {mealProducts.map(({ productName }) => (
                <TableRow
                    key={timeOfMeal}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {timeOfMeal}
                    </TableCell>
                    <TableCell align="right">{productName}</TableCell>
                </TableRow>
            ))}
        </>
    )
}
