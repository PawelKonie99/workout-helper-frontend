import { useContext } from "react"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router"
import { yupResolver } from "@hookform/resolvers/yup"
import { FormContainer, InfoPopup, NormalButton, TextInput, TextLink } from "@/components"
import { saveUserLogin } from "@/store/userReducer/actions/saveUserLogin"
import { ILoginFormSchema } from "@/types"
import { loginSchema } from "@/schema"
import { loginUser } from "@/api"
import { PopUpContext } from "@/contexts"
import { useAppDispatch } from "@/store/hooks/storeHooks"

const defaultFormValues: ILoginFormSchema = {
    username: "",
    password: "",
}

export const LoginForm = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { openPopup, closePopup } = useContext(PopUpContext)

    const {
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm<ILoginFormSchema>({
        resolver: yupResolver(loginSchema()),
        defaultValues: defaultFormValues,
        mode: "all",
    })

    const onSubmit: SubmitHandler<ILoginFormSchema> = async (data) => {
        const { loggedUser, message } = await loginUser(data)

        if (loggedUser) {
            saveUserLogin(dispatch, loggedUser.token, loggedUser.roles, loggedUser.username)
        }

        //TODO message przeniesc do const
        if (message === "User found in databse") {
            navigate("/workout")
        } else {
            openPopup(<InfoPopup title="Niepowodzenie!" closePopup={closePopup} />)
        }

        reset()
    }

    return (
        <div className="py-12 flex justify-center items-center">
            <FormContainer>
                <h1 className="text-3xl pb-8">Zaloguj się</h1>
                <div className="w-full mx-auto flex justify-center">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col items-center w-full"
                    >
                        <Controller
                            name="username"
                            control={control}
                            render={({ field: { name, onChange, ref, value } }) => (
                                <TextInput
                                    isError={errors.username}
                                    name={name}
                                    label="Nazwa użytkownika"
                                    onChange={onChange}
                                    inputRef={ref}
                                    value={value}
                                    errorMessage={errors.username?.message}
                                    placeholder="Nazwa użytkownika"
                                    classname="pb-4 lg:pb-6 w-full"
                                />
                            )}
                        />
                        <Controller
                            name="password"
                            control={control}
                            render={({ field: { name, onChange, ref, value } }) => (
                                <TextInput
                                    autoComplete={"password"}
                                    inputType="password"
                                    isError={errors.password}
                                    name={name}
                                    value={value}
                                    label={"Hasło"}
                                    onChange={onChange}
                                    inputRef={ref}
                                    errorMessage={errors.password?.message}
                                    placeholder={"Hasło"}
                                    classname="pb-4 lg:pb-6 w-full"
                                />
                            )}
                        />
                        <NormalButton label="Zaloguj sie" type="submit" />
                    </form>
                </div>
                <TextLink href="register" label="Nie masz konta? Zarejestruj się!" />
            </FormContainer>
        </div>
    )
}
