import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { getUserInfo } from "@/api"
import { IUserInfo } from "@/types"
import { saveUserTrainer } from "@/store/userReducer/actions/saveUserTrainer"

export const useGetUserInfo = () => {
    const [userInfo, setUserInfo] = useState<IUserInfo>()

    const dispatch = useDispatch()

    useEffect(() => {
        const getStudents = async () => {
            const { trainerName, username } = await getUserInfo()

            setUserInfo({ trainerName, username })

            saveUserTrainer(dispatch, trainerName ? trainerName : "")
        }
        getStudents()
    }, [])

    return userInfo
}
