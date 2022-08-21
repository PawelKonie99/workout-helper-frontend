import { lazy } from "react"
// import { MainLayout } from "@/layouts"
// import { AuthGuard } from "./guards"
import { SuspenseComponent } from "."

const Home = SuspenseComponent(lazy(() => import("../pages/Home/Home")))

export const homeRoutes = {
    // element: (
    //     <AuthGuard>
    //         <MainLayout />
    //     </AuthGuard>
    // ),
    children: [
        {
            path: "/",
            element: Home,
        },
    ],
}
