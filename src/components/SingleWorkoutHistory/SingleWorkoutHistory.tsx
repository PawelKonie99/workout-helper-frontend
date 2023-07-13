import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from "@mui/material"
import { IWorkoutFields } from "@/types"

interface Props {
    workoutData: IWorkoutFields[]
    date?: string
}

export const SingleWorkoutHistory = ({ workoutData, date }: Props) => {
    return (
        <div className="mb-8">
            {date && <span className="text-lg">Data: {date}</span>}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 550 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nazwa ćwiczenia</TableCell>
                            <TableCell align="right">Ilość powtórzeń</TableCell>
                            <TableCell align="right">Ilość serii</TableCell>
                            <TableCell align="right">Waga obciązenia</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {workoutData.map(
                            ({ exerciseName, repsQuantity, seriesQuantity, weightQuantity }) => (
                                <TableRow
                                    key={exerciseName}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        {exerciseName}
                                    </TableCell>
                                    <TableCell align="right">{repsQuantity}</TableCell>
                                    <TableCell align="right">{seriesQuantity}</TableCell>
                                    <TableCell align="right">{weightQuantity} kg</TableCell>
                                </TableRow>
                            ),
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
