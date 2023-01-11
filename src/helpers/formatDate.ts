export const formatDate = (date: string) => {
    console.log("date", date)

    const properDateType = new Date(date)

    return properDateType.toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}
