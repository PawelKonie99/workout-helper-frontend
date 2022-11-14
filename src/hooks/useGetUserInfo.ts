import { useEffect, useState } from "react"
import { getUserInfo } from "@/api"
import { IUserInfo } from "@/types"

export const useGetUserInfo = () => {
    const [userInfo, setUserInfo] = useState<IUserInfo>()

    useEffect(() => {
        const getStudents = async () => {
            const { trainerName, username } = await getUserInfo()

            setUserInfo({ trainerName, username })
        }
        getStudents()
    }, [])

    return userInfo
}
