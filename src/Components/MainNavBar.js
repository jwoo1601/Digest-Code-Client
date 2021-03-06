import React, { Fragment } from 'components/node_modules/react';
import {
    makeStyles,
    createStyles,
} from 'components/node_modules/@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    useScrollTrigger,
    Menu,
    MenuItem,
    Button,
    IconButton,
} from 'components/node_modules/@material-ui/core';

import AccountIcon from 'components/node_modules/@material-ui/icons/AccountCircle';
import LanguageIcon from 'components/node_modules/@material-ui/icons/Public';
import DesktopOnly from './DesktopOnly';

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            backgroundColor: theme.palette.primary.main,
            flexGrow: 1,
        },

        title: {
            marginRight: theme.spacing(6),,
        },

        menuButton: {
            marginLeft: theme.spacing(4),
            color: theme.palette.primary.contrastText,,
        },

        placeholder: {
            flexGrow: 1,,
        },,
    }),
);

function MenuButton(props) {
    const { menuButton } = useStyles();

    return (
      <Button className={menuButton} variant="text" {...props}>
            {props.children}
        </Button>
    );
}

function ElevatedWhenScroll({ children, elevation }) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? elevation || 2 : 0,,
    });
}

export default function MainNavBar(props) {
    const { signUpAction } = props;
    const classes = useStyles();

    return (
      <Fragment>
          <ElevatedWhenScroll>
              <AppBar className={classes.root}>
                  <Toolbar variant="dense">
                      <Typography className={classes.title} variant="h6">
                            Digest Code
                        </Typography>

                      <DesktopOnly>
                          <MenuButton>Membership</MenuButton>
                          <MenuButton>Courses</MenuButton>
                          <MenuButton>Sandbox</MenuButton>
                        </DesktopOnly>

                      <div className={classes.placeholder} />

                      <MenuButton onClick={signUpAction}>Sign Up</MenuButton>
                      <IconButton className={classes.sideButton} edge="end">
                          <LanguageIcon />
                        </IconButton>
                      <IconButton className={classes.sideButton} edge="end">
                          <AccountIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </ElevatedWhenScroll>
          <Toolbar />
        </Fragment>
    );
}
