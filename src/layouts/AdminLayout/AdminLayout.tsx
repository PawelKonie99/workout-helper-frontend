import { Outlet } from "react-router-dom"
import { ContentContainer, MenuListItem } from "@/components"
import { Navbar } from "../components"

export const AdminLayout = () => {
    return (
        <div className="bg-offWhite h-screen">
            <Navbar />
            <div className="pt-28">
                <ContentContainer>
                    <div className="flex w-full">
                        <div className="mr-20">
                            <ul>
                                <MenuListItem title="Wszyscy uzytkownicy" to="admin/allUsers" />
                                <MenuListItem title="Wyszukaj uzytkownika" to="admin/findUser" />
                            </ul>
                        </div>
                        <Outlet />
                    </div>
                </ContentContainer>
            </div>
        </div>
    )
}
