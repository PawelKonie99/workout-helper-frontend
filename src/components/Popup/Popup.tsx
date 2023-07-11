import { useContext } from "react"
import { PopUpContext } from "@/contexts"

export const Popup = () => {
    const { popupContent } = useContext(PopUpContext)

    return (
        <>
            {popupContent && (
                <>
                    <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-40" />
                    <div className="fixed w-10/12 lg:w-8/12 xl:w-2/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-10 m:p-10 z-50 rounded-lg">
                        {popupContent}
                    </div>
                </>
            )}
        </>
    )
}
