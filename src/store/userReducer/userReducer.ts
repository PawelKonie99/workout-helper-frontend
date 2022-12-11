import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { USER } from "@/constants"
import { IRoles } from "@/types"

export type IUserReducerInitialState = {
    loggedIn: boolean
    token: string
    roles: IRoles
    trainerName: string
    trainerId: string
    username: string
}
export const userReducerInitialState: IUserReducerInitialState = {
    loggedIn: false,
    token: "",
    roles: {
        adminRole: false,
        trainerRole: false,
        userRole: false,
    },
    trainerName: "",
    trainerId: "",
    username: "",
}

const userSlice = createSlice({
    name: USER,
    initialState: userReducerInitialState,
    reducers: {
        loginUser: (
            state,
            action: PayloadAction<{
                loggedIn: boolean
                token: string
                roles: IRoles
                username: string
            }>,
        ) => {
            state.loggedIn = action.payload.loggedIn
            state.token = action.payload.token
            state.roles = action.payload.roles
            state.username = action.payload.username
        },
        setUserTrainer: (
            state,
            action: PayloadAction<{ trainerName: string; trainerId: string }>,
        ) => {
            state.trainerName = action.payload.trainerName
            state.trainerId = action.payload.trainerId
        },
    },
})

export const { loginUser, setUserTrainer } = userSlice.actions

export default userSlice.reducer
