import { useContext } from "react"
import { NormalButton, WarningPopup } from "@/components"
import { PopUpContext } from "@/contexts"
import { IRole } from "@/types"
import { ChangeUserPasswordForm } from "../ChangeUserPasswordForm/ChangeUserPasswordForm"
import { UserRole } from "../UserRole/UserRole"

interface Props {
    username: string
    id: string
    adminRole: boolean
    trainerRole: boolean
    userRole: boolean
    handleChangeUpdatedUserId: (userId: string, role: IRole) => Promise<void>
    sendDeleteUser: (userId: string) => Promise<void>
}

export const SingleUserData = ({
    username,
    id,
    adminRole,
    trainerRole,
    userRole,
    handleChangeUpdatedUserId,
    sendDeleteUser,
}: Props) => {
    const { openPopup, closePopup } = useContext(PopUpContext)

    const handleDeleteUser = async (userId: string) => {
        openPopup(
            //TODO testnac
            <WarningPopup
                title={`Czy na pewno chcesz usunąc uzytkownika ${username}?`}
                acceptButtonLabel="Usun uzytkownika"
                acceptAction={() => sendDeleteUser(userId)}
                closePopup={closePopup}
            />,
        )
    }

    return (
        <div className="mb-6 ">
            <div className="grid  xl:grid-cols-5 gap-4 border-b-2 pb-6 xl:border-none xl:pb-0">
                <div className="flex flex-row xl:flex-col mr-4 xl:border-r-2 pr-4">
                    <span>Nazwa uzytkownika</span>
                    <span className=" text-primaryBlue ml-4 xl:ml-0">{username}</span>
                </div>
                <div className="flex flex-col xl:border-r-2 col-span-2">
                    <span className="mr-2">Role uzytkownika</span>
                    <div className="flex  ">
                        <UserRole
                            isRole={adminRole}
                            roleName="admin"
                            userId={id}
                            handleChangeUpdatedUserId={handleChangeUpdatedUserId}
                        />
                        <UserRole
                            isRole={trainerRole}
                            roleName="trainer"
                            userId={id}
                            handleChangeUpdatedUserId={handleChangeUpdatedUserId}
                        />
                        <UserRole
                            isRole={userRole}
                            roleName="user"
                            userId={id}
                            handleChangeUpdatedUserId={handleChangeUpdatedUserId}
                        />
                    </div>
                </div>
                <ChangeUserPasswordForm userId={id} />
                <div>
                    <NormalButton
                        buttonVariant="delete"
                        label="Usuń uzytkownika"
                        onClick={() => handleDeleteUser(id)}
                        className="mt-8"
                    />
                </div>
            </div>
        </div>
    )
}
