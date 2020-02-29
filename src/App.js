import React, { Fragment, useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import {
    ThemeProvider,
    StylesProvider,
    styled,
    makeStyles,
    createStyles,
} from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import PlainTheme from './themes/PlainTheme';
import MainNavBar from './components/MainNavBar';
import MobileOnly from './components/MobileOnly';
import BottomNavBar from './components/BottomNavBar';
import ViewHome from './views/Home';
import ViewSignUp from './views/SignUp';

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            width: '100%',
            height: '100%',
        },

        main: {
            marginBottom: theme.spacing(8),
        },
    }),
);

export default function App() {
    const classes = useStyles();
    const [showView, setShowView] = useState({
        home: true,
        signUp: false,
    });

    return (
        <ThemeProvider theme={PlainTheme}>
            <Fragment>
                <CssBaseline />
                <Router>
                    <div className={classes.root}>
                        <MainNavBar
                            signUpAction={() =>
                                setShowView({
                                    ...showView,
                                    signUp: true,
                                })
                            }
                        />

                        <MobileOnly>
                            <BottomNavBar />
                        </MobileOnly>

                        <main className={classes.main}>
                            <Switch>
                                <Redirect exact from="/" to="/home" />
                                <Route>
                                    <ViewHome />
                                </Route>
                            </Switch>

                            <Route path="/signup">
                                <ViewSignUp show={showView.signUp} />
                            </Route>
                        </main>

                        <footer></footer>
                    </div>
                </Router>
            </Fragment>
        </ThemeProvider>
    );
}

<ThemeProvider>
    <Fragment>
        <CssBaseline>
            <div className={classes.root}>
                <MainNavBar />
                <MobileOnly>
                    <BottomNavBar />
                </MobileOnly>

                <main className={classes.main}>
                    <Switch>
                        <Redirect exact from="/" to="/home" />
                    </Switch>
                </main>
            </div>
        </CssBaseline>
    </Fragment>
</ThemeProvider>;
