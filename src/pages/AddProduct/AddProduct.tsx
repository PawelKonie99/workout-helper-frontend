import { useGetTodayProduct } from "@/hooks"
import { addNewProduct } from "@/api"
import { AllMealsForm } from "@/components"

const AddProduct = () => {
    const { todayProductsData, setNewlyAddedProductName, setRemovedProductId } =
        useGetTodayProduct()

    const { totalKcal, totalProteins, totalFat, totalCarbons } =
        todayProductsData?.todaySummary ?? {}

    const handleSetNewlyAddedProductName = (newProductName: string) => {
        setNewlyAddedProductName(newProductName)
    }
    const handleSetRemovedProductId = (productId: string) => {
        setRemovedProductId(productId)
    }

    return (
        <div className="bg-offWhite flex justify-center">
            <AllMealsForm
                addedProducts={todayProductsData?.todayProducts}
                handleSendProductData={addNewProduct}
                handleSetNewlyAddedProductName={handleSetNewlyAddedProductName}
                handleSetRemovedProductId={handleSetRemovedProductId}
                allDayMealsId={todayProductsData?.allDayMealsId}
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
