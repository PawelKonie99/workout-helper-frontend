import { toast } from "react-toastify"
import { useContext } from "react"
import { NormalButton } from "@/components"
import { PopUpContext } from "@/contexts"
import { deleteTrainer } from "@/api"

interface Props {
    trainerName: string
    trainerId: string
}

export const UserSettings = ({ trainerId, trainerName }: Props) => {
    const { openPopup, closePopup } = useContext(PopUpContext)

    const deleteTrainerLastWarning = () => {
        openPopup(
            <div className="w-full flex flex-col justify-center items-center">
                <h1
                    className="mb-8 text-xl text-center
                "
                >
                    Czy na pewno chcesz usunąc trenera?
                </h1>
                <div className="flex">
                    <NormalButton
                        label="Usuń trenera"
                        onClick={() => {
                            sendDeleteTrainer()
                            closePopup()
                        }}
                        buttonVariant="delete"
                        className="mr-6"
                    />
                    <NormalButton
                        label="Anuluj"
                        onClick={() => {
                            closePopup()
                        }}
                        buttonVariant="primary"
                    />
                </div>
            </div>,
        )
    }

    const sendDeleteTrainer = async () => {
        const { message } = await deleteTrainer()

        if (message === "Trener usuniety pomyślnie") {
            toast.success("Trener usuniety pomyślnie")
        } else {
            toast.info("Błąd podczas usuwania trenera")
        }
    }

    return (
        <>
            {trainerId && trainerName && (
                <div>
                    <span className="mr-1">Twój trener:</span>
                    <span className="mr-2 text-primaryBlue">{trainerName}</span>
                    <NormalButton
                        label="Usuń trenera"
                        onClick={() => {
                            closePopup()
                            deleteTrainerLastWarning()
                        }}
                        buttonVariant="delete"
                    />
                </div>
            )}
        </>
    )
}
