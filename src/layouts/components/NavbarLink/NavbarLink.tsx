import { Link } from "react-router-dom"

interface Props {
    link: string
    title: string
    onClick?: () => void
}

export const NavbarLink = ({ link, title, onClick }: Props) => {
    return (
        <>
            <li className="lg:ml-8" onClick={onClick}>
                <Link to={link}>
                    <span className="text-base lg:text-lg hover:border-b-2 border-black pb-1 ">
                        {title}
                    </span>
                </Link>
            </li>
        </>
    )
}
