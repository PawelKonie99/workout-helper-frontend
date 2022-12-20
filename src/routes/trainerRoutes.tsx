import { lazy } from "react"
import { TrainerLayout } from "@/layouts"
import { TrainerGuard } from "./guards"
import { SuspenseComponent } from "."

const Trainer = SuspenseComponent(lazy(() => import("../pages/Trainer/Trainer")))
const MyStudents = SuspenseComponent(
    lazy(() => import("../pages/Trainer/subpages/MyStudents/MyStudents")),
)
const AddStudent = SuspenseComponent(
    lazy(() => import("../pages/Trainer/subpages/AddStudent/AddStudent")),
)
const AddStudentTrainingPlan = SuspenseComponent(
    lazy(() => import("../pages/Trainer/subpages/AddStudentTrainingPlan/AddStudentTrainingPlan")),
)
const AddStudentDiet = SuspenseComponent(
    lazy(() => import("../pages/Trainer/subpages/AddStudentDiet/AddStudentDiet")),
)

export const trainerRoutes = {
    element: (
        <TrainerGuard>
            <TrainerLayout />
        </TrainerGuard>
    ),

    children: [
        {
            path: "/trainer",
            children: [
                {
                    index: true,
                    element: Trainer,
                },
                {
                    path: "myStudents",
                    element: MyStudents,
                },
                {
                    path: "addStudent",
                    element: AddStudent,
                },
                {
                    path: "addStudentTrainingPlan",
                    element: AddStudentTrainingPlan,
                },
                {
                    path: "addStudentDiet",
                    element: AddStudentDiet,
                },
            ],
        },
    ],
}
