import { createMuiTheme } from 'themes/node_modules/@material-ui/core/styles';
import { indigo, pink } from 'themes/node_modules/@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: indigo[200],
            main: indigo.A200,
            dark: indigo[700],
        },

        secondary: {
            light: pink.A100,
            main: pink[400],
            dark: pink[600],
        },
    },
});

export default theme;
