import { toast } from "react-toastify"
import { useContext, useEffect, useState } from "react"
import { NormalButton } from "@/components"
import { deleteUser, getSingleUserData, getUsers } from "@/api"
import { IRole, IUserData } from "@/types"
import { UserRole } from "../UserRole/UserRole"
import { PopUpContext } from "@/contexts"
import { ChangeUserPasswordForm } from "../ChangeUserPasswordForm/ChangeUserPasswordForm"

export const AllUsersList = () => {
    const { openPopup, closePopup } = useContext(PopUpContext)
    const [offset, setOffset] = useState(0)
    const [usersToDisplay, setUsersToDisplay] = useState<IUserData[]>([])

    const [updatedUser, setUpdatedUser] = useState<{ id: string; role: IRole }>({
        id: "",
        role: "user",
    })

    useEffect(() => {
        const testowy = async () => {
            const { parsedUserData } = await getSingleUserData(updatedUser.id)
            if (parsedUserData?.id) {
                setUsersToDisplay((prevState) =>
                    prevState.map((userData) =>
                        userData.id !== updatedUser.id ? userData : parsedUserData,
                    ),
                )
            }
        }

        testowy()
    }, [updatedUser.id, updatedUser.role])

    const handleChangeUpdatedUserId = (userId: string, role: IRole) => {
        setUpdatedUser({ id: userId, role })
    }

    const handleLoadMoreStudents = async () => {
        setOffset((prevState) => prevState + 5)
        const { usersData } = await getUsers({ offset, limit: 5 })

        if (usersData?.length) {
            setUsersToDisplay((prevState) => prevState.concat(usersData))
        }
    }

    const handleDeleteUser = async (userId: string, username: string) => {
        openPopup(
            <div className="w-full flex flex-col justify-center items-center">
                <h1
                    className="mb-16 text-xl text-center
                "
                >
                    Czy na pewno chcesz usunąc uzytkownika {username}?
                </h1>
                <div className="flex">
                    <NormalButton
                        label="Usun uzytkownika"
                        onClick={() => {
                            sendDeleteUser(userId)
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
    }

    const sendDeleteUser = async (userId: string) => {
        const { message } = await deleteUser(userId)

        if (message === "Uzytkownik usuniety pomyślnie") {
            toast.success(`Uzytkownik usuniety pomyślnie!`)
        } else {
            toast.error("Błąd podczas usuwania uzytkownika!")
        }

        setUsersToDisplay((prevState) => prevState.filter(({ id }) => id !== userId)) //TODO pomyslec o lepszym rozwiazaniu
    }

    return (
        <div>
            {usersToDisplay?.map(
                ({ username, roles: { adminRole, trainerRole, userRole }, id }) => (
                    <div key={username} className="mb-6 ">
                        <div className="flex">
                            <div className="flex flex-col mr-4 border-r-2 pr-4">
                                <span>Nazwa uzytkownika</span>
                                <span className=" text-primaryBlue">{username}</span>
                            </div>
                            <div className="flex flex-col border-r-2 ">
                                <span className="mr-2">Role uzytkownika</span>
                                <div className="flex">
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
                                    onClick={() => handleDeleteUser(id, username)}
                                    className="mt-8"
                                />
                            </div>
                        </div>
                    </div>
                ),
            )}
            <NormalButton
                buttonVariant="primary"
                label="Pobierz dodatkowych uzytkownikow"
                onClick={handleLoadMoreStudents}
                className="mt-4"
            />
        </div>
    )
}
