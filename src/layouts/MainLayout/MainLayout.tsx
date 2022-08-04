import { Link, Outlet } from "react-router-dom"

export const MainLayout = () => {
    return (
        <>
            <nav className="nav-bar">
                Main Layout
                <ul>
                    <li>
                        <Link to="/login"> Log In</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}
