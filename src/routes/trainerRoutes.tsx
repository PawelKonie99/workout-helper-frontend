import { lazy } from "react"
import { AuthLayout } from "@/layouts"
import { TrainerGuard } from "./guards"
import { SuspenseComponent } from "."

const trainer = SuspenseComponent(lazy(() => import("../pages/Trainer/Trainer")))

export const trainerRoutes = {
    element: (
        <TrainerGuard>
            <AuthLayout />
        </TrainerGuard>
    ),
    children: [
        {
            path: "trainer",
            element: trainer,
        },
    ],
}
