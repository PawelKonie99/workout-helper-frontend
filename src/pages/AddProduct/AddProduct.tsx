import { useSelector } from "react-redux"
import { useGetTodayProduct } from "@/hooks"
import { addNewProduct, deleteProduct } from "@/api"
import { AllMealsForm, MacrosSummary } from "@/components"
import { MEAL_TYPES } from "@/enums"
import { DietFromTrainer } from "./components"
import { RootState } from "@/store/store"

const AddProduct = () => {
    const { isTrainer } = useSelector((state: RootState) => state.userReducer)
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
            {!isTrainer && <DietFromTrainer />}
            <div className="bg-offWhite flex justify-center">
                <AllMealsForm
                    addedProducts={todayProductsData?.todayProducts}
                    handleSendProductData={addNewProduct}
                    handleSetNewlyAddedProductName={handleSetNewlyAddedProductName}
                    handleDeleteProduct={handleDeleteProduct}
                />
                {todayProductsData?.todaySummary &&
                todayProductsData?.todaySummary?.totalKcal > 0 ? (
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
