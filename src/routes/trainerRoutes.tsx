import { lazy } from "react"
import { MainLayout } from "@/layouts"
import { TrainerGuard } from "./guards"
import { SuspenseComponent } from "."

const trainer = SuspenseComponent(lazy(() => import("../pages/Trainer/Trainer")))

export const trainerRoutes = {
    element: (
        <TrainerGuard>
            <MainLayout />
        </TrainerGuard>
    ),
    children: [
        {
            path: "trainer",
            element: trainer,
        },
    ],
}
