import { lazy } from "react"
import { MainLayout } from "@/layouts"
import { AdminGuard } from "./guards"
import { SuspenseComponent } from "."

const admin = SuspenseComponent(lazy(() => import("../pages/Admin/Admin")))

export const adminRoutes = {
    element: (
        <AdminGuard>
            <MainLayout />
        </AdminGuard>
    ),
    children: [
        {
            path: "admin",
            element: admin,
        },
    ],
}
