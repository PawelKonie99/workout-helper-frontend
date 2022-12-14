import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { useEffect, useState } from "react"
import { getAllUserWorkouts, getMealsHistory, getTrainerRequest } from "@/api"
import { ContentContainer, MenuListItem, ProductHistory, WorkoutHistory } from "@/components"
import { IMealHistory, IRequestedTrainerData, IUserWorkoutDataFromDatabase } from "@/types"
import { RequestedTrainers, UserInfo, UserSettings } from "./components"
import { saveUserLogout } from "@/store/userReducer/actions/saveUserLogout"
import { useTrainerInfo } from "@/hooks"
import { RootState } from "@/store/store"

type viewsToDisplayProfile = "WORKOUT_HISTORY" | "MEAL_HISTORY" | "NOTIFICATIONS" | "SETTINGS"

const Profile = () => {
    useTrainerInfo()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { trainerName, trainerId, username } = useSelector(
        (state: RootState) => state.userReducer,
    )
    const [viewToDisplay, setViewToDisplay] = useState<viewsToDisplayProfile>()
    const [workoutHistory, setWorkoutHistory] = useState<IUserWorkoutDataFromDatabase[]>()
    const [mealsHistory, setMealsHistory] = useState<IMealHistory[]>()
    const [userRequestedTrainers, setUserRequestedTrainers] = useState<IRequestedTrainerData[]>()

    useEffect(() => {
        loadRequestedTrainers()
    }, [])

    const loadRequestedTrainers = async () => {
        const { requestedTrainers } = await getTrainerRequest()
        requestedTrainers && setUserRequestedTrainers(requestedTrainers)
        setViewToDisplay("NOTIFICATIONS")
    }

    const loadAllUserWorkouts = async () => {
        const { allUserWorkouts } = await getAllUserWorkouts()
        allUserWorkouts && setWorkoutHistory(allUserWorkouts)
        setViewToDisplay("WORKOUT_HISTORY")
    }
    const loadUserMealsHistory = async () => {
        const { mealHistory } = await getMealsHistory()
        mealHistory && setMealsHistory(mealHistory)
        setViewToDisplay("MEAL_HISTORY")
    }

    const loadSettings = () => {
        setViewToDisplay("SETTINGS")
    }

    const logut = () => {
        saveUserLogout(dispatch)
        navigate("/login")
    }

    //TODO to bedzie pewnie do rozbudowy
    return (
        <div>
            <UserInfo userInfo={{ username, trainerName }} />
            <ContentContainer>
                <div className="flex w-full">
                    <div className="mr-40">
                        <ul>
                            <MenuListItem
                                onClick={loadAllUserWorkouts}
                                title="Historia treningów"
                            />
                            <MenuListItem
                                onClick={loadUserMealsHistory}
                                title="Historia posiłków"
                            />
                            <MenuListItem
                                onClick={loadRequestedTrainers}
                                title={`Powiadomienia ${
                                    userRequestedTrainers?.length
                                        ? `(${userRequestedTrainers?.length})`
                                        : ""
                                }`}
                            />
                            <MenuListItem onClick={loadSettings} title="Ustawienia" />
                            <MenuListItem onClick={logut} title="Wyloguj" />
                        </ul>
                    </div>
                    {viewToDisplay === "WORKOUT_HISTORY" && (
                        <WorkoutHistory workoutHistory={workoutHistory} />
                    )}
                    {viewToDisplay === "MEAL_HISTORY" && (
                        <ProductHistory productHistory={mealsHistory} />
                    )}
                    {viewToDisplay === "SETTINGS" && (
                        <UserSettings trainerName={trainerName} trainerId={trainerId} />
                    )}
                    {viewToDisplay === "NOTIFICATIONS" && (
                        <RequestedTrainers
                            userRequestedTrainers={userRequestedTrainers}
                            loadRequestedTrainers={loadRequestedTrainers}
                            isTrainer={!!trainerName}
                        />
                    )}
                </div>
            </ContentContainer>
        </div>
    )
}

export default Profile
