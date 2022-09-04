import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { StyledEngineProvider } from "@mui/styled-engine"
// import { ThemeProvider } from "@mui/material/styles"
import { Router } from "@/routes"
import { store } from "./store/store"
import { PopupProvider } from "./contexts"
import { CustomToastContainer, Popup } from "./components"
// import { materialUITheme } from "./utils"

function App() {
    return (
        <Provider store={store}>
            <StyledEngineProvider injectFirst>
                {/* <ThemeProvider theme={materialUITheme}> */}
                <BrowserRouter>
                    <PopupProvider>
                        <Popup />
                        <Router />
                    </PopupProvider>
                </BrowserRouter>
                {/* </ThemeProvider> */}
                <CustomToastContainer />
            </StyledEngineProvider>
        </Provider>
    )
}

export default App
