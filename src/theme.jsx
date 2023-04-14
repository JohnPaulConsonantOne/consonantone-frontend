import { createTheme } from "@mui/material/styles";

const PrimaryMainTheme = createTheme({
    palette: {
        primary: {
            main: "#6246EA",
            light: "#EBEBFF"
        },
        secondary: {
            main: '#EBEBFF'
        },
        error: {
            main: '#DC0D0D'
        },
        warning: {
            main: '#FA7C28'
        },
        success: {
            main: '#00BD9D'
        }
    }
});

export { PrimaryMainTheme };