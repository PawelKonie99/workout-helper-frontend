import axios, { AxiosRequestConfig } from "axios"

export const instance = axios.create({
    baseURL: "http://localhost:3000", //TODO zmienic potem na odpowiedni link
})

instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const storage = localStorage.getItem("userReducer") //TODO move to seprate file

        if (config.headers === undefined) {
            config.headers = {}
        }
        config.headers.token = "I am only a header!"

        // const token = localStorageService.getAccessToken()
        // if (token) {
        //   config.headers['Authorization'] = 'Bearer ' + token
        // }

        // console.log("interceptor storage", storage)

        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)
