import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export const ContentContainer = ({ children }: Props) => {
    return <div className="px-20">{children}</div>
}
