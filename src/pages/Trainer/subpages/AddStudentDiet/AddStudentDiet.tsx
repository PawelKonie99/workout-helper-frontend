import { useLoadMyStudents } from "@/hooks"
import { AddStudentDietForm } from "../../components"

const AddStudentDiet = () => {
    const myStudents = useLoadMyStudents()

    return <AddStudentDietForm myStudents={myStudents} />
}

export default AddStudentDiet
