import classNames from "classnames"
import { InputLabel } from "@mui/material"
import { FieldError, RefCallBack } from "react-hook-form"
import Select, { StylesConfig } from "react-select"
import { ISelectOption } from "@/types"
import { FormErrorMessage } from "../FormErrorMessage/FormErrorMessage"

interface ISelectValue {
    value: string | number
    label: string
}
interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange: (...event: any[]) => void
    options: ISelectValue[]
    placeholder: string
    name: string
    label: string
    onChangeCustom?: (option: ISelectOption | unknown) => void
    inputRef?: RefCallBack
    value?: ISelectValue
    isError?: FieldError
    errorMessage?: string
    className?: string
    isMargin?: boolean
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
    className,
    isMargin = true,
}: Props) => {
    const selectAppearance = classNames({
        "mx-2": isMargin,
    })

    const handleChange = (event: unknown) => {
        onChange(event)
        onChangeCustom && onChangeCustom(event)
    }

    return (
        <div className={`flex flex-col ${selectAppearance} ${className} mt-2 xl:mt-0`}>
            <InputLabel id={label}>{label}</InputLabel>
            <Select
                inputId={label}
                options={options}
                styles={selectWorkoutStyles}
                placeholder={placeholder}
                onChange={handleChange}
                ref={inputRef}
                value={value ? value : ""}
                name={name}
            />
            <FormErrorMessage isError={isError} errorMessage={errorMessage} />
        </div>
    )
}

//TODO move to another file
const selectWorkoutStyles: StylesConfig = {
    control: (styles) => ({ ...styles, margin: "0.5rem 0.5rem 0 0" }),
    // option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    option: (styles) => {
        return {
            ...styles,
            margin: "2px",
        }
    },
}
