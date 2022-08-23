import axios, { AxiosRequestConfig } from "axios"

axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        if (config.headers === undefined) {
            config.headers = {}
        }
        config.headers.test = "I am only a header!"

        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)
