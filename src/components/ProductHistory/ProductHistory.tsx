import { IMealHistory } from "@/types"
import { NormalButton, SingleMealDayHistory } from ".."

interface Props {
    productHistory?: IMealHistory[]
    handleChangeOffset?: () => void
}

export const ProductHistory = ({ productHistory, handleChangeOffset }: Props) => {
    const handleLoadHistory = async () => {
        handleChangeOffset && handleChangeOffset()
    }

    return (
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
    )
}
