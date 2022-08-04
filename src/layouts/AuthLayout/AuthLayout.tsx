import { Outlet } from "react-router-dom"
import { Navbar, Footer } from ".."

export const AuthLayout = () => {
    return (
        <>
            <Navbar />
            <div className="bg-background px-6">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
