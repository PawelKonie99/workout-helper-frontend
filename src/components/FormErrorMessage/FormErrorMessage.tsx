import { FieldError } from "react-hook-form"

interface Props {
    isError?: FieldError
    errorMessage?: string
}

export const FormErrorMessage = ({ isError, errorMessage }: Props) => {
    return isError ? <p className="text-errorRed mr-4">{errorMessage}</p> : null
}
