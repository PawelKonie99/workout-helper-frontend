import { useGetTodayProduct } from "@/hooks"
import { addNewProduct, deleteProduct } from "@/api"
import { AllMealsForm } from "@/components"
import { MEAL_TYPES } from "@/enums"

const AddProduct = () => {
    const { todayProductsData, setNewlyAddedProductName, setRemovedProductId } =
        useGetTodayProduct()

    const { totalKcal, totalProteins, totalFat, totalCarbons } =
        todayProductsData?.todaySummary ?? {}

    const handleSetNewlyAddedProductName = (newProductName: string) => {
        setNewlyAddedProductName(newProductName)
    }

    const handleDeleteProduct = async (
        productId: string,
        timeOfTheMeal: MEAL_TYPES,
    ): Promise<{ success: boolean }> => {
        if (todayProductsData?.allDayMealsId) {
            const { success } = await deleteProduct(
                todayProductsData?.allDayMealsId,
                productId,
                timeOfTheMeal,
            )
            setRemovedProductId(productId)

            return { success }
        }

        return { success: false }
    }

    return (
        <div className="bg-offWhite flex justify-center">
            <AllMealsForm
                addedProducts={todayProductsData?.todayProducts}
                handleSendProductData={addNewProduct}
                handleSetNewlyAddedProductName={handleSetNewlyAddedProductName}
                handleDeleteProduct={handleDeleteProduct}
            />
            {totalKcal && totalKcal > 0 ? (
                <div className="ml-16">
                    <h3 className="text-xl mb-4">Podsumowanie dzisiejszego dnia:</h3>
                    <p>Kcal: {totalKcal?.toFixed(2)}</p>
                    <p>Białko: {totalProteins?.toFixed(2)}</p>
                    <p>Tłuszcz: {totalFat?.toFixed(2)}</p>
                    <p>Węglowodany: {totalCarbons?.toFixed(2)}</p>
                </div>
            ) : null}
        </div>
    )
}

export default AddProduct
