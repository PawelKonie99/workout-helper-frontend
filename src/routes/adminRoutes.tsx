import { lazy } from "react"
import { AdminLayout } from "@/layouts"
import { AdminGuard } from "./guards"
import { SuspenseComponent } from "."

const Admin = SuspenseComponent(lazy(() => import("../pages/Admin/Admin")))
const AllUsers = SuspenseComponent(lazy(() => import("../pages/Admin/subpages/AllUsers/AllUsers")))
const FindUser = SuspenseComponent(lazy(() => import("../pages/Admin/subpages/FindUser/FindUser")))

export const adminRoutes = {
    element: (
        <AdminGuard>
            <AdminLayout />
        </AdminGuard>
    ),

    children: [
        {
            path: "/admin",
            children: [
                {
                    index: true,
                    element: Admin,
                },
                {
                    path: "allUsers",
                    element: AllUsers,
                },
                {
                    path: "findUser",
                    element: FindUser,
                },
            ],
        },
    ],
}
