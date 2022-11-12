export const formatDate = (date: string) => {
    const properDateType = new Date(date)

    return properDateType.toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}
