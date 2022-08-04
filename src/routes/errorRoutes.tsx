import { lazy } from "react"
import { SuspenseComponent } from "."

const Page404 = SuspenseComponent(lazy(() => import("../pages/404/404")))

export const errorRoutes = {
    element: Page404,
    path: "*",
}
