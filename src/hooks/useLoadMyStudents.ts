import useSWR, { Fetcher } from "swr"
import { getAllStudents } from "@/api"
import { IAllStudentsResponse } from "@/types"
import { ALL_STUDENTS } from "@/constants"

const fetcher: Fetcher<IAllStudentsResponse, string> = () => getAllStudents()

export const useLoadMyStudents = () => {
    const { data, error } = useSWR(ALL_STUDENTS, fetcher)

    return { data, error }
}
