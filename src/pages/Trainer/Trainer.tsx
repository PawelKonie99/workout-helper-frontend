import { useState } from "react"
import { ContentContainer } from "@/components"
import { MenuListItem } from "../Profile/Components"
import { AddStudentForm, AddStudentTrainingPlanForm, MyStudents } from "./components"
import { useLoadMyStudents } from "@/hooks"

enum VIEWS_TO_DISPLAY_TRAINER {
    MY_STUDENTS = "MY_STUDENTS",
    ADD_STUDENT = "ADD_STUDENT",
    ADD_STUDENT_WORKOUT_PLAN = "ADD_STUDENT_WORKOUT_PLAN",
}

const Trainer = () => {
    const [viewToDisplay, setViewToDisplay] = useState<VIEWS_TO_DISPLAY_TRAINER>()
    const [newStudentName, setNewStudentName] = useState("")
    const myStudents = useLoadMyStudents(newStudentName)

    const loadView = (view: VIEWS_TO_DISPLAY_TRAINER) => {
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
                            onClick={() => loadView(VIEWS_TO_DISPLAY_TRAINER.MY_STUDENTS)}
                            title="Moi podopieczni"
                        />
                        <MenuListItem
                            onClick={() => loadView(VIEWS_TO_DISPLAY_TRAINER.ADD_STUDENT)}
                            title="Dodaj podopiecznego"
                        />
                        <MenuListItem
                            onClick={() =>
                                loadView(VIEWS_TO_DISPLAY_TRAINER.ADD_STUDENT_WORKOUT_PLAN)
                            }
                            title="Dodaj plan treningowy dla podopiecznego"
                        />
                    </ul>
                </div>
                {viewToDisplay === VIEWS_TO_DISPLAY_TRAINER.MY_STUDENTS && (
                    <MyStudents myStudents={myStudents} />
                )}
                {viewToDisplay === VIEWS_TO_DISPLAY_TRAINER.ADD_STUDENT && (
                    <AddStudentForm handleSetNewStudentName={handleSetNewStudentName} />
                )}
                {viewToDisplay === VIEWS_TO_DISPLAY_TRAINER.ADD_STUDENT_WORKOUT_PLAN && (
                    <AddStudentTrainingPlanForm myStudents={myStudents} />
                )}
            </div>
        </ContentContainer>
    )
}

export default Trainer
