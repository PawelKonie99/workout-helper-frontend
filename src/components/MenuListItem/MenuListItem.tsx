import { Link, To } from "react-router-dom"

interface Props {
    title: string
    to: To
    imageSrc: string
    onClick?: () => void
}

export const MenuListItem = ({ onClick, title, to, imageSrc }: Props) => {
    return (
        <div className="flex items-start">
            <img src={imageSrc} alt="meal" height="20px" width="20px" className="mr-2" />
            <li
                className="border-b-2 mb-4 cursor-pointer flex w-full"
                onClick={() => onClick && onClick()}
            >
                <Link to={to}>{title}</Link>
            </li>
        </div>
    )
}
