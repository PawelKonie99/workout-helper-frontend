import { NormalButton } from "../NormalButton/NormalButton"

interface Props {
    title: string
    acceptButtonLabel: string
    closePopup: () => void
    acceptAction: () => void
}

export const WarningPopup = ({ title, acceptAction, acceptButtonLabel, closePopup }: Props) => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1
                className="mb-16 text-xl text-center
                    "
            >
                {title}
            </h1>
            <div className="flex">
                <NormalButton
                    label={acceptButtonLabel}
                    onClick={() => {
                        acceptAction()
                        closePopup()
                    }}
                    buttonVariant="primary"
                    className="mr-6"
                />
                <NormalButton
                    label="Anuluj"
                    onClick={() => {
                        closePopup()
                    }}
                    buttonVariant="delete"
                />
            </div>
        </div>
    )
}
