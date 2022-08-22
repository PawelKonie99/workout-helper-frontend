import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { yupResolver } from "@hookform/resolvers/yup"
import { NormalButton, TextInput } from "@/components"
import { ILoginFormSchema } from "@/types"
import { submitLoginForm } from "@/helpers"
import { BUTTON_TYPES, INPUT_TYPES } from "@/enums"
import { loginSchema } from "@/schema"

const defaultFormValues: ILoginFormSchema = {
    username: "",
    password: "",
}

export const LoginForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

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

    const onSubmit: SubmitHandler<ILoginFormSchema> = (data) => {
        submitLoginForm(data, navigate, dispatch)
        reset()
    }

    return (
        <div className="py-12 flex justify-center items-center">
            <div className="bg-white px-12 py-12 flex flex-col items-center w-520px rounded-lg">
                {/* Consider to make h1 var in tailwind config */}
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
                                    label="Username"
                                    onChange={onChange}
                                    inputRef={ref}
                                    value={value}
                                    errorMessage={errors.username?.message}
                                    placeholder="Username"
                                    classname="pb-4"
                                />
                            )}
                        />
                        <Controller
                            name="password"
                            control={control}
                            render={({ field: { name, onChange, ref, value } }) => (
                                <TextInput
                                    autoComplete={"password"}
                                    inputType={INPUT_TYPES.PASSWORD}
                                    isError={errors.password}
                                    name={name}
                                    value={value}
                                    label={"Hasło"}
                                    onChange={onChange}
                                    inputRef={ref}
                                    errorMessage={errors.password?.message}
                                    placeholder={"Hasło"}
                                    classname="pb-4"
                                />
                            )}
                        />
                        <NormalButton label="Zaloguj sie" type={BUTTON_TYPES.SUBMIT} />
                    </form>
                </div>
                {/* <div className="flex">
                    <p className="text-sm pr-4">{t("haveNotGotAccount")}</p>
                    <UnderlinedLink label={t("signIn")} href="#" />
                </div> */}
            </div>
        </div>
    )
}
