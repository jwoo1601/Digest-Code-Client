import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import SignUpDialog from '../Components/SignUpDialog';

const useStyles = makeStyles(theme => createStyles({
    root: {

    }
}));

export default function ViewSignUp(props) {
    const { show } = props;
    const classes = useStyles();
    
    return (
        <SignUpDialog showDialog={show}></SignUpDialog>
    );
}