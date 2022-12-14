import { useState } from "react"
import { ContentContainer, MenuListItem } from "@/components"
import {
    AddStudentDiet,
    AddStudentForm,
    AddStudentTrainingPlanForm,
    MyStudents,
} from "./components"
import { useLoadMyStudents } from "@/hooks"

type viewsToDisplayTrainer =
    | "MY_STUDENTS"
    | "ADD_STUDENT"
    | "ADD_STUDENT_WORKOUT_PLAN"
    | "ADD_STUDENT_DIET"

const Trainer = () => {
    const [viewToDisplay, setViewToDisplay] = useState<viewsToDisplayTrainer>()
    const [newStudentName, setNewStudentName] = useState("")
    const myStudents = useLoadMyStudents(newStudentName)

    const loadView = (view: viewsToDisplayTrainer) => {
        setViewToDisplay(view)
    }

    const handleSetNewStudentName = (studentName: string) => {
        setNewStudentName(studentName)
    }

    return (
        <ContentContainer>
            <div className="flex w-full">
                <div className="mr-40">
                    <ul>
                        <MenuListItem
                            onClick={() => loadView("MY_STUDENTS")}
                            title="Moi podopieczni"
                        />
                        <MenuListItem
                            onClick={() => loadView("ADD_STUDENT")}
                            title="Dodaj podopiecznego"
                        />
                        <MenuListItem
                            onClick={() => loadView("ADD_STUDENT_WORKOUT_PLAN")}
                            title="Dodaj plan treningowy dla podopiecznego"
                        />
                        <MenuListItem
                            onClick={() => loadView("ADD_STUDENT_DIET")}
                            title="Dodaj diete dla podopiecznego"
                        />
                    </ul>
                </div>
                {viewToDisplay === "MY_STUDENTS" && <MyStudents myStudents={myStudents} />}
                {viewToDisplay === "ADD_STUDENT" && (
                    <AddStudentForm handleSetNewStudentName={handleSetNewStudentName} />
                )}
                {viewToDisplay === "ADD_STUDENT_WORKOUT_PLAN" && (
                    <AddStudentTrainingPlanForm myStudents={myStudents} />
                )}
                {viewToDisplay === "ADD_STUDENT_DIET" && <AddStudentDiet myStudents={myStudents} />}
            </div>
        </ContentContainer>
    )
}

export default Trainer
