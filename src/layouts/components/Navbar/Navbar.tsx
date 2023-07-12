import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useAppSelector } from "@/store/hooks/storeHooks"
import { NavbarLink } from "../NavbarLink/NavbarLink"
import Hamburger from "../../../images/svg/hamburger.svg"
import CloseMenu from "../../../images/svg/close-menu.svg"

export const Navbar = () => {
    const { trainerRole, adminRole } = useAppSelector((state) => state.userReducer.roles)

    return (
        <div className="fixed w-full flex m-auto justify-between px-4 lg:px-16 py-4 lg:py-6 bg-primaryYellow z-50">
            <header className="hidden lg:block w-full">
                <ul className="flex justify-end w-full">
                    {!adminRole && (
                        <>
                            <NavbarLink link="/workout" title="Nowy trening" />
                            <NavbarLink link="/meal" title="Dodaj posiłek" />
                            {trainerRole && <NavbarLink link="/trainer" title="Centrum Trenera" />}
                        </>
                    )}
                    <NavbarLink link="/profile" title="Profil" />
                    {adminRole && <NavbarLink link="/admin" title="Centrum Administratora" />}
                </ul>
            </header>
            <header className="lg:hidden h-full top-0 z-50 w-full px-10">
                <div className="flex justify-end">
                    <MobileMenu />
                </div>
            </header>
        </div>
    )
}

export const MobileMenu = () => {
    const { trainerRole, adminRole } = useAppSelector((state) => state.userReducer.roles)
    const [isActive, setIsActive] = useState<boolean>(false)

    const handleToggleIsActive = () => {
        setIsActive((prev) => !prev)
    }

    return (
        <div>
            <button className="full z-0 relative" onClick={handleToggleIsActive}>
                <img src={Hamburger} alt="Hamburger" width={38} />
            </button>

            <AnimatePresence>
                {isActive && (
                    <motion.div
                        className="w-screen h-screen fixed top-0 right-0"
                        variants={mobileMenuAnimation}
                        initial="initial"
                        animate="show"
                        exit="hide"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        key="all"
                    >
                        <div className="fixed w-screen h-screen top-0 right-0 z-10" />
                        <nav
                            className={`fixed z-20 top-0 right-0 flex flex-col w-11/12 md:w-1/2 h-screen pt-7 pb-8 px-10 bg-white ${
                                !isActive ? "hidden" : ""
                            }`}
                        >
                            <div className="mb-11 flex justify-between items-center">
                                <p>MENU</p>
                                <button onClick={handleToggleIsActive}>
                                    <img src={CloseMenu} alt="CloseMenu" width={38} />
                                </button>
                            </div>

                            <ul className="flex flex-col gap-y-4">
                                {!adminRole && (
                                    <>
                                        <NavbarLink
                                            link="/workout"
                                            title="Nowy trening"
                                            onClick={handleToggleIsActive}
                                        />
                                        <NavbarLink
                                            link="/meal"
                                            title="Dodaj posiłek"
                                            onClick={handleToggleIsActive}
                                        />
                                        {trainerRole && (
                                            <NavbarLink
                                                link="/trainer"
                                                title="Centrum Trenera"
                                                onClick={handleToggleIsActive}
                                            />
                                        )}
                                    </>
                                )}
                                <NavbarLink
                                    link="/profile"
                                    title="Profil"
                                    onClick={handleToggleIsActive}
                                />
                                {adminRole && (
                                    <NavbarLink
                                        link="/admin"
                                        title="Centrum Administratora"
                                        onClick={handleToggleIsActive}
                                    />
                                )}
                            </ul>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const mobileMenuAnimation = {
    initial: {
        x: "100%",
    },
    show: {
        x: 0,
    },
    hide: {
        x: "100%",
    },
}
