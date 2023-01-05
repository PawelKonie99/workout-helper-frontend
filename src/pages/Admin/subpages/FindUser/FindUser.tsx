import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "react-toastify"
import { getUserByUsername } from "@/api/adminApi/getUserByUsername"
import { TextInput, NormalButton } from "@/components"
import { SingleUserData } from "../../components/SingleUserData/SingleUserData"
import { IParsedUserData } from "@/types"
import { deleteUser, getSingleUserData } from "@/api"

const FindUser = () => {
    const [userToFindName, setUserToFindName] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [singleUserData, setSingleUserData] = useState<IParsedUserData>()

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserToFindName(event.target.value)
    }

    const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setIsLoading(true)
        const response = await getUserByUsername(userToFindName)

        if (response.success) {
            setSingleUserData(response.parsedUserData)

            setIsLoading(false)
        } else {
            setIsLoading(false)
            toast.error("Błąd podczas szukania uzytkownika!")
        }
    }

    const sendDeleteUser = async (userId: string) => {
        const { message } = await deleteUser(userId)

        if (message === "Uzytkownik usuniety pomyślnie") {
            toast.success(`Uzytkownik usuniety pomyślnie!`)
            setSingleUserData(undefined)
        } else {
            toast.error("Błąd podczas usuwania uzytkownika!")
        }
    }

    const handleChangeUpdatedUserId = async (userId: string) => {
        const response = await getSingleUserData(userId)

        if (response.success) {
            setSingleUserData(response.parsedUserData)
        }
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit} className="flex flex-col items-start">
                <h3 className="text-2xl pb-4">Wyszukaj uzytkownika</h3>
                <div className="flex">
                    <TextInput
                        name="username"
                        label="Nazwa uzytkownika"
                        placeholder="Nazwa uzytkownika"
                        value={userToFindName}
                        onChange={handleNameChange}
                        classname="pb-4"
                    />
                </div>

                <NormalButton label="Wyszukaj" type="submit" isLoading={isLoading} />
            </form>
            {singleUserData && (
                <div className="mt-16">
                    <SingleUserData
                        adminRole={singleUserData.roles.adminRole}
                        trainerRole={singleUserData.roles.trainerRole}
                        userRole={singleUserData.roles.userRole}
                        id={singleUserData.id}
                        username={singleUserData.username}
                        sendDeleteUser={sendDeleteUser}
                        handleChangeUpdatedUserId={handleChangeUpdatedUserId}
                    />
                </div>
            )}
        </div>
    )
}
export default FindUser
