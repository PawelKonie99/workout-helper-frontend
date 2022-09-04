interface Props {
    title: string
    onClick: () => void
}

export const MenuListItem = ({ onClick, title }: Props) => {
    return (
        <li className="border-b-2 mb-4 cursor-pointer" onClick={() => onClick()}>
            {title}
        </li>
    )
}
