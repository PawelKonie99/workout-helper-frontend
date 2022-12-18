import { Link } from "react-router-dom"
import { useAppSelector } from "@/store/hooks/storeHooks"

export const Navbar = () => {
    const { trainerRole, adminRole } = useAppSelector((state) => state.userReducer.roles)

    return (
        <div className="fixed w-full flex m-auto justify-between px-16 py-6 bg-primaryYellow z-50">
            {/* //TODO replace to img */}
            <Link to="/">
                <p className="text-lg">Strona główna</p>
            </Link>

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
                {trainerRole && (
                    <li className="ml-8">
                        <Link to="/trainer">
                            <span className="text-lg">Centrum Trenera</span>
                        </Link>
                    </li>
                )}
                {adminRole && (
                    <li className="ml-8">
                        <Link to="/admin">
                            <span className="text-lg ">Centrum Administratora</span>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}
