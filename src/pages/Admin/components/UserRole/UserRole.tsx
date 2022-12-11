import classNames from "classnames"
import { NormalButton } from "@/components"

type IRole = "user" | "admin" | "trainer"

interface Props {
    isRole: boolean
    roleName: IRole
}

export const UserRole = ({ isRole, roleName }: Props) => {
    const selectAppearance = classNames({
        "text-errorRedDark": !isRole,
        "text-primaryDark": isRole,
    })

    return (
        <div className="flex flex-col mr-4 justify-start items-center">
            <span className={`font-semibold ${selectAppearance}`}>{roleName}</span>

            <NormalButton
                buttonVariant="secondary"
                label={`${isRole ? "Usuń role" : "Aktywuj role"}`}
                onClick={() => console.log("elo")}
                isDisabled={roleName === "user"}
            />
        </div>
    )
}
