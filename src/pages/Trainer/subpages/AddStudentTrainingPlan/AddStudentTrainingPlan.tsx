import { useLoadMyStudents } from "@/hooks"

import { AddStudentTrainingPlanForm } from "../../components"

const AddStudentTrainingPlan = () => {
    const myStudents = useLoadMyStudents()

    return (
        <>
            <AddStudentTrainingPlanForm myStudents={myStudents} />
        </>
    )
}

export default AddStudentTrainingPlan
