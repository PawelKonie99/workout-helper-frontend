import { RefCallBack, FieldError } from "react-hook-form"
import { FormErrorMessage } from ".."

interface Props {
    onChange: (...event: any[]) => void
    inputRef: RefCallBack
    value: string
    isError?: FieldError
    errorMessage?: string
}

//TODO deprecated to remove
export const WorkoutRepInput = ({ onChange, inputRef, value, isError, errorMessage }: Props) => {
    return (
        <div className="flex flex-col">
            <div className="mx-2 flex items-center justify-center">
                <input
                    type="number"
                    className="w-10 md:w-12 px-1 py-1 rounded-md"
                    min={0}
                    onChange={onChange}
                    ref={inputRef}
                    value={value}
                />
            </div>
            <FormErrorMessage isError={isError} errorMessage={errorMessage} />
        </div>
    )
}
