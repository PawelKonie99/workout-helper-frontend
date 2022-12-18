import { RouteObject, useRoutes } from "react-router"
import { authRoutes, errorRoutes, homeRoutes, trainerRoutes, adminRoutes, profileRoutes } from "."

export const Router = () => {
    const routes: RouteObject[] = [
        authRoutes,
        homeRoutes,
        errorRoutes,
        trainerRoutes,
        adminRoutes,
        profileRoutes,
    ]

    return useRoutes(routes)
}
