import { useState } from "react"
import { ContentContainer, MenuListItem } from "@/components"
import { AllUsersList } from "./components"

type viewsToDisplayAdmin = "ALL_USERS"

const Admin = () => {
    const [viewToDisplay, setViewToDisplay] = useState<viewsToDisplayAdmin>()

    const loadView = (view: viewsToDisplayAdmin) => {
        setViewToDisplay(view)
    }

    return (
        <div>
            <ContentContainer>
                <div className="flex w-full">
                    <div className="mr-40">
                        {/* <ul>
                            <MenuListItem
                                onClick={() => loadView("ALL_USERS")}
                                title="Wszyscy uzytkownicy"
                            />
                        </ul> */}
                    </div>
                    {viewToDisplay === "ALL_USERS" && <AllUsersList />}
                </div>
            </ContentContainer>
        </div>
    )
}

export default Admin
