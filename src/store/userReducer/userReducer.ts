import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { USER } from "@/constants"

export type IUserReducerInitialState = {
    loggedIn: boolean
    token: string
    isTrainer: boolean
}
export const userReducerInitialState: IUserReducerInitialState = {
    loggedIn: false,
    token: "",
    isTrainer: false,
}

const userSlice = createSlice({
    name: USER,
    initialState: userReducerInitialState,
    reducers: {
        loginUser: (
            state,
            action: PayloadAction<{ loggedIn: boolean; token: string; isTrainer: boolean }>,
        ) => {
            state.loggedIn = action.payload.loggedIn
            state.token = action.payload.token
            state.isTrainer = action.payload.isTrainer
        },
    },
})

export const { loginUser } = userSlice.actions

export default userSlice.reducer
