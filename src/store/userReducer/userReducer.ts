import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { USER } from "@/constants"
import { IUserRoles } from "@/types"

export type IUserReducerInitialState = {
    loggedIn: boolean
    token: string
    roles: IUserRoles
}
export const userReducerInitialState: IUserReducerInitialState = {
    loggedIn: false,
    token: "",
    roles: {
        adminRole: false,
        trainerRole: false,
        userRole: false,
    },
}

const userSlice = createSlice({
    name: USER,
    initialState: userReducerInitialState,
    reducers: {
        loginUser: (
            state,
            action: PayloadAction<{ loggedIn: boolean; token: string; roles: IUserRoles }>,
        ) => {
            state.loggedIn = action.payload.loggedIn
            state.token = action.payload.token
            state.roles = action.payload.roles
        },
    },
})

export const { loginUser } = userSlice.actions

export default userSlice.reducer
