/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#6EE412",
                primaryDark: "#367208",
                primaryBlue: "#75E6DA",
                primaryBlueDark: "#1a9286",
                errorRed: "#d53541",
                errorRedDark: "#6e161d",
            },
        },
    },
    plugins: [],
}
