interface Props {
    href: string
    label: string
}

export const TextLink = ({ href, label }: Props) => {
    return (
        <a className="mt-4 hover:text-grey" href={href}>
            {label}
        </a>
    )
}
