// Default theme can be found here: https://material-ui.com/customization/default-theme/
import { createMuiTheme } from "@material-ui/core";

export const LIGHT_THEME = createMuiTheme({
    palette: {
        type: "light",
        primary: {
            main: "#449ee2"
        },
        secondary: {
            main: "#99d8ff"
        },
        background: {
            default: "#FAFAFA"
        }
    }
});

export const DARK_THEME = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#99CC66"
        }
    }
});