import { Outlet } from "react-router-dom"
import { ContentContainer, MenuListItem } from "@/components"
import { Navbar } from "../components"
import mealIcon from "../../images/svg/meal-icon.svg"

export const TrainerLayout = () => {
    return (
        <div className="bg-offWhite h-screen">
            <Navbar />
            <div className="pt-28">
                <ContentContainer>
                    <div className="flex w-full">
                        <div className="mr-40">
                            <ul>
                                <MenuListItem
                                    title="Moi podopieczni"
                                    to="trainer/myStudents"
                                    imageSrc={mealIcon}
                                />
                                <MenuListItem
                                    title="Dodaj podopiecznego"
                                    to="trainer/addStudent"
                                    imageSrc={mealIcon}
                                />
                                <MenuListItem
                                    title="Dodaj plan treningowy dla podopiecznego"
                                    to="trainer/addStudentTrainingPlan"
                                    imageSrc={mealIcon}
                                />
                                <MenuListItem
                                    title="Dodaj diete dla podopiecznego"
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
