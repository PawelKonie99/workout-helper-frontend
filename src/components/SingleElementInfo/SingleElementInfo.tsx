interface Props {
    name: string
    value: number | string
    unit?: string
}

export const SingleElementInfo = ({ name, value, unit }: Props) => {
    return (
        <div className="mr-4">
            <span>{name}: </span>
            <span className="text-primaryBlue mr-1">{value}</span>
            <span className="text-primaryBlue">{unit}</span>
        </div>
    )
}
