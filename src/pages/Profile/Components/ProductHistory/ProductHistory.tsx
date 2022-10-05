import { IMealHistory } from "@/types"
import { SingleMealDayHistory } from "../SingleMealDayHistory/SingleMealDayHistory"

interface Props {
    productHistory?: IMealHistory[]
}

export const ProductHistory = ({ productHistory }: Props) => {
    return (
        <div>
            {productHistory ? (
                productHistory.map((singleMealDay) => {
                    return (
                        <SingleMealDayHistory
                            key={singleMealDay.dailySummary.totalKcal}
                            singleMealDay={singleMealDay}
                        />
                    )
                })
            ) : (
                <p>Brak dancyh o historii posiłków</p>
            )}
        </div>
    )
}
