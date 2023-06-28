import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export const Container = ({ children }: Props) => {
    return <div className="max-w-1200 m-auto px-10 xl:px-0">{children}</div>
}
