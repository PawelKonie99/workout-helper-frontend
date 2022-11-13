import { MEAL_TYPES } from "@/enums"
import { AddProductForm } from "@/pages/AddProduct/components"
import { IProductPayload, ITodayProducts } from "@/types"

interface Props {
    addedProducts: Omit<ITodayProducts, "mealDate" | "id"> | Record<string, never>
    handleSetNewlyAddedProductName: (newProduct: string) => void
    handleSetRemovedProductId: (productId: string) => void
    handleSendProductData: (product: IProductPayload) => Promise<{ success: boolean }>
    allDayMealsId?: string
}

export const AllMealsForm = ({
    addedProducts,
    handleSetNewlyAddedProductName,
    handleSetRemovedProductId,
    handleSendProductData,
    allDayMealsId,
}: Props) => {
    const { breakfast, brunch, dinner, dessert, supper } = addedProducts

    return (
        <div>
            <AddProductForm
                timeOfTheMeal={MEAL_TYPES.BREAKFAST}
                title="Śniadanie"
                alreadyAddedProducts={breakfast}
                handleSetNewlyAddedProductName={handleSetNewlyAddedProductName}
                allDayMealsId={allDayMealsId}
                handleSetRemovedProductId={handleSetRemovedProductId}
                handleSendProductData={handleSendProductData}
            />
            <AddProductForm
                timeOfTheMeal={MEAL_TYPES.BRUNCH}
                title="Drugie Śniadanie"
                alreadyAddedProducts={brunch}
                handleSetNewlyAddedProductName={handleSetNewlyAddedProductName}
                allDayMealsId={allDayMealsId}
                handleSetRemovedProductId={handleSetRemovedProductId}
                handleSendProductData={handleSendProductData}
            />
            <AddProductForm
                timeOfTheMeal={MEAL_TYPES.DINNER}
                title="Obiad"
                alreadyAddedProducts={dinner}
                handleSetNewlyAddedProductName={handleSetNewlyAddedProductName}
                allDayMealsId={allDayMealsId}
                handleSetRemovedProductId={handleSetRemovedProductId}
                handleSendProductData={handleSendProductData}
            />
            <AddProductForm
                timeOfTheMeal={MEAL_TYPES.DESSERT}
                title="Podwieczorek"
                alreadyAddedProducts={dessert}
                handleSetNewlyAddedProductName={handleSetNewlyAddedProductName}
                allDayMealsId={allDayMealsId}
                handleSetRemovedProductId={handleSetRemovedProductId}
                handleSendProductData={handleSendProductData}
            />
            <AddProductForm
                timeOfTheMeal={MEAL_TYPES.SUPPER}
                title="Kolacja"
                alreadyAddedProducts={supper}
                handleSetNewlyAddedProductName={handleSetNewlyAddedProductName}
                allDayMealsId={allDayMealsId}
                handleSetRemovedProductId={handleSetRemovedProductId}
                handleSendProductData={handleSendProductData}
            />
        </div>
    )
}
