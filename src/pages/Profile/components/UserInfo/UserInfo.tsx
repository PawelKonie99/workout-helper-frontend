import { IUserInfo } from "@/types"

interface Props {
    userInfo?: IUserInfo
}

export const UserInfo = ({ userInfo }: Props) => {
    const { trainerName, username } = userInfo ?? {}

    return (
        <div className="flex flex-col mb-6 items-center">
            <h1 className="text-2xl">Cześć, {username}</h1>
            {trainerName && <span>Twój trener: {trainerName}</span>}
        </div>
    )
}
