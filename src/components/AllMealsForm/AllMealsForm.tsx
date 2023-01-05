import { MEAL_TYPES } from "@/enums"
import { AddProductForm } from "@/pages/AddProduct/components"
import { IProductPayload, ITodayProducts } from "@/types"

interface Props {
    addedProducts: Omit<ITodayProducts, "mealDate" | "id"> | Record<string, never>
    handleSetNewlyAddedProductName: (newProduct: string) => void
    handleSendProductData: (product: IProductPayload) => Promise<{ success: boolean }>
    handleDeleteProduct: (
        productId: string,
        timeOfTheMeal: MEAL_TYPES,
    ) => Promise<{ success: boolean }>
}

export const AllMealsForm = ({
    addedProducts,
    handleSetNewlyAddedProductName,
    handleSendProductData,
    handleDeleteProduct,
}: Props) => {
    const { breakfast, brunch, dinner, dessert, supper } = addedProducts

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
            <AddProductForm
                timeOfTheMeal={MEAL_TYPES.BREAKFAST}
                title="Śniadanie"
                alreadyAddedProducts={breakfast}
                handleSetNewlyAddedProductName={handleSetNewlyAddedProductName}
                handleSendProductData={handleSendProductData}
                handleDeleteProduct={handleDeleteProduct}
            />
            <AddProductForm
                timeOfTheMeal={MEAL_TYPES.BRUNCH}
                title="Drugie Śniadanie"
                alreadyAddedProducts={brunch}
                handleSetNewlyAddedProductName={handleSetNewlyAddedProductName}
                handleSendProductData={handleSendProductData}
                handleDeleteProduct={handleDeleteProduct}
            />
            <AddProductForm
                timeOfTheMeal={MEAL_TYPES.DINNER}
                title="Obiad"
                alreadyAddedProducts={dinner}
                handleSetNewlyAddedProductName={handleSetNewlyAddedProductName}
                handleSendProductData={handleSendProductData}
                handleDeleteProduct={handleDeleteProduct}
            />
            <AddProductForm
                timeOfTheMeal={MEAL_TYPES.DESSERT}
                title="Podwieczorek"
                alreadyAddedProducts={dessert}
                handleSetNewlyAddedProductName={handleSetNewlyAddedProductName}
                handleSendProductData={handleSendProductData}
                handleDeleteProduct={handleDeleteProduct}
            />
            <AddProductForm
                timeOfTheMeal={MEAL_TYPES.SUPPER}
                title="Kolacja"
                alreadyAddedProducts={supper}
                handleSetNewlyAddedProductName={handleSetNewlyAddedProductName}
                handleSendProductData={handleSendProductData}
                handleDeleteProduct={handleDeleteProduct}
            />
        </div>
    )
}
