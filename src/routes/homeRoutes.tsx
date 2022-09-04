import { lazy } from "react"
import { MainLayout } from "@/layouts"
// import { AuthGuard } from "./guards"
import { SuspenseComponent } from "."
import { AuthGuard } from "./guards"

const Home = SuspenseComponent(lazy(() => import("../pages/Home/Home")))
const Workout = SuspenseComponent(lazy(() => import("../pages/Workout/Workout")))
const Profile = SuspenseComponent(lazy(() => import("../pages/Profile/Profile")))

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
            path: "/profile",
            element: Profile,
        },
    ],
}
