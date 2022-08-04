import { Button } from "@mui/material"

interface Props {
    label: string
    classname?: string
}

export const FormButton = ({ label, classname }: Props) => {
    return (
        <Button
            type="submit"
            variant="contained"
            fullWidth
            className={`${classname} bg-primary shadow-none`}
        >
            {label}
        </Button>
    )
}
