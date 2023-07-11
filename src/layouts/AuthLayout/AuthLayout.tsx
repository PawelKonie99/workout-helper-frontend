import { Outlet } from "react-router-dom"
import { Footer } from "../components"

export const AuthLayout = () => {
    return (
        <>
            {/* <Navbar /> */}
            <div className="px-6">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
