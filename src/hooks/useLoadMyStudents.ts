import { useEffect, useState } from "react"
import { getAllStudents } from "@/api"
import { IStudentData } from "@/types"

export const useLoadMyStudents = (refreshStudents?: string) => {
    const [myStudents, setMyStudents] = useState<IStudentData[]>()

    useEffect(() => {
        const getStudents = async () => {
            const { allStudents } = await getAllStudents()

            allStudents && setMyStudents(allStudents)
        }
        getStudents()
    }, [refreshStudents])

    return myStudents
}
