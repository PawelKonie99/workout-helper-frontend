import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router"
import { yupResolver } from "@hookform/resolvers/yup"
import { NormalButton, TextInput } from "@/components"
import { IRegisterFormSchema } from "@/types"
import { submitRegisterForm } from "@/helpers"
import { BUTTON_TYPES, INPUT_TYPES } from "@/enums"
import { registerSchema } from "@/schema"

const defaultFormValues: IRegisterFormSchema = {
    email: "",
    password: "",
    confirmPassword: "",
}

export const RegisterForm = () => {
    const navigate = useNavigate()

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

    const onSubmit: SubmitHandler<IRegisterFormSchema> = (data) => {
        submitRegisterForm(data, navigate)
        reset()
    }

    return (
        <div className="py-12 flex justify-center items-center">
            <div className="bg-white px-12 py-12 flex flex-col items-center w-520px rounded-lg">
                {/* Consider to make h1 var in tailwind config */}
                <h1 className="text-3xl pb-8">Zarejestruj sie</h1>
                <div className="w-full mx-auto flex justify-center">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col items-center w-full"
                    >
                        <Controller
                            name="email"
                            control={control}
                            render={({ field: { name, onChange, ref, value } }) => (
                                <TextInput
                                    isError={errors.email}
                                    name={name}
                                    label="Email"
                                    onChange={onChange}
                                    inputRef={ref}
                                    value={value}
                                    errorMessage={errors.email?.message}
                                    placeholder="Email"
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
                        <Controller
                            name="confirmPassword"
                            control={control}
                            render={({ field: { name, onChange, ref, value } }) => (
                                <TextInput
                                    inputType={INPUT_TYPES.PASSWORD}
                                    isError={errors.confirmPassword}
                                    name={name}
                                    value={value}
                                    label={"Potwierdź hasło"}
                                    onChange={onChange}
                                    inputRef={ref}
                                    errorMessage={errors.confirmPassword?.message}
                                    placeholder={"Potwierdź hasło"}
                                    classname="pb-8"
                                />
                            )}
                        />
                        <NormalButton label="Zarejestruj sie" type={BUTTON_TYPES.SUBMIT} />
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
