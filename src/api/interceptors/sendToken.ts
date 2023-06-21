import axios, { AxiosRequestConfig } from "axios"
import { getStorageItem } from "@/helpers"

const { REACT_APP_API_URI } = process.env

export const instance = axios.create({
    baseURL: REACT_APP_API_URI,
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
