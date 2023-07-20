import { toast } from "react-toastify"
import { useEffect, useState } from "react"
import { NormalButton } from "@/components"
import { deleteUser, getSingleUserData, getUsers } from "@/api"
import { IRole, IUserData } from "@/types"
import { SingleUserData } from "../SingleUserData/SingleUserData"

export const AllUsersList = () => {
    const [offset, setOffset] = useState(0)
    const [usersToDisplay, setUsersToDisplay] = useState<IUserData[]>([])
    const [updatedUser, setUpdatedUser] = useState<{ id: string; role: IRole }>({
        id: "",
        role: "user",
    })

    useEffect(() => {
        const loadUsers = async () => {
            if (!updatedUser.id) return

            const { parsedUserData } = await getSingleUserData(updatedUser.id)
            if (parsedUserData?.id) {
                setUsersToDisplay((prevState) =>
                    prevState.map((userData) =>
                        userData.id !== updatedUser.id ? userData : parsedUserData,
                    ),
                )
            }
        }

        loadUsers()
        setUpdatedUser({ id: "", role: "user" })
    }, [updatedUser.id, updatedUser.role])

    const handleChangeUpdatedUserId = async (userId: string, role: IRole) => {
        setUpdatedUser({ id: userId, role })
    }

    const handleLoadMoreStudents = async () => {
        setOffset((prevState) => prevState + 5)
        const { usersData } = await getUsers({ offset, limit: 5 })

        if (usersData?.length) {
            setUsersToDisplay((prevState) => prevState.concat(usersData))
        }
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
                    <SingleUserData
                        key={username}
                        adminRole={adminRole}
                        handleChangeUpdatedUserId={handleChangeUpdatedUserId}
                        sendDeleteUser={sendDeleteUser}
                        id={id}
                        trainerRole={trainerRole}
                        userRole={userRole}
                        username={username}
                    />
                ),
            )}
            <NormalButton
                buttonVariant="primary"
                label={
                    usersToDisplay.length
                        ? "Pobierz dodatkowych uzytkownikow"
                        : "Pobierz dane uzytkownikow"
                }
                onClick={handleLoadMoreStudents}
                className="mt-4"
            />
        </div>
    )
}
