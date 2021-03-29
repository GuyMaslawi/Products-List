import { createMuiTheme, StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#6a5acd',
        },
    },
});

export const AppContainer = (props: any) => {
    return (
        <StylesProvider injectFirst>
            <MuiThemeProvider theme={theme}>
                <ThemeProvider theme={theme}>
                    {props.children}
                </ThemeProvider>
            </MuiThemeProvider>
        </StylesProvider>
    );
};