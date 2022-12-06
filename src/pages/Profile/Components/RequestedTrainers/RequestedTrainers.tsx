import { useDispatch } from "react-redux"
import { useContext } from "react"
import { toast } from "react-toastify"
import { sendStudentTrainerDecision } from "@/api"
import { NormalButton } from "@/components"
import { MANAGE_REQUESTED_TRAINERS } from "@/enums"
import { IRequestedTrainerData } from "@/types"
import { PopUpContext } from "@/contexts"
import { saveUserTrainer } from "@/store/userReducer/actions/saveUserTrainer"

interface Props {
    userRequestedTrainers?: IRequestedTrainerData[]
    loadRequestedTrainers: () => Promise<void>
    isTrainer?: boolean
}

export const RequestedTrainers = ({
    userRequestedTrainers,
    loadRequestedTrainers,
    isTrainer,
}: Props) => {
    const { openPopup, closePopup } = useContext(PopUpContext)
    const dispatch = useDispatch()

    const manageRequestedTrainer = async (
        userDecision: MANAGE_REQUESTED_TRAINERS,
        trainerId: string,
    ) => {
        if (isTrainer) {
            openPopup(
                <div className="w-full flex flex-col justify-center items-center">
                    <h1
                        className="mb-16 text-xl text-center
                    "
                    >
                        Posiadasz aktualnie trenera, jezeli zaakceptujesz to trener zostanie
                        zmieniony na nowego
                    </h1>
                    <div className="flex">
                        <NormalButton
                            label="Zmien trenera"
                            onClick={() => {
                                sendUserDecision(userDecision, trainerId)
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
                </div>,
            )
        } else {
            sendUserDecision(userDecision, trainerId)
        }
    }

    const sendUserDecision = async (userDecision: MANAGE_REQUESTED_TRAINERS, trainerId: string) => {
        const studentDecisionPayload = {
            userDecision,
            trainerId,
        }

        const { message, trainerName } = await sendStudentTrainerDecision(studentDecisionPayload)
        loadRequestedTrainers()

        if (message === "Trener został zaakceptowany") {
            toast.success("Trener został zaakceptowany")
            saveUserTrainer(dispatch, trainerName)
        } else {
            toast.info("Trener został odrzucony")
        }
    }

    return (
        <div className="flex flex-col ">
            {userRequestedTrainers?.map(({ id, username }) => (
                <div key={id} className="flex items-center mb-6">
                    <span className="text-primaryBlue mr-1 ">Nick trenera: </span>{" "}
                    <span className="mr-6">{username}</span>
                    <div>
                        <NormalButton
                            label="Akceptuj trenera"
                            onClick={() =>
                                manageRequestedTrainer(MANAGE_REQUESTED_TRAINERS.ACCEPT, id)
                            }
                            buttonVariant="primary"
                            className="mr-4"
                        />
                        <NormalButton
                            label="Odrzuć trenera"
                            onClick={() =>
                                manageRequestedTrainer(MANAGE_REQUESTED_TRAINERS.DECLINE, id)
                            }
                            buttonVariant="delete"
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}
