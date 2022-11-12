export const parseSubmitedUserData = (userData: { value: string; label: string }) => {
    return {
        id: userData.value,
        userName: userData.label,
    }
}
