import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <div className="fixed w-full flex m-auto justify-between px-16 py-6 bg-primaryYellow z-50">
            {/* //TODO replace to img */}
            <p>logo</p>
            <ul className="flex">
                <li className="ml-8">
                    <Link to="/workout">
                        <span className="text-lg ">Nowy trening</span>
                    </Link>
                </li>
                <li className="ml-8">
                    <Link to="/meal">
                        <span className="text-lg">Dodaj posiłek</span>
                    </Link>
                </li>
                <li className="ml-8">
                    <Link to="/profile">
                        <span className="text-lg">Profil</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
