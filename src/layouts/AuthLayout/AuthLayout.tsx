import { Outlet } from "react-router-dom"
import { Footer } from "../components"

export const AuthLayout = () => {
    return (
        <>
            {/* <Navbar /> */}
            <div className="bg-background px-6">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
