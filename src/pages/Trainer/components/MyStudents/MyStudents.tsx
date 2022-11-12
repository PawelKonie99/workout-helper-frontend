import { IStudentData } from "@/types"

type Props = {
    myStudents?: IStudentData[]
}

export const MyStudents = ({ myStudents }: Props) => {
    return (
        <div className="flex flex-col">
            {myStudents && myStudents.length <= 0 ? (
                <span>Nie masz zadnych podopiecznych!</span>
            ) : (
                <>
                    <h1 className="mb-4 text-xl">Moi podopieczni:</h1>
                    {myStudents?.map(({ studentName }) => (
                        <span className="mt-4" key={studentName}>
                            {studentName}
                        </span>
                    ))}
                </>
            )}
        </div>
    )
}
