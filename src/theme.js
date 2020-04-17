import { createMuiTheme } from "@material-ui/core"

const defaultTheme = createMuiTheme()

export default createMuiTheme({ 
    ...defaultTheme,
    palette: {
        background:{
            main: "#bbdefb"
        },
        primary: {
            main: "#8795e8",
            light: "#bac5ff",
            dark: "#5567b5"
        },
        secondary: {
            main: "#c774e8",
            light: "#fca5ff",
            dark: "#9445b5"
        },
    }
})