import { useAppSelector } from "@/store/hooks/storeHooks"
import { NavbarLink } from "../NavbarLink/NavbarLink"

export const Navbar = () => {
    const { trainerRole, adminRole } = useAppSelector((state) => state.userReducer.roles)

    return (
        <div className="fixed w-full flex m-auto justify-between px-4 md:px-16 py-6 bg-primaryYellow z-50">
            <ul className="flex justify-end w-full">
                <NavbarLink link="/workout" title="Nowy trening" />
                <NavbarLink link="/meal" title="Dodaj posiłek" />
                <NavbarLink link="/profile" title="Profil" />
                {trainerRole && <NavbarLink link="/trainer" title="Centrum Trenera" />}
                {adminRole && <NavbarLink link="/admin" title="Centrum Administratora" />}
            </ul>
        </div>
    )
}
