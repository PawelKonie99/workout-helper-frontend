import { useState } from "react"
import { getSingleStudentData } from "@/api"
import { NormalButton, ProductHistory, WorkoutHistory } from "@/components"
import { IChoosenStudentData, IStudentData } from "@/types"

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
                    {myStudents?.map(({ studentName, id }) => (
                        <div key={studentName} className="mb-6">
                            <span className="mt-4">{studentName}</span>
                            <NormalButton
                                onClick={() => handleLoadStudentData(id, studentName)}
                                buttonVariant="secondary"
                                className="ml-2"
                                label="Załaduj dane"
                            />
                        </div>
                    ))}
                </>
            )}
            {choosenStudentData?.studentName && (
                <div>
                    <span className="text-lg text-primaryBlue">
                        Dane dla podopiecznego: {choosenStudentData?.studentName}
                    </span>
                    <div className="my-2">
                        <div className="mt-6">
                            <span className="text-lg text-primaryDark font-bold">
                                Historia treningów
                            </span>
                            <div className="mt-4">
                                {choosenStudentData?.allUserWorkouts && (
                                    <WorkoutHistory
                                        workoutHistory={choosenStudentData?.allUserWorkouts}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    {choosenStudentData?.mealHistory && (
                        <div className="mt-10">
                            <span className="text-lg text-primaryDark font-bold">
                                Historia posiłków
                            </span>
                            <div className="mt-4">
                                <ProductHistory productHistory={choosenStudentData?.mealHistory} />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
