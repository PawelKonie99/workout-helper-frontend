import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { USER } from "@/constants"

export type IUserReducerInitialState = {
    loggedIn: boolean
    token: string
}
export const userReducerInitialState: IUserReducerInitialState = {
    loggedIn: false,
    token: "",
}

const userSlice = createSlice({
    name: USER,
    initialState: userReducerInitialState,
    reducers: {
        loginUser: (state, action: PayloadAction<{ loggedIn: boolean; token: string }>) => {
            state.loggedIn = action.payload.loggedIn
            state.token = action.payload.token
        },
    },
})

export const { loginUser } = userSlice.actions

export default userSlice.reducer
