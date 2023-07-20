import { useSWRConfig } from "swr"
import { useGetTodayProduct } from "@/hooks"
import { addNewProduct, deleteProduct } from "@/api"
import { AllMealsForm, MacrosSummary } from "@/components"
import { MEAL_TYPES } from "@/enums"
import { DietFromTrainer } from "./components"
import { useAppSelector } from "@/store/hooks/storeHooks"
import { IMealMacros, IProductPayload } from "@/types"
import { TODAY_FOOD_PRODUCT } from "@/constants"

const AddProduct = () => {
    const { mutate } = useSWRConfig()
    const { data } = useGetTodayProduct()

    const { dailySummary, todayUserProducts } = data || {}

    const { trainerRole } = useAppSelector((state) => state.userReducer.roles)

    const handleAddNewProduct = async (product: IProductPayload) => {
        const { success } = await addNewProduct(product)
        await mutate(TODAY_FOOD_PRODUCT)

        return { success }
    }

    const handleDeleteProduct = async (
        productId: string,
        timeOfTheMeal: MEAL_TYPES,
    ): Promise<{ success: boolean }> => {
        if (todayUserProducts?.id) {
            const { success } = await deleteProduct(todayUserProducts?.id, productId, timeOfTheMeal)

            await mutate(TODAY_FOOD_PRODUCT)
            return { success }
        }

        return { success: false }
    }

    return (
        <div className="flex flex-col pb-10 bg-offWhite">
            {!trainerRole && <DietFromTrainer />}
            <div className="bg-offWhite flex flex-col xl:flex-row justify-center mt-8">
                <AllMealsForm
                    addedProducts={todayUserProducts ?? {}}
                    handleSendProductData={handleAddNewProduct}
                    handleDeleteProduct={handleDeleteProduct}
                />
                {dailySummary && dailySummary?.kcal > 0 ? (
                    <div className="ml-16">
                        <MacrosSummary
                            title="Podsumowanie dzisiejszego dnia:"
                            dailySummary={dailySummary as IMealMacros}
                        />
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default AddProduct
