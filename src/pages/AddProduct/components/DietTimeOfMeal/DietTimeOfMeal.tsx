import { IDatabaseProduct } from "@/types"

interface Props {
    timeOfMeal: string
    mealProducts: IDatabaseProduct[]
}

export const DietTimeOfMeal = ({ timeOfMeal, mealProducts }: Props) => {
    return (
        <div className="flex flex-col mr-6">
            <span className="text-xl">{timeOfMeal}</span>
            {mealProducts.map(({ productName }) => (
                <div key={productName}>
                    <span>{productName}</span>
                </div>
            ))}
        </div>
    )
}
