import { useGetTodayProduct } from "@/hooks"
import { addNewProduct, deleteProduct } from "@/api"
import { AllMealsForm, MacrosSummary } from "@/components"
import { MEAL_TYPES } from "@/enums"
import { DietFromTrainer } from "./components"
import { useAppSelector } from "@/store/hooks/storeHooks"

const AddProduct = () => {
    const { trainerRole } = useAppSelector((state) => state.userReducer.roles)
    const { todayProductsData, setNewlyAddedProductName, setRemovedProductId } =
        useGetTodayProduct()

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
        <div className="flex flex-col">
            {!trainerRole && <DietFromTrainer />}
            <div className="bg-offWhite flex justify-center">
                <AllMealsForm
                    addedProducts={todayProductsData?.todayProducts}
                    handleSendProductData={addNewProduct}
                    handleSetNewlyAddedProductName={handleSetNewlyAddedProductName}
                    handleDeleteProduct={handleDeleteProduct}
                />
                {todayProductsData?.todaySummary && todayProductsData?.todaySummary?.kcal > 0 ? (
                    <div className="ml-16">
                        <MacrosSummary
                            title="Podsumowanie dzisiejszego dnia:"
                            dailySummary={todayProductsData?.todaySummary}
                        />
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default AddProduct
