import { Link } from "react-router-dom"

interface Props {
    link: string
    title: string
}

export const NavbarLink = ({ link, title }: Props) => {
    return (
        <>
            <li className="ml-8">
                <Link to={link}>
                    <span className="text-lg hover:border-b-2 border-black pb-1 ">{title}</span>
                </Link>
            </li>
        </>
    )
}
