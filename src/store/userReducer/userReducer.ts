import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { USER } from "@/constants"

export type IUserReducerInitialState = {
    loggedIn: boolean
}
export const userReducerInitialState: IUserReducerInitialState = {
    loggedIn: false,
}

const userSlice = createSlice({
    name: USER,
    initialState: userReducerInitialState,
    reducers: {
        loginUser: (state, action: PayloadAction<{ loggedIn: boolean }>) => {
            state.loggedIn = action.payload.loggedIn
        },
    },
})

export const { loginUser } = userSlice.actions

export default userSlice.reducer
