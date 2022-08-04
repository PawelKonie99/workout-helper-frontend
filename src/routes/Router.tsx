import { RouteObject, useRoutes } from "react-router"
import { authRoutes, errorRoutes, homeRoutes } from "."

export const Router = () => {
    const routes: RouteObject[] = [authRoutes, homeRoutes, errorRoutes]

    return useRoutes(routes)
}
