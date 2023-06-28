import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export const FormContainer = ({ children }: Props) => {
    return (
        <div className="bg-white px-4 py-12 flex flex-col items-center w-96 rounded-lg">
            {children}
        </div>
    )
}
