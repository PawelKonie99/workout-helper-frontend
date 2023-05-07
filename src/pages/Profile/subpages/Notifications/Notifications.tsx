import { useEffect, useState } from "react"
import { getTrainerRequest } from "@/api"
import { useAppSelector } from "@/store/hooks/storeHooks"
import { IRequestedTrainerData } from "@/types"
import { RequestedTrainers } from "../../components"

const Notifications = () => {
    const { trainerName } = useAppSelector((state) => state.userReducer)
    const [userRequestedTrainers, setUserRequestedTrainers] = useState<IRequestedTrainerData[]>()

    useEffect(() => {
        loadRequestedTrainers()
    }, [])

    const loadRequestedTrainers = async () => {
        const { requestedTrainers } = await getTrainerRequest()
        requestedTrainers && setUserRequestedTrainers(requestedTrainers)
    }

    return (
        <RequestedTrainers
            userRequestedTrainers={userRequestedTrainers}
            loadRequestedTrainers={loadRequestedTrainers}
            isTrainer={!!trainerName}
        />
    )
}

export default Notifications
