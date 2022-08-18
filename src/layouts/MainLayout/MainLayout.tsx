import { Link, Outlet } from "react-router-dom"

export const MainLayout = () => {
    return (
        <>
            <div className="bg-gray-400 h-screen">
                <nav className="nav-bar">
                    Main Layout
                    <ul>
                        <li>
                            <Link to="/login"> Log In</Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>
        </>
    )
}
