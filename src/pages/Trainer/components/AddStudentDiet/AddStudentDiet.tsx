import { useState } from "react"
import { IProductPayload, ISelectOption, IStudentData } from "@/types"
import { AllMealsForm, CustomSelect } from "@/components"
import "react-toastify/dist/ReactToastify.css"
import { isSelectOptionTypeGuard } from "@/helpers"
import { addNewDietProduct } from "@/api"
import { useGetStudentDiet } from "@/hooks"

type Props = {
    myStudents?: IStudentData[]
}

export const AddStudentDiet = ({ myStudents }: Props) => {
    const [choosenStudent, setChoosenStudent] = useState<ISelectOption>()
    const { userDiet, setNewlyAddedProductName, setRemovedProductId } =
        useGetStudentDiet(choosenStudent)

    const handleSetNewlyAddedProductName = (newProductName: string) => {
        setNewlyAddedProductName(`${newProductName}${Math.random()}`) //TODO refactor
    }
    const handleSetRemovedProductId = (productId: string) => {
        setRemovedProductId(productId)
    }

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

            return { success }
        }

        return { success: false }
    }

    const transformStudentArray = (students: IStudentData[]) =>
        students.map(({ studentName, id }) => ({ value: id, label: studentName }))

    return (
        <>
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
                />
            )}
            {userDiet && (
                <AllMealsForm
                    addedProducts={userDiet}
                    handleSendProductData={handleAddDietProduct}
                    handleSetNewlyAddedProductName={handleSetNewlyAddedProductName}
                    handleSetRemovedProductId={handleSetRemovedProductId}
                />
            )}
        </>
    )
}
