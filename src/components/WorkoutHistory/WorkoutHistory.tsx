import { toast } from "react-toastify"
import { ChangeEvent, FormEvent, useState } from "react"
import { NormalButton, SingleWorkoutHistory, TextInput } from "@/components"
import { IUserWorkoutDataFromDatabase } from "@/types"
import { getWorkoutByDate } from "@/api"

interface Props {
    workoutHistory?: IUserWorkoutDataFromDatabase[]
    handleChangeOffset?: () => void
}

export const WorkoutHistory = ({ workoutHistory, handleChangeOffset }: Props) => {
    const [dateToFind, setDateToFind] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [workoutsByDate, setWorkoutsByDate] = useState<IUserWorkoutDataFromDatabase[]>()

    const handleLoadHistory = async () => {
        handleChangeOffset && handleChangeOffset()
    }

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDateToFind(event.target.value)
    }

    const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            setIsLoading(true)
            const { success, allUserWorkouts } = await getWorkoutByDate(dateToFind)

            if (allUserWorkouts) {
                if (success && allUserWorkouts?.length > 0) {
                    toast.success(`Treningi pobrane pomyślnie!`)
                } else {
                    toast.error("Błąd podczas pobierania treningów!")
                }
            } else {
                return
            }

            setWorkoutsByDate(allUserWorkouts)

            setDateToFind("")
            setIsLoading(false)
        } catch (error: unknown) {
            setDateToFind("")
            toast.error("Błąd podczas pobierania treningów!")
            setIsLoading(false)
        }
    }

    return (
        <div className="flex flex-col 2xl:flex-row">
            <div>
                {workoutHistory && workoutHistory?.length > 0 ? (
                    workoutHistory.map(({ workout: { workoutData, date }, id }) => (
                        <SingleWorkoutHistory workoutData={workoutData} date={date} key={id} />
                    ))
                ) : (
                    <p>Brak danych o historii treningów</p>
                )}
                {workoutHistory && workoutHistory?.length > 0 && (
                    <NormalButton
                        buttonVariant="primary"
                        label="Pobierz wiecej historii treningów"
                        onClick={handleLoadHistory}
                        className="mt-4"
                    />
                )}
            </div>
            <div className="flex flex-col mt-10 2xl:ml-4 2xl:pl-4 2xl:mt-0 2xl:border-l-2">
                <form
                    onSubmit={handleOnSubmit}
                    className=" flex flex-col justify-start items-center"
                >
                    <TextInput
                        name="date"
                        label="Wyszukaj trening po dacie"
                        placeholder="Np: 11-01-2023"
                        value={dateToFind}
                        onChange={handleDateChange}
                        classname="w-64"
                        isLabelAbove
                    />

                    <NormalButton
                        label="Szukaj"
                        type="submit"
                        isLoading={isLoading}
                        className="mt-4 w-64"
                    />
                </form>
                {workoutsByDate &&
                    workoutsByDate.map(({ workout: { workoutData, date }, id }) => (
                        <SingleWorkoutHistory workoutData={workoutData} date={date} key={id} />
                    ))}
            </div>
        </div>
    )
}
