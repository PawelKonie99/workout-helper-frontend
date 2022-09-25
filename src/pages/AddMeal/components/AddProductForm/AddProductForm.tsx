import { ChangeEvent, FormEvent, useState } from "react"
import { getByProductData } from "@/api/externalApi"
import { NormalButton, TextInput } from "@/components"
import { BUTTON_TYPES, MEAL_TYPES } from "@/enums"
import { addNewProduct } from "@/api"
import { IProductPayload } from "@/types"

interface Props {
    timeOfTheMeal: MEAL_TYPES
    title: string
}

export const AddProductForm = ({ timeOfTheMeal, title }: Props) => {
    const [productName, setProductName] = useState("")

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setProductName(event.target.value)
    }

    const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
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

        await addNewProduct(newProductPayload)
    }

    return (
        <div className="flex justify-center mb-10">
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
        </div>
    )
}
