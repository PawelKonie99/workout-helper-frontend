import { RouteObject, useRoutes } from "react-router"
import { authRoutes, errorRoutes, homeRoutes, trainerRoutes, adminRoutes } from "."

export const Router = () => {
    const routes: RouteObject[] = [authRoutes, homeRoutes, errorRoutes, trainerRoutes, adminRoutes]

    return useRoutes(routes)
}
