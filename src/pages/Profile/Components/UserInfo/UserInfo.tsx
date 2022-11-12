import { IUserInfo } from "@/types"

interface Props {
    userInfo?: IUserInfo
}

export const UserInfo = ({ userInfo }: Props) => {
    const { trainerName, username } = userInfo ?? {}

    return (
        <div className="flex flex-col mb-6 items-center">
            <span>Cześć, {username}</span>
            {trainerName && <span>Twój trener: {trainerName}</span>}
        </div>
    )
}
