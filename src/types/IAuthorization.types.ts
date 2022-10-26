export interface ILoginFormSchema {
    username: string
    password: string
}

export interface IRegisterFormSchema {
    username: string
    password: string
    confirmPassword: string
    isTrainer?: boolean
}
