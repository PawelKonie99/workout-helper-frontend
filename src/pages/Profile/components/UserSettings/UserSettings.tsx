import classNames from "classnames"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, Controller } from "react-hook-form"
import { toast } from "react-toastify"
import { useContext, useState } from "react"
import { NormalButton, TextInput, WarningPopup } from "@/components"
import { PopUpContext } from "@/contexts"
import { changePassword, deleteTrainer } from "@/api"
import { changeUserPasswordSchema } from "@/schema"
import { IChangeUserPasswordSchema } from "@/types"
import { saveUserTrainer } from "@/store/userReducer/actions/saveUserTrainer"
import { useAppDispatch } from "@/store/hooks/storeHooks"

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
    const dispatch = useAppDispatch()

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
            <WarningPopup
                title="Czy na pewno chcesz usunąc trenera?"
                acceptButtonLabel="Usuń trenera"
                acceptAction={sendDeleteTrainer}
                closePopup={closePopup}
            />,
        )
    }

    const sendDeleteTrainer = async () => {
        const { message } = await deleteTrainer()

        saveUserTrainer(dispatch, "", "")
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
