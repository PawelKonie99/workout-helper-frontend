import classNames from "classnames"
import { NormalButton } from "@/components"
import { changeUserRole } from "@/api/adminApi/changeUserRole"
import { IRole } from "@/types"

interface Props {
    isRole: boolean
    roleName: IRole
    userId: string
    handleChangeUpdatedUserId: (userId: string, role: IRole) => Promise<void>
}

export const UserRole = ({ isRole, roleName, userId, handleChangeUpdatedUserId }: Props) => {
    const selectAppearance = classNames({
        "text-errorRedDark": !isRole,
        "text-primaryDark": isRole,
    })

    const handleChangeRole = async () => {
        const changeRolePayload = {
            userId,
            roleToChange: roleName,
            isRoleActive: !isRole,
        }

        await changeUserRole(changeRolePayload)
        await handleChangeUpdatedUserId(userId, roleName)
    }

    return (
        <div className="flex flex-col mr-4 justify-start items-center mt-4">
            <span className={`font-semibold ${selectAppearance}`}>{roleName}</span>
            <NormalButton
                buttonVariant="secondary"
                label={`${isRole ? "Usuń role" : "Aktywuj role"}`}
                onClick={handleChangeRole}
                isDisabled={roleName === "user"}
            />
        </div>
    )
}
