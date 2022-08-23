import { useState, createContext, useMemo, ReactNode, useCallback } from "react"

interface ContextType {
    popupContent: JSX.Element | null
    openPopup: (content: JSX.Element) => void
    closePopup: () => void
}

export const PopUpContext = createContext({} as ContextType)

export const PopupProvider = ({ children }: { children: ReactNode }) => {
    const [popupContent, setPopupContent] = useState<JSX.Element | null>(null)

    const openPopup = useCallback((content: JSX.Element) => {
        setPopupContent(content)
    }, [])

    const closePopup = useCallback(() => {
        setPopupContent(null)
    }, [])

    const value = useMemo(
        () => ({
            popupContent,
            openPopup,
            closePopup,
        }),
        [popupContent, openPopup, closePopup],
    )

    return <PopUpContext.Provider value={value}>{children}</PopUpContext.Provider>
}
