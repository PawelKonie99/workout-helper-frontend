import { toast } from "react-toastify"
import { useEffect, useState } from "react"
import { getSingleStudentData } from "@/api"
import { NormalButton, ProductHistory, WorkoutHistory } from "@/components"
import { IChoosenStudentData } from "@/types"
import { useLoadMyStudents } from "@/hooks"

const MyStudents = () => {
    const { data, error } = useLoadMyStudents()

    const [choosenStudentData, setChoosenStudentData] = useState<IChoosenStudentData>()
    const [workoutOffset, setWorkoutOffset] = useState<number>(1)
    const [productsOffset, setProductsOffset] = useState<number>(1)

    const handleLoadStudentData = async (userId: string, studentName: string) => {
        const { allUserWorkouts, mealHistory } =
            (await getSingleStudentData(userId, workoutOffset, productsOffset)) ?? {}

        if (allUserWorkouts && mealHistory) {
            setChoosenStudentData({ allUserWorkouts, mealHistory, studentName, userId })
        }
    }

    useEffect(() => {
        const loadMoreData = async () => {
            if (choosenStudentData?.userId) {
                const { allUserWorkouts, mealHistory } =
                    (await getSingleStudentData(
                        choosenStudentData?.userId,
                        workoutOffset,
                        productsOffset,
                    )) ?? {}

                if (
                    mealHistory?.length === choosenStudentData.mealHistory?.length &&
                    allUserWorkouts?.length === choosenStudentData.allUserWorkouts?.length
                ) {
                    toast.error("Nie ma więcej dostępnych danych")
                }

                if (allUserWorkouts) {
                    setChoosenStudentData({
                        allUserWorkouts,
                        mealHistory,
                        studentName: choosenStudentData.studentName,
                        userId: choosenStudentData.userId,
                    })
                }
            }
        }
        loadMoreData()
    }, [workoutOffset, productsOffset])

    const handleChangeWorkoutOffset = async () => {
        setWorkoutOffset((prevState) => prevState + 1)
    }

    const handleChangeProductsOffset = async () => {
        setProductsOffset((prevState) => prevState + 1)
    }

    return (
        <div className="flex flex-col mb-12">
            {data && data.allStudents.length <= 0 ? (
                <span>Nie masz zadnych podopiecznych!</span>
            ) : (
                <>
                    <h1 className="mb-4 text-xl">Moi podopieczni:</h1>
                    {data?.allStudents?.map(({ studentName, id }) => (
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
                                        handleChangeOffset={handleChangeWorkoutOffset}
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
                                <ProductHistory
                                    productHistory={choosenStudentData?.mealHistory}
                                    handleChangeOffset={handleChangeProductsOffset}
                                />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default MyStudents
