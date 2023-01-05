import { Link, To } from "react-router-dom"

interface Props {
    title: string
    to: To
    onClick?: () => void
}

export const MenuListItem = ({ onClick, title, to }: Props) => {
    return (
        <li
            className="border-b-2 mb-4 cursor-pointer flex w-full"
            onClick={() => onClick && onClick()}
        >
            <Link to={to}>{title}</Link>
        </li>
    )
}
