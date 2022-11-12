import { useEffect, useState } from "react"
import { IDietMeals, ISelectOption, IStudentData } from "@/types"
import { CustomSelect } from "@/components"
import "react-toastify/dist/ReactToastify.css"
import { isSelectOptionTypeGuard } from "@/helpers"
import { getDiet } from "@/api"
import { MEAL_TYPES } from "@/enums"
import { AddProductForm } from "@/pages/AddProduct/components"

type Props = {
    myStudents?: IStudentData[]
}

export const AddStudentDiet = ({ myStudents }: Props) => {
    const [userDiet, setUserDiet] = useState<IDietMeals | Record<string, never>>()
    const [choosenStudent, setChoosenStudent] = useState<ISelectOption>()

    const { breakfast, brunch, dinner, dessert, supper } = userDiet ?? {}

    const handleSetNewlyAddedProductName = (newProductName: string) => {
        console.log("newProductName", newProductName)
    }
    const handleSetRemovedProductId = (productId: string) => {
        console.log("productId", productId)
    }

    useEffect(() => {
        const getUserDiet = async () => {
            if (choosenStudent) {
                const { diet } = await getDiet(choosenStudent)

                diet && setUserDiet(diet)
            }
        }
        getUserDiet()
    }, [choosenStudent])

    const handleChooseStudent = (option: ISelectOption | unknown) => {
        if (isSelectOptionTypeGuard(option)) {
            setChoosenStudent(option)
        }
    }

    console.log("userDiet", userDiet)

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
                <div>
                    <AddProductForm
                        timeOfTheMeal={MEAL_TYPES.BREAKFAST}
                        title="Śniadanie"
                        alreadyAddedProducts={breakfast}
                        handleSetNewlyAddedProductName={handleSetNewlyAddedProductName}
                        handleSetRemovedProductId={handleSetRemovedProductId}
                    />
                    <AddProductForm
                        timeOfTheMeal={MEAL_TYPES.BRUNCH}
                        title="Drugie Śniadanie"
                        alreadyAddedProducts={brunch}
                        handleSetNewlyAddedProductName={handleSetNewlyAddedProductName}
                        handleSetRemovedProductId={handleSetRemovedProductId}
                    />
                    <AddProductForm
                        timeOfTheMeal={MEAL_TYPES.DINNER}
                        title="Obiad"
                        alreadyAddedProducts={dinner}
                        handleSetNewlyAddedProductName={handleSetNewlyAddedProductName}
                        handleSetRemovedProductId={handleSetRemovedProductId}
                    />
                    <AddProductForm
                        timeOfTheMeal={MEAL_TYPES.DESSERT}
                        title="Podwieczorek"
                        alreadyAddedProducts={dessert}
                        handleSetNewlyAddedProductName={handleSetNewlyAddedProductName}
                        handleSetRemovedProductId={handleSetRemovedProductId}
                    />
                    <AddProductForm
                        timeOfTheMeal={MEAL_TYPES.SUPPER}
                        title="Kolacja"
                        alreadyAddedProducts={supper}
                        handleSetNewlyAddedProductName={handleSetNewlyAddedProductName}
                        handleSetRemovedProductId={handleSetRemovedProductId}
                    />
                </div>
            )}
        </>
    )
}
