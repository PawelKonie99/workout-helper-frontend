import { Link } from "react-router-dom"
import { useAppSelector } from "@/store/hooks/storeHooks"
import { NavbarLink } from "../NavbarLink/NavbarLink"

export const Navbar = () => {
    const { trainerRole, adminRole } = useAppSelector((state) => state.userReducer.roles)

    return (
        <div className="fixed w-full flex m-auto justify-between px-16 py-6 bg-primaryYellow z-50">
            {/* //TODO replace to img */}
            <Link to="/">
                <p className="text-lg">Strona główna</p>
            </Link>

            <ul className="flex">
                <NavbarLink link="/workout" title="Nowy trening" />

                <NavbarLink link="/meal" title="Dodaj posiłek" />

                <NavbarLink link="/profile" title="Profil" />
                {trainerRole && <NavbarLink link="/trainer" title="Centrum Trenera" />}
                {adminRole && <NavbarLink link="/admin" title="Centrum Administratora" />}
            </ul>
        </div>
    )
}
