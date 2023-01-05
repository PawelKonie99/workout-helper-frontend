import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export const ContentContainer = ({ children }: Props) => {
    return <div className="px-8 lg:px-10 xl:px-20px bg-offWhite">{children}</div>
}
