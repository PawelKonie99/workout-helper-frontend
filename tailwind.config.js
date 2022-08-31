/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#97efe9",
                primaryDark: "#0b5351",
                primaryLight: "#d6fff6",
                primaryBlue: "#6290c8",
                primaryYellow: "#f7b32b",
                errorRed: "#d53541",
                errorRedDark: "#6e161d",
                grey: "#AEB2B6",
                offWhite: "#F5F5F5",
            },
        },
    },
    plugins: [],
}
