import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { useState } from "react"
import { getAllUserWorkouts, getProductsHistory } from "@/api"
import { ContentContainer } from "@/components"
import { IMealHistory, IUserWorkoutDataFromDatabase } from "@/types"
import { MenuListItem, ProductHistory, WorkoutHistory } from "./Components"
import { saveUserLogout } from "@/store/userReducer/actions/saveUserLogout"

enum VIEWS_TO_DISPLAY {
    WORKOUT_HISTORY = "WORKOUT_HISTORY",
    PRODUCT_HISTORY = "PRODUCT_HISTORY",
}

const Profile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [viewToDisplay, setViewToDisplay] = useState<VIEWS_TO_DISPLAY>()
    const [workoutHistory, setWorkoutHistory] = useState<IUserWorkoutDataFromDatabase[]>()
    const [productsHistory, setProductsHistory] = useState<IMealHistory[]>()

    const loadAllUserWorkouts = async () => {
        const { allUserWorkouts } = await getAllUserWorkouts()
        allUserWorkouts && setWorkoutHistory(allUserWorkouts) //TODO To raczej do reduxa, chwilowo zapisze to tutaj w stanie
        setViewToDisplay(VIEWS_TO_DISPLAY.WORKOUT_HISTORY)
    }
    const loadUserProductsHistory = async () => {
        const { mealHistory } = await getProductsHistory()
        mealHistory && setProductsHistory(mealHistory) //TODO To raczej do reduxa, chwilowo zapisze to tutaj w stanie
        setViewToDisplay(VIEWS_TO_DISPLAY.PRODUCT_HISTORY)
    }

    const logut = () => {
        saveUserLogout(dispatch)
        navigate("/login")
    }

    console.log("viewToDisplay", viewToDisplay)

    //TODO to bedzie pewnie do rozbudowy
    return (
        <ContentContainer>
            <div className="flex w-full">
                <div className="mr-40">
                    <ul>
                        <MenuListItem onClick={loadAllUserWorkouts} title="Historia treningów" />
                        <MenuListItem onClick={loadUserProductsHistory} title="Historia posiłków" />
                        <MenuListItem onClick={logut} title="Wyloguj" />
                    </ul>
                </div>
                {viewToDisplay === VIEWS_TO_DISPLAY.WORKOUT_HISTORY && (
                    <WorkoutHistory workoutHistory={workoutHistory} />
                )}
                {viewToDisplay === VIEWS_TO_DISPLAY.PRODUCT_HISTORY && (
                    <ProductHistory productHistory={productsHistory} />
                )}
            </div>
        </ContentContainer>
    )
}

export default Profile
