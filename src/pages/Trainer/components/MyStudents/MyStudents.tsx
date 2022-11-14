import { useState } from "react"
import { getSingleStudentData } from "@/api"
import { NormalButton } from "@/components"
import { BUTTON_VARIANT } from "@/enums"
import { IChoosenStudentData, IStudentData } from "@/types"
import { ProductHistory, WorkoutHistory } from "@/pages/Profile/Components"

type Props = {
    myStudents?: IStudentData[]
}

export const MyStudents = ({ myStudents }: Props) => {
    const [choosenStudentData, setChoosenStudentData] = useState<IChoosenStudentData>()

    const handleLoadStudentData = async (userId: string, studentName: string) => {
        const { allUserWorkouts, mealHistory } = (await getSingleStudentData(userId)) ?? {}

        if (allUserWorkouts && mealHistory) {
            setChoosenStudentData({ allUserWorkouts, mealHistory, studentName })
        }
    }

    return (
        <div className="flex flex-col">
            {myStudents && myStudents.length <= 0 ? (
                <span>Nie masz zadnych podopiecznych!</span>
            ) : (
                <>
                    <h1 className="mb-4 text-xl">Moi podopieczni:</h1>
                    {myStudents?.map(({ studentName, user }) => (
                        <div key={studentName} className="mb-6">
                            <span className="mt-4">{studentName}</span>
                            <NormalButton
                                onClick={() => handleLoadStudentData(user, studentName)}
                                buttonVariant={BUTTON_VARIANT.SECONDARY}
                                className="ml-2"
                                label="Załaduj dane"
                            />
                        </div>
                    ))}
                </>
            )}
            {choosenStudentData?.studentName && (
                <div>
                    <span>Dane dla podopiecznego: {choosenStudentData?.studentName}</span>
                    <div className="my-2">
                        {choosenStudentData?.allUserWorkouts && (
                            <WorkoutHistory workoutHistory={choosenStudentData?.allUserWorkouts} />
                        )}
                    </div>
                    {choosenStudentData?.mealHistory && (
                        <ProductHistory productHistory={choosenStudentData?.mealHistory} />
                    )}
                </div>
            )}
        </div>
    )
}
