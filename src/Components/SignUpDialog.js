import React, { useState } from 'components/node_modules/react';
import {
    makeStyles,
    createStyles,
} from 'components/node_modules/@material-ui/core/styles';
import {
    Dialog,
    Grid,
    TextField,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from 'components/node_modules/@material-ui/core';

const useStyles = makeStyles(theme =>
    createStyles({
        root: {},

        inputGroup: {},

        fullSpanInput: {
            marginBottom: theme.spacing(2),
            width: '100%',,
        },

        halfSpanInput: {
            margin: theme.spacing(0, 1, 1, 0),,
        },

        signUpButton: {
            color: theme.palette.secondary.contrastText,
            backgroundColor: theme.palette.secondary.light,

            '&:hover': {
                backgroundColor: theme.palette.secondary.main,,
            },,
        },

        cancelButton: {
            color: theme.palette.secondary.main,,
        },,
    }),
);

function InputGroup(props) {
    const { children } = props;
    const { inputGroup } = useStyles();

    return (
      <Grid
            className={inputGroup}
            container
            justify="center"
            alignItems="center"
        >
          {children}
        </Grid>
    );
}

export default function SignUpDialog(props) {
    const { showDialog } = props;
    const classes = useStyles();

    return (
      <Dialog open={showDialog || false} {...props}>
          <DialogTitle>Sign Up</DialogTitle>
          <DialogContent>
              <form method="POST" action="/register">
                  <Grid
                        container
                        direction="column"
                        justify="space-between"
                        alignItems="center"
                    >
                      <TextField
                            className={classes.fullSpanInput}
                            name="email"
                            label="Email"
                            variant="filled"
                        />
                      <TextField
                            className={classes.fullSpanInput}
                            name="password"
                            label="Password"
                            variant="filled"
                        />
                      <TextField
                            className={classes.fullSpanInput}
                            name="passwordConfirm"
                            label="Confirm Password"
                            variant="filled"
                        />
                      <InputGroup>
                          <TextField
                                className={classes.halfSpanInput}
                                name="firstName"
                                label="First Name"
                                variant="filled"
                            />
                          <TextField
                                className={classes.halfSpanInput}
                                name="lastName"
                                label="Last Name"
                                variant="filled"
                            />
                        </InputGroup>
                    </Grid>
                </form>
            </DialogContent>
          <DialogActions>
              <Button
                    className={classes.signUpButton}
                    variant="contained"
                    size="small"
                >
                    Sign Up
                </Button>
              <Button
                    className={classes.cancelButton}
                    variant="text"
                    size="small"
                >
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}
