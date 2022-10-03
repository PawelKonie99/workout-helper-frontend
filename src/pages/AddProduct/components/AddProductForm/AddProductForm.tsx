import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "react-toastify"
import { getByProductData } from "@/api/externalApi"
import { NormalButton, TextInput } from "@/components"
import { BUTTON_TYPES, MEAL_TYPES, RESPONSE_CODE } from "@/enums"
import { addNewProduct, deleteProduct } from "@/api"
import { IDatabaseProduct, IProductPayload } from "@/types"
import "react-toastify/dist/ReactToastify.css"

interface Props {
    timeOfTheMeal: MEAL_TYPES
    title: string
    handleSetNewlyAddedProductName: (newProduct: string) => void
    handleSetRemovedProductId: (productId: string) => void
    alreadyAddedProducts?: IDatabaseProduct[]
    allDayMealsId?: string
}

export const AddProductForm = ({
    timeOfTheMeal,
    title,
    alreadyAddedProducts,
    handleSetNewlyAddedProductName,
    handleSetRemovedProductId,
    allDayMealsId,
}: Props) => {
    const [productNameInput, setProductNameInput] = useState("")

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setProductNameInput(event.target.value)
    }

    const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            const [productData] = await getByProductData(productNameInput)

            const { food_name, nf_calories, nf_protein, nf_total_carbohydrate, nf_total_fat } =
                productData

            const newProductPayload: IProductPayload = {
                productName: food_name,
                carbons: nf_total_carbohydrate,
                fat: nf_total_fat,
                kcal: nf_calories,
                proteins: nf_protein,
                typeOfMeal: timeOfTheMeal,
            }
            setProductNameInput("")

            const { code } = await addNewProduct(newProductPayload)

            if (code === RESPONSE_CODE.success) {
                toast.success(`${food_name} dodany pomyślnie!`)
            } else {
                toast.error("Błąd podczas dodawania produktu!")
            }

            console.log("food_name", food_name)
            handleSetNewlyAddedProductName(food_name)
        } catch (error: unknown) {
            setProductNameInput("")
            toast.error("Błąd podczas dodawania produktu!")
        }
    }

    const handleDeleteProduct = async (productId: string, productName: string) => {
        if (allDayMealsId) {
            const { code } = await deleteProduct(allDayMealsId, productId)
            handleSetRemovedProductId(productId)

            if (code === RESPONSE_CODE.success) {
                toast.success(`${productName} usunięty pomyślnie!`)
            } else {
                toast.error("Błąd podczas usuwania produktu!")
            }
        }
    }

    return (
        <div className="flex flex-col items-center justify-center mb-10">
            <form onSubmit={handleOnSubmit} className="flex flex-col items-center">
                <h3 className="text-2xl pb-4">{title}</h3>
                <TextInput
                    name="product-name"
                    label="Nazwa produktu"
                    placeholder="Nazwa produktu"
                    value={productNameInput}
                    onChange={handleOnChange}
                    classname="pb-4"
                />
                <NormalButton label="Dodaj" type={BUTTON_TYPES.SUBMIT} />
            </form>
            {alreadyAddedProducts && alreadyAddedProducts?.length > 0 ? (
                <span className="mt-2">Dodane produkty</span>
            ) : null}
            <div className="mt-4 flex flex-col items-center">
                <div className="flex justify-start mt-2">
                    {alreadyAddedProducts?.map(
                        ({ productName, kcal, proteins, carbons, fat, _id }, index) => (
                            <div
                                key={`${productName}${index}`}
                                className="flex flex-col ml-8 relative"
                            >
                                <div
                                    className="absolute -right-3 -top-4"
                                    onClick={() => handleDeleteProduct(_id, productName)}
                                >
                                    x
                                </div>
                                <span className="text-xs">Nazwa produktu: {productName}</span>
                                <span className="text-xs">kcal: {kcal}</span>
                                <span className="text-xs">białko: {proteins}</span>
                                <span className="text-xs">węglowodany: {carbons}</span>
                                <span className="text-xs">tłuszcz: {fat}</span>
                            </div>
                        ),
                    )}
                </div>
            </div>
        </div>
    )
}
