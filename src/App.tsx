import { BrowserRouter } from "react-router-dom"
import { StyledEngineProvider } from "@mui/styled-engine"
// import { ThemeProvider } from "@mui/material/styles"
import { Router } from "@/routes"
// import { materialUITheme } from "./utils"

function App() {
    return (
        <StyledEngineProvider injectFirst>
            {/* <ThemeProvider theme={materialUITheme}> */}
            <BrowserRouter>
                <Router />
            </BrowserRouter>
            {/* </ThemeProvider> */}
        </StyledEngineProvider>
    )
}

export default App
