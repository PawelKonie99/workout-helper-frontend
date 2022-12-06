import { sendStudentTrainerDecision } from "@/api"
import { NormalButton } from "@/components"
import { MANAGE_REQUESTED_TRAINERS } from "@/enums"
import { IRequestedTrainerData } from "@/types"

interface Props {
    userRequestedTrainers?: IRequestedTrainerData[]
}

export const RequestedTrainers = ({ userRequestedTrainers }: Props) => {
    const manageRequestedTrainer = async (
        userDecision: MANAGE_REQUESTED_TRAINERS,
        trainerId: string,
    ) => {
        const studentDecisionPayload = {
            userDecision,
            trainerId,
        }
        const res = await sendStudentTrainerDecision(studentDecisionPayload)
    }

    return (
        <>
            {userRequestedTrainers?.map(({ id, username }) => (
                <div key={id} className="flex items-center ">
                    <span className="text-primaryBlue mr-1">Nick trenera: </span>{" "}
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
        </>
    )
}
