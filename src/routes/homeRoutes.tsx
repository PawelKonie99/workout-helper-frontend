import { lazy } from "react"
import { MainLayout } from "@/layouts"
// import { AuthGuard } from "./guards"
import { SuspenseComponent } from "."
import { AuthGuard } from "./guards"

const Home = SuspenseComponent(lazy(() => import("../pages/Home/Home")))
const Workout = SuspenseComponent(lazy(() => import("../pages/Workout/Workout")))
const AddProduct = SuspenseComponent(lazy(() => import("../pages/AddProduct/AddProduct")))

export const homeRoutes = {
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: "/",
            element: Home,
        },
        {
            path: "/workout",
            element: Workout,
        },
        {
            path: "/meal",
            element: AddProduct,
        },
    ],
}
