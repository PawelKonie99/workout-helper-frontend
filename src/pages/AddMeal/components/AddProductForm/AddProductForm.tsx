import { ChangeEvent, FormEvent, useState } from "react"
import { getByProductData } from "@/api/externalApi"
import { NormalButton, TextInput } from "@/components"
import { BUTTON_TYPES, MEAL_TYPES } from "@/enums"

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
        const productData = await getByProductData(productName)

        //Tutaj powinno leciec zapisanie posilki do bazy danych
        console.log("productData", productData, timeOfTheMeal)
    }

    return (
        <div className="flex justify-center">
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
