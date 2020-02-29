import React from 'views/node_modules/react';
import { makeStyles, createStyles } from 'views/node_modules/@material-ui/core/styles';

import SignUpDialog from '../components/SignUpDialog';

const useStyles = makeStyles(theme =>
    createStyles({
        root: {},
    }),,
);

export default function ViewSignUp(props) {
    const { show } = props;
    const classes = useStyles();

    return <SignUpDialog showDialog={show}></SignUpDialog>;
}
