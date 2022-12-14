import { useState } from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import { Controller, useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { changeUserPassword } from "@/api"
import { NormalButton, TextInput } from "@/components"
import { IChangeUserPasswordSchema } from "@/types"
import { changeUserPasswordSchema } from "@/schema"

interface Props {
    userId: string
}

const defaultFormValues: IChangeUserPasswordSchema = {
    password: "",
}

export const ChangeUserPasswordForm = ({ userId }: Props) => {
    const [isLoading, setIsLoading] = useState(false)

    const {
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm<IChangeUserPasswordSchema>({
        resolver: yupResolver(changeUserPasswordSchema()),
        defaultValues: defaultFormValues,
        mode: "all",
    })

    const onSubmit = async ({ password }: IChangeUserPasswordSchema) => {
        try {
            setIsLoading(true)

            const changeUserPasswordPayload = {
                userId: userId,
                newPassword: password,
            }

            const { success } = await changeUserPassword(changeUserPasswordPayload)

            if (success) {
                toast.success(`Hasło zmienione pomyślnie!`)
            } else {
                toast.error("Błąd podczas zmieniania hasła!")
            }

            reset()
            setIsLoading(false)
        } catch (error: unknown) {
            toast.error("Błąd podczas zmieniania hasła!")
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-4 border-r-2 pr-4">
            <span className="mb-2">Zmień hasło uzytkownika</span>
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
                        label={"Zmień hasło"}
                        onChange={onChange}
                        inputRef={ref}
                        errorMessage={errors.password?.message}
                        placeholder={"Zmień hasło"}
                        classname="pb-4"
                    />
                )}
            />

            <NormalButton label="Zmien hasło" type="submit" isLoading={isLoading} />
        </form>
    )
}
