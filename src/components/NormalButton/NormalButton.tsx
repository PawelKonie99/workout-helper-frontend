import { Button } from "@mui/material"
import classNames from "classnames"
import { BUTTON_TYPES, BUTTON_VARIANT } from "@/enums"

interface Props {
    label: string
    className?: string
    type?: BUTTON_TYPES
    buttonVariant?: BUTTON_VARIANT
    onClick?: () => void
    isFullWidth?: boolean
}

export const NormalButton = ({
    label,
    className,
    type = BUTTON_TYPES.BUTTON,
    onClick,
    buttonVariant = BUTTON_VARIANT.PRIMARY,
    isFullWidth,
}: Props) => {
    const buttonAppearance = classNames({
        "bg-primary hover:bg-primaryDark": buttonVariant === BUTTON_VARIANT.PRIMARY,
        "bg-primaryBlue hover:bg-primaryBlueDark": buttonVariant === BUTTON_VARIANT.SECONDARY,
        "bg-errorRed hover:bg-errorRedDark": buttonVariant === BUTTON_VARIANT.DELETE,
    })

    return (
        <Button
            type={type}
            variant="contained"
            fullWidth={isFullWidth}
            className={`${buttonAppearance} shadow-none ${className}`}
            onClick={onClick}
        >
            {label}
        </Button>
    )
}
