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
                        <div className="mr-40">
                            <ul>
                                <MenuListItem title="Moi podopieczni" to="admin/allUsers" />
                            </ul>
                        </div>
                        <Outlet />
                    </div>
                </ContentContainer>
            </div>
        </div>
    )
}
