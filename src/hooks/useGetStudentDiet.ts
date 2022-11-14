import { useEffect, useState } from "react"
import { getStudentDiet } from "@/api"
import { IDietMeals, ISelectOption } from "@/types"

export const useGetStudentDiet = (choosenStudent?: ISelectOption) => {
    const [newlyAddedProductName, setNewlyAddedProductName] = useState("")
    const [removedProductId, setRemovedProductId] = useState("")
    const [userDiet, setUserDiet] = useState<IDietMeals | Record<string, never>>()

    useEffect(() => {
        const getUserDiet = async () => {
            if (choosenStudent) {
                const { diet } = await getStudentDiet(choosenStudent)

                diet && setUserDiet(diet)
            }
        }
        getUserDiet()
    }, [choosenStudent, newlyAddedProductName, removedProductId])

    return { userDiet, setNewlyAddedProductName, setRemovedProductId }
}
