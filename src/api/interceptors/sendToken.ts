import axios, { AxiosRequestConfig } from "axios"
import { getStorageItem } from "@/helpers"

export const instance = axios.create({
    baseURL: "http://localhost:3000", //TODO zmienic potem na odpowiedni link
})

instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const storage = getStorageItem("persist:root") //TODO move to seprate file

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
