import { NEW_STUDENT } from "@/constants/apiRoutes"
import { instance } from "../interceptors/sendToken"
import { INewStudentPayload } from "@/types/ITrainerApi.types"
import { IStandardResponse } from "@/types"
import axios, { AxiosError } from "axios"

export const addStudent = async (newStudentPayload: INewStudentPayload) => {
    try {
        const { data } = await instance.post<IStandardResponse>(NEW_STUDENT, newStudentPayload)

        return data
        // eslint-disable-next-line @typescript-eslint/no-implicit-any-catch
    } catch (err: unknown | AxiosError) {
        if (axios.isAxiosError(err)) {
            // Access to config, request, and response
            return err.response?.data
        } else {
            // Just a stock error
        }
    }
    //   catch (error: unknown) {
    //     //TODO zmienic ten typ i wszedzie w axiosie try catch
    //     return error.response.data.success
    // }
}
