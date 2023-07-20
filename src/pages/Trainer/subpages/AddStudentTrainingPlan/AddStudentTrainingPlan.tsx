import { useLoadMyStudents } from "@/hooks"

import { AddStudentTrainingPlanForm } from "../../components"

const AddStudentTrainingPlan = () => {
    const { data } = useLoadMyStudents()

    return (
        <>
            <AddStudentTrainingPlanForm myStudents={data?.allStudents} />
        </>
    )
}

export default AddStudentTrainingPlan
