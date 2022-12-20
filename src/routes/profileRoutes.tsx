import { lazy } from "react"
import { ProfileLayout } from "@/layouts"
import { SuspenseComponent } from "."
import { AuthGuard } from "./guards"

const Profile = SuspenseComponent(lazy(() => import("../pages/Profile/Profile")))
const AllWorkoutsHistory = SuspenseComponent(
    lazy(() => import("../pages/Profile/subpages/AllWorkoutsHistory/AllWorkoutsHistory")),
)
const AllMealsHistory = SuspenseComponent(
    lazy(() => import("../pages/Profile/subpages/AllMealsHistory/AllMealsHistory")),
)
const Notifications = SuspenseComponent(
    lazy(() => import("../pages/Profile/subpages/Notifications/Notifications")),
)
const SettingsPage = SuspenseComponent(
    lazy(() => import("../pages/Profile/subpages/SettingsPage/SettingsPage")),
)

export const profileRoutes = {
    element: (
        <AuthGuard>
            <ProfileLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: "/profile",
            children: [
                {
                    index: true,
                    element: Profile,
                },
                {
                    path: "allTrainingsHistory",
                    element: AllWorkoutsHistory,
                },
                {
                    path: "allMealsHistory",
                    element: AllMealsHistory,
                },
                {
                    path: "notifications",
                    element: Notifications,
                },
                {
                    path: "settings",
                    element: SettingsPage,
                },
            ],
        },
    ],
}
