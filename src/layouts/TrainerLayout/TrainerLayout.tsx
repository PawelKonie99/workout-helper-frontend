import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { getTrainerRequest } from "@/api"
import { ContentContainer, MenuListItem } from "@/components"
import { UserInfo } from "@/pages/Profile/components"
import { useAppDispatch, useAppSelector } from "@/store/hooks/storeHooks"
import { saveUserLogout } from "@/store/userReducer/actions/saveUserLogout"
import { IRequestedTrainerData } from "@/types"
import { useTrainerInfo } from "@/hooks"
import { Navbar } from "../components"

export const TrainerLayout = () => {
    return (
        <div className="bg-offWhite h-screen">
            <Navbar />
            <div className="pt-28">
                <ContentContainer>
                    <div className="flex w-full">
                        <div className="mr-40">
                            <ul>
                                <MenuListItem title="Moi podopieczni" to="trainer/myStudents" />
                                <MenuListItem title="Dodaj podopiecznego" to="trainer/addStudent" />
                                <MenuListItem
                                    title="Dodaj plan treningowy dla podopiecznego"
                                    to="trainer/addStudentTrainingPlan"
                                />
                                <MenuListItem
                                    title="Dodaj diete dla podopiecznego"
                                    to="trainer/AddStudentDiet"
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
