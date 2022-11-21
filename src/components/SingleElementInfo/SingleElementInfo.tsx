interface Props {
    macroElementName: string
    valueOfMacroElement: number | string
    unit?: string
}

export const SingleElementInfo = ({ macroElementName, valueOfMacroElement, unit }: Props) => {
    return (
        <div className="mr-4">
            <span>{macroElementName}: </span>
            <span className="text-primaryBlue mr-1">{valueOfMacroElement}</span>
            <span className="text-primaryBlue">{unit}</span>
        </div>
    )
}
