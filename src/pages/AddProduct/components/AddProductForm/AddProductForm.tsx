import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "react-toastify"
import { getProductData, translateProduct } from "@/api/externalApi"
import { NormalButton, TextInput } from "@/components"
import { MEAL_TYPES } from "@/enums"
import { IDatabaseProduct, IProductPayload } from "@/types"
import delteIcon from "../../../../images/svg/delete-icon.svg"

interface Props {
    timeOfTheMeal: MEAL_TYPES
    title: string
    // handleSetNewlyAddedProductName: (newProduct: string) => void
    handleSendProductData: (product: IProductPayload) => Promise<{ success: boolean }>
    handleDeleteProduct: (
        productId: string,
        timeOfTheMeal: MEAL_TYPES,
    ) => Promise<{ success: boolean }>
    alreadyAddedProducts?: IDatabaseProduct[]
}

export const AddProductForm = ({
    timeOfTheMeal,
    title,
    // handleSetNewlyAddedProductName,
    handleSendProductData,
    handleDeleteProduct,
    alreadyAddedProducts,
}: Props) => {
    const [productNameAndWeight, setProductNameAndWeight] = useState({ name: "", weight: "" })
    const [isLoading, setIsLoading] = useState(false)

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setProductNameAndWeight((prevState) => ({ ...prevState, name: event.target.value }))
    }
    const handleWeightChange = (event: ChangeEvent<HTMLInputElement>) => {
        setProductNameAndWeight((prevState) => ({
            ...prevState,
            weight: event.target.value ? `${event.target.value}g` : event.target.value,
        }))
    }

    const { name, weight } = productNameAndWeight

    const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            setIsLoading(true)
            const translatedProductName = await translateProduct(name)
            const [productData] = await getProductData(translatedProductName, weight)

            const { food_name, nf_calories, nf_protein, nf_total_carbohydrate, nf_total_fat } =
                productData

            const newProductPayload: IProductPayload = {
                productName: `${name} ${weight}`,
                carbons: nf_total_carbohydrate,
                fat: nf_total_fat,
                kcal: nf_calories,
                proteins: nf_protein,
                typeOfMeal: timeOfTheMeal,
            }

            const { success } = await handleSendProductData(newProductPayload)

            if (success) {
                toast.success(`${name} dodany pomyślnie!`)
            } else {
                toast.error("Błąd podczas dodawania produktu!")
            }

            setProductNameAndWeight({ name: "", weight: "" })
            // handleSetNewlyAddedProductName(`${food_name}${Math.random()}`) //TODO refactor
            setIsLoading(false)
        } catch (error: unknown) {
            setProductNameAndWeight({ name: "", weight: "" })
            toast.error("Błąd podczas dodawania produktu!")
            setIsLoading(false)
        }
    }

    const handleDelete = async (productId: string, productName: string) => {
        const { success } = await handleDeleteProduct(productId, timeOfTheMeal)

        if (success) {
            toast.success(`${productName} usunięty pomyślnie!`)
        } else {
            toast.error("Błąd podczas usuwania produktu!")
        }
    }

    return (
        <div className="flex flex-col items-center justify-start mb-4 lg:mb-10">
            <form onSubmit={handleOnSubmit} className="flex flex-col items-center">
                <h3 className="text-xl lg:text-2xl pb-4">{title}</h3>
                <div className="flex flex-col lg:flex-row">
                    <TextInput
                        name="product-name"
                        label="Nazwa produktu"
                        placeholder="Nazwa produktu"
                        value={name}
                        onChange={handleNameChange}
                        classname="pb-4"
                    />
                    <TextInput
                        name="product-weight"
                        label="Waga produktu (g)"
                        placeholder="Waga produktu (g)"
                        value={weight.replace("g", "")}
                        onChange={handleWeightChange}
                        classname="pb-4 lg:ml-4"
                        inputType="number"
                    />
                </div>

                <NormalButton label="Dodaj" type="submit" isLoading={isLoading} />
            </form>
            {alreadyAddedProducts && alreadyAddedProducts?.length > 0 ? (
                <span className="mt-2">Dodane produkty</span>
            ) : null}
            <div className="mt-3 flex flex-col items-center">
                <div className="grid grid-cols-2 gap-4 mt-2">
                    {alreadyAddedProducts?.map(
                        ({ productName, kcal, proteins, carbons, fat, _id }, index) => (
                            <div key={`${productName}${index}`} className="flex lg:ml-6">
                                <img
                                    src={delteIcon}
                                    className="cursor-pointer flex items-start w-5 h-5 mr-2"
                                    onClick={() => handleDelete(_id, productName)}
                                />
                                <div className="flex flex-col relative">
                                    <span className="text-xs">Nazwa produktu: {productName}</span>
                                    <span className="text-xs">kcal: {kcal}</span>
                                    <span className="text-xs">białko: {proteins} g</span>
                                    <span className="text-xs">węglowodany: {carbons} g</span>
                                    <span className="text-xs">tłuszcz: {fat} g</span>
                                </div>
                            </div>
                        ),
                    )}
                </div>
            </div>
        </div>
    )
}
