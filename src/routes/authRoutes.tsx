import { lazy } from "react"
import { AuthLayout } from "@/layouts"
import { GuestGuard } from "./guards"
import { SuspenseComponent } from "."

const Register = SuspenseComponent(lazy(() => import("../pages/Register/Register")))
const Login = SuspenseComponent(lazy(() => import("../pages/Login/Login")))

export const authRoutes = {
    element: (
        <GuestGuard>
            <AuthLayout />
        </GuestGuard>
    ),
    children: [
        {
            path: "register",
            element: Register,
        },
        {
            path: "login",
            element: Login,
        },
    ],
}
