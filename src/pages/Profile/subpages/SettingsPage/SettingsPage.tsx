import { useAppSelector } from "@/store/hooks/storeHooks"
import { UserSettings } from "../../components"

const SettingsPage = () => {
    const { trainerName, trainerId } = useAppSelector((state) => state.userReducer)

    return (
        <>
            <UserSettings trainerName={trainerName} trainerId={trainerId} />
        </>
    )
}

export default SettingsPage
