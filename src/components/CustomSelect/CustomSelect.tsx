import { FieldError, RefCallBack } from "react-hook-form"
import Select, { StylesConfig } from "react-select"
import { FormErrorMessage } from "../FormErrorMessage/FormErrorMessage"

interface ISelectValue {
    value: string | number
    label: string
}
interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange: (...event: any[]) => void
    inputRef: RefCallBack
    value?: ISelectValue
    options: ISelectValue[]
    placeholder: string
    name: string
    isError?: FieldError
    errorMessage?: string
}

export const CustomSelect = ({
    onChange,
    inputRef,
    value,
    placeholder,
    name,
    options,
    isError,
    errorMessage,
}: Props) => {
    return (
        <div className="flex flex-col mx-2">
            <Select
                options={options}
                styles={selectWorkoutStyles}
                placeholder={placeholder}
                onChange={onChange}
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
