import { Outlet } from "react-router-dom"
import { Navbar } from "../components"

export const MainLayout = () => {
    return (
        <>
            <div className="bg-offWhite h-screen">
                <Navbar />
                <div className="pt-28">
                    <Outlet />
                </div>
            </div>
        </>
    )
}
