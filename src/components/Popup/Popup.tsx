import { useContext } from "react"
import { PopUpContext } from "@/contexts"

export const Popup = () => {
    const { popupContent } = useContext(PopUpContext)

    return (
        <>
            {popupContent && (
                <>
                    <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-40" />
                    {popupContent}
                </>
            )}
        </>
    )
}
