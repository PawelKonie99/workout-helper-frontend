import { FieldError, RefCallBack } from "react-hook-form"
import Select, { StylesConfig } from "react-select"
import { FormErrorMessage } from "../FormErrorMessage/FormErrorMessage"

//TODO move to another file
const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
]

interface Props {
    onChange: (...event: any[]) => void
    inputRef: RefCallBack
    value: string
    isError?: FieldError
    errorMessage?: string
}

export const CustomSelect = ({ onChange, inputRef, value, isError, errorMessage }: Props) => {
    return (
        <>
            <Select
                options={options}
                styles={selectWorkoutStyles}
                placeholder="Wybierz ćwiczenie"
                onChange={onChange}
                ref={inputRef}
                value={value}
            />
            <FormErrorMessage isError={isError} errorMessage={errorMessage} />
        </>
    )
}

//TODO move to another file
const selectWorkoutStyles: StylesConfig = {
    control: (styles) => ({ ...styles, margin: "0.5rem 0.5rem 0.5rem 0" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
            ...styles,
            margin: "2px",
        }
    },
}
