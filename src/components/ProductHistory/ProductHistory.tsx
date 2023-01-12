import { toast } from "react-toastify"
import { ChangeEvent, FormEvent, useState } from "react"
import { IMealHistory } from "@/types"
import { NormalButton, SingleMealDayHistory, TextInput } from ".."
import { getMealsHisotryByDate } from "@/api"

interface Props {
    productHistory?: IMealHistory[]
    handleChangeOffset?: () => void
}

export const ProductHistory = ({ productHistory, handleChangeOffset }: Props) => {
    const [dateToFind, setDateToFind] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [productByDate, setProductsByDate] = useState<IMealHistory[]>()

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
            const { success, mealHistory } = await getMealsHisotryByDate(dateToFind)

            if (mealHistory) {
                if (success && mealHistory?.length > 0) {
                    toast.success(`Treningi pobrane pomyślnie!`)
                } else {
                    toast.error("Błąd podczas pobierania treningów!")
                }
            } else {
                return
            }

            setProductsByDate(mealHistory)

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
                {productHistory && productHistory?.length > 0 ? (
                    productHistory.map((singleMealDay) => (
                        <SingleMealDayHistory
                            key={singleMealDay.dailySummary.kcal}
                            singleMealDay={singleMealDay}
                        />
                    ))
                ) : (
                    <p>Brak danych o historii posiłków</p>
                )}

                {productHistory && productHistory?.length > 0 && (
                    <NormalButton
                        buttonVariant="primary"
                        label="Pobierz wiecej historii posiłków"
                        onClick={handleLoadHistory}
                        className="mt-4"
                    />
                )}
            </div>
            <div className="flex flex-col mt-10 2xl:ml-4 2xl:pl-4 2xl:mt-0 border-l-2">
                <form
                    onSubmit={handleOnSubmit}
                    className=" flex flex-col justify-start items-center"
                >
                    <TextInput
                        name="date"
                        label="Wyszukaj posiłków po dacie"
                        placeholder="Np: 11-01-2023"
                        value={dateToFind}
                        onChange={handleDateChange}
                        classname="w-64"
                    />

                    <NormalButton
                        label="Szukaj"
                        type="submit"
                        isLoading={isLoading}
                        className="mt-4 w-64"
                    />
                </form>
                {productByDate &&
                    productByDate.map((singleMealDay) => (
                        <SingleMealDayHistory
                            key={singleMealDay.dailySummary.kcal}
                            singleMealDay={singleMealDay}
                        />
                    ))}
            </div>
        </div>
    )
}
