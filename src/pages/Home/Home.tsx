import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useAppSelector } from "@/store/hooks/storeHooks"

const Home = () => {
    const navigate = useNavigate()
    const { adminRole } = useAppSelector((state) => state.userReducer.roles)

    useEffect(() => {
        adminRole ? navigate("/profile") : navigate("/workout")
    }, [adminRole])

    return <></>
}

export default Home
