export const isObjectFilled = <T>(objectToCheck: T) => {
    return Object.keys(objectToCheck).length > 0 ? true : false
}
