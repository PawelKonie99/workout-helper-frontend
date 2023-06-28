import classNames from "classnames"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, Controller } from "react-hook-form"
import { toast } from "react-toastify"
import { useContext, useState } from "react"
import { NormalButton, TextInput } from "@/components"
import { PopUpContext } from "@/contexts"
import { changePassword, deleteTrainer } from "@/api"
import { changeUserPasswordSchema } from "@/schema"
import { IChangeUserPasswordSchema } from "@/types"

interface Props {
    trainerName: string
    trainerId: string
}

const defaultFormValues: IChangeUserPasswordSchema = {
    password: "",
}

export const UserSettings = ({ trainerId, trainerName }: Props) => {
    const { openPopup, closePopup } = useContext(PopUpContext)

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

    const changePasswordSubmit = async ({ password }: IChangeUserPasswordSchema) => {
        try {
            setIsLoading(true)

            const { success } = await changePassword(password)

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

    const deleteTrainerLastWarning = () => {
        openPopup(
            <div className="w-full flex flex-col justify-center items-center">
                <h1
                    className="mb-8 text-xl text-center
                "
                >
                    Czy na pewno chcesz usunąc trenera?
                </h1>
                <div className="flex">
                    <NormalButton
                        label="Usuń trenera"
                        onClick={() => {
                            sendDeleteTrainer()
                            closePopup()
                        }}
                        buttonVariant="delete"
                        className="mr-6"
                    />
                    <NormalButton
                        label="Anuluj"
                        onClick={() => {
                            closePopup()
                        }}
                        buttonVariant="primary"
                    />
                </div>
            </div>,
        )
    }

    const sendDeleteTrainer = async () => {
        const { message } = await deleteTrainer()

        if (message === "Trener usuniety pomyślnie") {
            toast.success("Trener usuniety pomyślnie")
        } else {
            toast.info("Błąd podczas usuwania trenera")
        }
    }

    const borderAppearance = classNames({
        "border-t-2": trainerId && trainerName,
    })

    return (
        <div className="flex flex-col">
            {trainerId && trainerName && (
                <div className="mb-8">
                    <span className="mr-1">Twój trener:</span>
                    <span className="mr-2 text-primaryBlue">{trainerName}</span>
                    <NormalButton
                        label="Usuń trenera"
                        onClick={() => {
                            closePopup()
                            deleteTrainerLastWarning()
                        }}
                        buttonVariant="delete"
                    />
                </div>
            )}

            <form
                onSubmit={handleSubmit(changePasswordSubmit)}
                className={`flex flex-col ${borderAppearance}`}
            >
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
        </div>
    )
}
