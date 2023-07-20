import { Outlet } from "react-router-dom"
import { ContentContainer, MenuListItem } from "@/components"
import { Navbar } from "../components"
import userGroupIcon from "../../images/svg/user-group-icon.svg"
import addUserIcon from "../../images/svg/add-user-icon.svg"
import workoutIcon from "../../images/svg/workout-icon.svg"
import mealIcon from "../../images/svg/meal-icon.svg"

export const TrainerLayout = () => {
    return (
        <div className="bg-offWhite h-screen">
            <Navbar />
            <div className="pt-28">
                <ContentContainer>
                    <div className="flex flex-col xl:flex-row w-full">
                        <div className="mr-40">
                            <ul>
                                <MenuListItem
                                    title="Moi podopieczni"
                                    to="trainer/myStudents"
                                    imageSrc={userGroupIcon}
                                />
                                <MenuListItem
                                    title="Dodaj podopiecznego"
                                    to="trainer/addStudent"
                                    imageSrc={addUserIcon}
                                />
                                <MenuListItem
                                    title="Dodaj plan treningowy dla podopiecznego"
                                    to="trainer/addStudentTrainingPlan"
                                    imageSrc={workoutIcon}
                                />
                                <MenuListItem
                                    title="Dodaj dietę dla podopiecznego"
                                    to="trainer/AddStudentDiet"
                                    imageSrc={mealIcon}
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
