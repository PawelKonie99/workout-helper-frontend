import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { useState } from "react"
import { getAllUserWorkouts } from "@/api"
import { ContentContainer } from "@/components"
import { IUserWorkoutDataFromDatabase } from "@/types"
import { MenuListItem, WorkoutHistory } from "./Components"
import { saveUserLogout } from "@/store/userReducer/actions/saveUserLogout"

enum VIEWS_TO_DISPLAY {
    WORKOUT_HISTORY = "WORKOUT_HISTORY",
}

const Profile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [viewToDisplay, setViewToDisplay] = useState<VIEWS_TO_DISPLAY>()
    const [workoutHistory, setWorkoutHistory] = useState<IUserWorkoutDataFromDatabase[]>()

    const loadAllUserWorkouts = async () => {
        const { allUserWorkouts } = await getAllUserWorkouts()
        allUserWorkouts && setWorkoutHistory(allUserWorkouts) //TODO To raczej do reduxa, chwilowo zapisze to tutaj w stanie
        setViewToDisplay(VIEWS_TO_DISPLAY.WORKOUT_HISTORY)
    }

    const logut = () => {
        saveUserLogout(dispatch)
        navigate("/login")
    }

    //TODO to bedzie pewnie do rozbudowy
    return (
        <ContentContainer>
            <div className="flex w-full">
                <div className="mr-40">
                    <ul>
                        <MenuListItem onClick={loadAllUserWorkouts} title="Historia treningów" />
                        <MenuListItem onClick={logut} title="Wyloguj" />
                    </ul>
                </div>
                {viewToDisplay === VIEWS_TO_DISPLAY.WORKOUT_HISTORY && (
                    <WorkoutHistory workoutHistory={workoutHistory} />
                )}
            </div>
        </ContentContainer>
    )
}

export default Profile
