import useSWR, { Fetcher } from "swr"
import { getStudentDiet } from "@/api"
import { IGetStudenDietResponse, ISelectOption } from "@/types"
import { GET_STUDENT_DIET } from "@/constants"

export const useGetStudentDiet = (choosenStudent?: ISelectOption) => {
    const fetcher: Fetcher<IGetStudenDietResponse> = () => getStudentDiet(choosenStudent)

    const { data, error } = useSWR(`${GET_STUDENT_DIET}/${choosenStudent?.value}`, fetcher)

    return { data, error }
}
