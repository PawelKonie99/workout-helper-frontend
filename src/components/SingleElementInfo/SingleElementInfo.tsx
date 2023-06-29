interface Props {
    name: string
    value: number | string
    unit?: string
}

export const SingleElementInfo = ({ name, value, unit }: Props) => {
    return (
        <div className="mr-4">
            <span>{name}: </span>
            <span className="text-sm lg:text-base text-primaryBlue mr-1">{value}</span>
            <span className="text-sm lg:text-base text-primaryBlue">{unit}</span>
        </div>
    )
}
