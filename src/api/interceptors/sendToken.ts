import axios, { AxiosRequestConfig } from "axios"
import { getStorageItem } from "@/helpers"

const { BASE_URL } = process.env

export const instance = axios.create({
    baseURL: BASE_URL,
})

instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const storage = getStorageItem("persist:root")

        if (config.headers === undefined) {
            config.headers = {}
        }

        if (storage) {
            const token = JSON.parse(JSON.parse(storage).userReducer).token

            if (token) {
                config.headers["Authorization"] = "Bearer " + token
            }
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)
