import LoadingButton from "@mui/lab/LoadingButton"
import classNames from "classnames"

interface Props {
    label: string
    className?: string
    type?: "button" | "submit" | "reset"
    buttonVariant?: "primary" | "secondary" | "delete"
    onClick?: () => void
    isFullWidth?: boolean
    isLoading?: boolean
    isDisabled?: boolean
}

export const NormalButton = ({
    label,
    className,
    type = "button",
    onClick,
    buttonVariant = "primary",
    isFullWidth,
    isLoading,
    isDisabled,
}: Props) => {
    const buttonAppearance = classNames({
        "bg-primary hover:bg-primaryDark": buttonVariant === "primary",
        "bg-primaryBlue hover:bg-primaryBlue": buttonVariant === "secondary",
        "bg-errorRed hover:bg-errorRedDark": buttonVariant === "delete",
    })

    return (
        <LoadingButton
            type={type}
            variant="contained"
            fullWidth={isFullWidth}
            className={`${buttonAppearance} shadow-none text-sm lg:text-base ${className}`}
            onClick={onClick}
            loading={isLoading}
            disabled={isDisabled}
        >
            {label}
        </LoadingButton>
    )
}
