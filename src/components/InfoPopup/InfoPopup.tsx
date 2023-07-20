import { useNavigate } from "react-router"
import { NormalButton } from "../NormalButton/NormalButton"

interface Props {
    title: string
    closePopup: () => void
    navigateUrl?: string
}

export const InfoPopup = ({ title, closePopup, navigateUrl }: Props) => {
    const navigate = useNavigate()
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className="mb-16 text-4xl">{title}</h1>
            <NormalButton
                label="Zaloguj się"
                onClick={() => {
                    closePopup()
                    navigateUrl && navigate(navigateUrl)
                }}
                buttonVariant="secondary"
            />
        </div>
    )
}
