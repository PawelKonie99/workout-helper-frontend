import { useLoadMyStudents } from "@/hooks"
import { AddStudentDietForm } from "../../components"

const AddStudentDiet = () => {
    const { data } = useLoadMyStudents()

    return <AddStudentDietForm myStudents={data?.allStudents} />
}

export default AddStudentDiet
