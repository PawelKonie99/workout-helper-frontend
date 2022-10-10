import { InputLabel } from "@mui/material"
import { FieldError, RefCallBack } from "react-hook-form"
import Select, { StylesConfig } from "react-select"
import { IWorkoutOption } from "@/types"
import { FormErrorMessage } from "../FormErrorMessage/FormErrorMessage"

interface ISelectValue {
    value: string | number
    label: string
}
interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange: (...event: any[]) => void
    inputRef: RefCallBack
    options: ISelectValue[]
    placeholder: string
    name: string
    label: string
    onChangeCustom?: (option: IWorkoutOption) => void
    value?: ISelectValue
    isError?: FieldError
    errorMessage?: string
}

export const CustomSelect = ({
    onChange,
    inputRef,
    placeholder,
    name,
    options,
    label,
    onChangeCustom,
    value,
    isError,
    errorMessage,
}: Props) => {
    const handleChange = (event: any) => {
        onChange(event)
        onChangeCustom && onChangeCustom(event)
    }

    return (
        <div className="flex flex-col mx-2">
            <InputLabel id={label}>{label}</InputLabel>
            <Select
                inputId={label}
                options={options}
                styles={selectWorkoutStyles}
                placeholder={placeholder}
                onChange={handleChange}
                ref={inputRef}
                value={value}
                name={name}
            />
            <FormErrorMessage isError={isError} errorMessage={errorMessage} />
        </div>
    )
}

//TODO move to another file
const selectWorkoutStyles: StylesConfig = {
    control: (styles) => ({ ...styles, margin: "0.5rem 0.5rem 0.5rem 0" }),
    // option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    option: (styles) => {
        return {
            ...styles,
            margin: "2px",
        }
    },
}
