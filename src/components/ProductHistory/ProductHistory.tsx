import { IMealHistory } from "@/types"
import { SingleMealDayHistory } from ".."

interface Props {
    productHistory?: IMealHistory[]
}

export const ProductHistory = ({ productHistory }: Props) => {
    return (
        <div>
            {productHistory && productHistory?.length > 0 ? (
                productHistory.map((singleMealDay) => {
                    return (
                        <SingleMealDayHistory
                            key={singleMealDay.dailySummary.totalKcal}
                            singleMealDay={singleMealDay}
                        />
                    )
                })
            ) : (
                <p>Brak danych o historii posiłków</p>
            )}
        </div>
    )
}
