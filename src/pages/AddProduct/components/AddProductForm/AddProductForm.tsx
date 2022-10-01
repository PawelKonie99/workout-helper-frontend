import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "react-toastify"
import { getByProductData } from "@/api/externalApi"
import { NormalButton, TextInput } from "@/components"
import { BUTTON_TYPES, MEAL_TYPES, RESPONSE_CODE } from "@/enums"
import { addNewProduct } from "@/api"
import { IDatabaseProduct, IProductPayload } from "@/types"
import "react-toastify/dist/ReactToastify.css"

interface Props {
    timeOfTheMeal: MEAL_TYPES
    title: string
    handleSetNewlyAddedProductName: (newProduct: string) => void
    alreadyAddedProducts?: IDatabaseProduct[]
}

export const AddProductForm = ({
    timeOfTheMeal,
    title,
    alreadyAddedProducts,
    handleSetNewlyAddedProductName,
}: Props) => {
    const [productName, setProductName] = useState("")

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setProductName(event.target.value)
    }

    const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            const [productData] = await getByProductData(productName)

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
            setProductName("")

            const { code } = await addNewProduct(newProductPayload)

            if (code === RESPONSE_CODE.success) {
                toast.success(`${food_name} dodany pomyślnie!`)
            } else {
                toast.error("Błąd podczas dodawania produktu!")
            }

            handleSetNewlyAddedProductName(food_name)
        } catch (error: unknown) {
            setProductName("")
            toast.error("Błąd podczas dodawania produktu!")
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
                    value={productName}
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
                    {alreadyAddedProducts?.map((product, index) => (
                        <div key={`${product.productName}${index}`} className="flex flex-col ml-4">
                            <span className="text-xs">Nazwa produktu: {product.productName}</span>
                            <span className="text-xs">kcal: {product.kcal}</span>
                            <span className="text-xs">białko: {product.proteins}</span>
                            <span className="text-xs">węglowodany: {product.carbons}</span>
                            <span className="text-xs">tłuszcz: {product.fat}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
