import { Checkbox, FormControlLabel } from "@mui/material"
import { useContext } from "react"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router"
import { yupResolver } from "@hookform/resolvers/yup"
import { FormContainer, InfoPopup, NormalButton, TextInput, TextLink } from "@/components"
import { IRegisterFormSchema } from "@/types"
import { registerSchema } from "@/schema"
import { PopUpContext } from "@/contexts/PopupContext"
import { registerUser } from "@/api"

const defaultFormValues: IRegisterFormSchema = {
    username: "",
    password: "",
    confirmPassword: "",
    isTrainer: false,
}

export const RegisterForm = () => {
    const { openPopup, closePopup } = useContext(PopUpContext)

    const {
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm<IRegisterFormSchema>({
        resolver: yupResolver(registerSchema()),
        defaultValues: defaultFormValues,
        mode: "all",
    })

    const onSubmit: SubmitHandler<IRegisterFormSchema> = async (data) => {
        const { username, password, isTrainer } = data

        const registerUserPayload = {
            username,
            password,
            isTrainer: isTrainer ? isTrainer : false,
        }

        const { success, message } = await registerUser(registerUserPayload)

        if (success) {
            openPopup(
                <InfoPopup
                    title="Zarejestrowano pomyślnie!"
                    closePopup={closePopup}
                    navigateUrl="/login"
                />,
            )
        } else if (message === "User already exists") {
            openPopup(<InfoPopup title="Taki uzytkownik juz istnieje!" closePopup={closePopup} />)
        } else {
            openPopup(<InfoPopup title="Niepowodzenie!" closePopup={closePopup} />)
        }

        reset()
    }

    return (
        <div className="py-12 flex justify-center items-center">
            <FormContainer>
                <h1 className="text-3xl pb-8">Zarejestruj sie</h1>
                <div className="w-full mx-auto flex justify-center">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col items-center justify-center w-full"
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
                        <Controller
                            name="confirmPassword"
                            control={control}
                            render={({ field: { name, onChange, ref, value } }) => (
                                <TextInput
                                    inputType="password"
                                    isError={errors.confirmPassword}
                                    name={name}
                                    value={value}
                                    label={"Potwierdź hasło"}
                                    onChange={onChange}
                                    inputRef={ref}
                                    errorMessage={errors.confirmPassword?.message}
                                    placeholder={"Potwierdź hasło"}
                                    classname="w-full"
                                />
                            )}
                        />
                        <Controller
                            name="isTrainer"
                            control={control}
                            render={({ field: { name, onChange, ref, value } }) => (
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            ref={ref}
                                            name={name}
                                            onChange={onChange}
                                            checked={value}
                                        />
                                    }
                                    label="Jestem trenerem personalnym"
                                    className="mb-4 mt-2"
                                />
                            )}
                        />
                        <NormalButton label="Zarejestruj sie" type="submit" />
                    </form>
                </div>
                <TextLink href="login" label="Masz juz konto? Zaloguj się!" />
            </FormContainer>
        </div>
    )
}
