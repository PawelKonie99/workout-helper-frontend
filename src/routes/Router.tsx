import { RouteObject, useRoutes } from "react-router"
import { authRoutes, errorRoutes, homeRoutes, trainerRoutes } from "."

export const Router = () => {
    const routes: RouteObject[] = [authRoutes, homeRoutes, errorRoutes, trainerRoutes]

    return useRoutes(routes)
}
