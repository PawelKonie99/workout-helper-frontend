import { ChangeEvent } from "react"
import { FieldError, RefCallBack } from "react-hook-form"
import { TextField } from "@mui/material"
import { INPUT_TYPES } from "@/enums"
import { FormErrorMessage } from ".."

interface Props {
    name: string
    label: string
    value: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    inputRef?: RefCallBack
    isError?: FieldError
    errorMessage?: string
    inputType?: INPUT_TYPES
    autoComplete?: string
    placeholder?: string
    classname?: string
}

export const TextInput = ({
    isError,
    name,
    label,
    onChange,
    inputRef,
    value,
    errorMessage,
    inputType = INPUT_TYPES.TEXT,
    autoComplete,
    placeholder,
    classname,
}: Props) => {
    return (
        <div className={`${classname} w-full`}>
            <TextField
                fullWidth
                autoComplete={autoComplete}
                type={inputType}
                error={!!isError}
                name={name}
                id={name}
                label={label}
                onChange={onChange}
                ref={inputRef}
                value={value}
                variant="outlined"
                placeholder={placeholder}
                className="border-red-300"
            />
            <FormErrorMessage isError={isError} errorMessage={errorMessage} />
        </div>
    )
}
