import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { getTrainerRequest } from "@/api"
import { ContentContainer, MenuListItem } from "@/components"
import { UserInfo } from "@/pages/Profile/components"
import { useAppDispatch, useAppSelector } from "@/store/hooks/storeHooks"
import { saveUserLogout } from "@/store/userReducer/actions/saveUserLogout"
import { IRequestedTrainerData } from "@/types"
import { Navbar } from "../components"
import { useTrainerInfo } from "@/hooks"
import workoutIcon from "../../images/svg/workout-icon.svg"
import mealIcon from "../../images/svg/meal-icon.svg"
import notificationsIcon from "../../images/svg/notifications-icon.svg"
import settingsIcon from "../../images/svg/settings-icon.svg"
import logoutIcon from "../../images/svg/logout-icon.svg"

export const ProfileLayout = () => {
    useTrainerInfo()
    const { trainerName, username } = useAppSelector((state) => state.userReducer)
    const [userRequestedTrainers, setUserRequestedTrainers] = useState<IRequestedTrainerData[]>()

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const logut = () => {
        saveUserLogout(dispatch)
        navigate("/login")
    }

    const loadRequestedTrainer = async () => {
        const { requestedTrainers } = await getTrainerRequest()
        requestedTrainers && setUserRequestedTrainers(requestedTrainers)
    }

    useEffect(() => {
        loadRequestedTrainer()
    }, [])

    return (
        <div className="bg-offWhite h-screen">
            <Navbar />
            <div className="pt-28">
                <UserInfo userInfo={{ username, trainerName }} />
                <ContentContainer>
                    <div className="flex flex-col lg:flex-row w-full">
                        <div className="mr-10 md:mr-40">
                            <ul>
                                <MenuListItem
                                    title="Historia treningów"
                                    to="profile/allTrainingsHistory"
                                    imageSrc={workoutIcon}
                                />
                                <MenuListItem
                                    title="Historia posiłków"
                                    to="profile/allMealsHistory"
                                    imageSrc={mealIcon}
                                />

                                <MenuListItem
                                    title={`Powiadomienia ${
                                        userRequestedTrainers?.length
                                            ? `(${userRequestedTrainers?.length})`
                                            : ""
                                    }`}
                                    to="profile/notifications"
                                    imageSrc={notificationsIcon}
                                    onClick={loadRequestedTrainer}
                                />
                                <MenuListItem
                                    title="Ustawienia"
                                    to="profile/settings"
                                    imageSrc={settingsIcon}
                                />
                                <MenuListItem
                                    onClick={logut}
                                    title="Wyloguj"
                                    to="/login"
                                    imageSrc={logoutIcon}
                                />
                            </ul>
                        </div>
                        <Outlet />
                    </div>
                </ContentContainer>
            </div>
        </div>
    )
}
