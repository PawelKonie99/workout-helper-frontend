import { Outlet } from "react-router-dom"
import { ContentContainer, MenuListItem } from "@/components"
import { Navbar } from "../components"
import userGroupIcon from "../../images/svg/user-group-icon.svg"
import userIcon from "../../images/svg/user-icon.svg"

export const AdminLayout = () => {
    return (
        <div className="bg-offWhite h-screen">
            <Navbar />
            <div className="pt-28">
                <ContentContainer>
                    <div className="flex flex-col xl:flex-row w-full">
                        <div className="mr-20">
                            <ul>
                                <MenuListItem
                                    title="Wszyscy uzytkownicy"
                                    to="admin/allUsers"
                                    imageSrc={userGroupIcon}
                                />
                                <MenuListItem
                                    title="Wyszukaj uzytkownika"
                                    to="admin/findUser"
                                    imageSrc={userIcon}
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
