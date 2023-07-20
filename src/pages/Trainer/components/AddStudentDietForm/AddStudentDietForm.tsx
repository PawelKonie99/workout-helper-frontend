import { useSWRConfig } from "swr"
import { useState } from "react"
import { IProductPayload, ISelectOption, IStudentData } from "@/types"
import { AllMealsForm, CustomSelect } from "@/components"
import { isSelectOptionTypeGuard } from "@/helpers"
import { addNewDietProduct, removeDietProduct } from "@/api"
import { useGetStudentDiet } from "@/hooks"
import { MEAL_TYPES } from "@/enums"
import { GET_STUDENT_DIET } from "@/constants"

type Props = {
    myStudents?: IStudentData[]
}

export const AddStudentDietForm = ({ myStudents }: Props) => {
    const { mutate } = useSWRConfig()
    const [choosenStudent, setChoosenStudent] = useState<ISelectOption>()

    const { data, error } = useGetStudentDiet(choosenStudent)

    const handleChooseStudent = (option: ISelectOption | unknown) => {
        if (isSelectOptionTypeGuard(option)) {
            setChoosenStudent(option)
        }
    }

    const handleAddDietProduct = async (
        product: IProductPayload,
    ): Promise<{ success: boolean }> => {
        if (choosenStudent) {
            const { success } = await addNewDietProduct({
                productPayload: product,
                studentId: choosenStudent?.value,
            })
            await mutate(`${GET_STUDENT_DIET}/${choosenStudent?.value}`)
            return { success }
        }

        return { success: false }
    }

    const handleDeleteProduct = async (
        productId: string,
        timeOfTheMeal: MEAL_TYPES,
    ): Promise<{ success: boolean }> => {
        if (choosenStudent) {
            const removeProductPayload = {
                studentId: choosenStudent?.value,
                productToRemove: {
                    productId,
                    typeOfMeal: timeOfTheMeal, //TODO ujednolicic nazwy, type i time
                },
            }

            const { success } = await removeDietProduct(removeProductPayload)
            await mutate(`${GET_STUDENT_DIET}/${choosenStudent?.value}`)

            return { success }
        }

        return { success: false }
    }

    const transformStudentArray = (students: IStudentData[]) =>
        students.map(({ studentName, id }) => ({ value: id, label: studentName }))

    return (
        <div className="flex flex-col">
            {!myStudents || myStudents.length <= 0 ? (
                <span>Nie masz zadnych podopiecznych!</span>
            ) : (
                <CustomSelect
                    label="Podopieczny"
                    placeholder="Wybierz podopiecznego"
                    options={transformStudentArray(myStudents)}
                    name={"studentName"}
                    onChange={handleChooseStudent}
                    value={choosenStudent}
                    className="mb-8 w-64"
                    isMargin={false}
                />
            )}
            {data?.diet && (
                <AllMealsForm
                    addedProducts={data.diet}
                    handleSendProductData={handleAddDietProduct}
                    handleDeleteProduct={handleDeleteProduct}
                />
            )}
        </div>
    )
}
