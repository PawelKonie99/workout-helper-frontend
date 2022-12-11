import { useState } from "react"
import { NormalButton } from "@/components"
import { getUsers } from "@/api"
import { IUserData } from "@/types"
import { UserRole } from "../UserRole/UserRole"

export const AllUsersList = () => {
    const [offset, setOffset] = useState(0)
    const [usersToDisplay, setUsersToDisplay] = useState<IUserData[]>([])

    const loadMoreStudents = async () => {
        setOffset((prevState) => prevState + 2)
        const { usersData } = await getUsers({ offset, limit: 2 })

        if (usersData?.length) {
            setUsersToDisplay((prevState) => prevState.concat(usersData))
        }
    }

    return (
        <div>
            {usersToDisplay?.map(({ username, roles: { adminRole, trainerRole, userRole } }) => (
                <div className="mb-6" key={username}>
                    <span>Nazwa uzytkownika:</span>
                    <span className="ml-2 text-primaryBlue">{username}</span>
                    <div className="flex">
                        <span className="mr-2">Role: </span>
                        <UserRole isRole={adminRole} roleName="admin" />
                        <UserRole isRole={trainerRole} roleName="trainer" />
                        <UserRole isRole={userRole} roleName="user" />
                    </div>
                </div>
            ))}
            <NormalButton
                buttonVariant="primary"
                label="Pobierz dodatkowych uzytkownikow"
                onClick={loadMoreStudents}
                className="mt-4"
            />
        </div>
    )
}
