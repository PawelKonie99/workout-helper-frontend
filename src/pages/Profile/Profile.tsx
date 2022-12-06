import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { useState } from "react"
import { getAllUserWorkouts, getMealsHistory, getTrainerRequest } from "@/api"
import { ContentContainer } from "@/components"
import { IMealHistory, IRequestedTrainerData, IUserWorkoutDataFromDatabase } from "@/types"
import {
    MenuListItem,
    ProductHistory,
    RequestedTrainers,
    UserInfo,
    WorkoutHistory,
} from "./Components"
import { saveUserLogout } from "@/store/userReducer/actions/saveUserLogout"
import { useGetUserInfo } from "@/hooks"

//TODO przeniesc
enum VIEWS_TO_DISPLAY_PROFILE {
    WORKOUT_HISTORY = "WORKOUT_HISTORY",
    MEAL_HISTORY = "MEAL_HISTORY",
    NOTIFICATIONS = "NOTIFICATIONS",
}

const Profile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userInfo = useGetUserInfo()
    const [viewToDisplay, setViewToDisplay] = useState<VIEWS_TO_DISPLAY_PROFILE>()
    const [workoutHistory, setWorkoutHistory] = useState<IUserWorkoutDataFromDatabase[]>()
    const [mealsHistory, setMealsHistory] = useState<IMealHistory[]>()
    const [userRequestedTrainers, setUserRequestedTrainers] = useState<IRequestedTrainerData[]>()

    const loadAllUserWorkouts = async () => {
        const { allUserWorkouts } = await getAllUserWorkouts()
        allUserWorkouts && setWorkoutHistory(allUserWorkouts)
        setViewToDisplay(VIEWS_TO_DISPLAY_PROFILE.WORKOUT_HISTORY)
    }
    const loadUserMealsHistory = async () => {
        const { mealHistory } = await getMealsHistory()
        mealHistory && setMealsHistory(mealHistory)
        setViewToDisplay(VIEWS_TO_DISPLAY_PROFILE.MEAL_HISTORY)
    }
    const loadNotifications = async () => {
        const { requestedTrainers } = await getTrainerRequest()
        requestedTrainers && setUserRequestedTrainers(requestedTrainers)
        setViewToDisplay(VIEWS_TO_DISPLAY_PROFILE.NOTIFICATIONS)
    }

    const logut = () => {
        saveUserLogout(dispatch)
        navigate("/login")
    }

    //TODO to bedzie pewnie do rozbudowy
    return (
        <div>
            <UserInfo userInfo={userInfo} />
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
                            <MenuListItem onClick={loadNotifications} title="Powiadomienia" />
                            <MenuListItem onClick={logut} title="Wyloguj" />
                        </ul>
                    </div>
                    {viewToDisplay === VIEWS_TO_DISPLAY_PROFILE.WORKOUT_HISTORY && (
                        <WorkoutHistory workoutHistory={workoutHistory} />
                    )}
                    {viewToDisplay === VIEWS_TO_DISPLAY_PROFILE.MEAL_HISTORY && (
                        <ProductHistory productHistory={mealsHistory} />
                    )}
                    {viewToDisplay === VIEWS_TO_DISPLAY_PROFILE.NOTIFICATIONS && (
                        <RequestedTrainers userRequestedTrainers={userRequestedTrainers} />
                    )}
                </div>
            </ContentContainer>
        </div>
    )
}

export default Profile
