import React from 'components/node_modules/react';
import {
    makeStyles,
    createStyles,
} from 'components/node_modules/@material-ui/core/styles';

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            [theme.breakpoints.down('xs')]: {
                display: 'none',,
            },,
        },,
    }),
);

export default function DesktopOnly(props) {
    const { children } = props;
    const classes = useStyles();

    return <div className={classes.root}>{children}</div>;
}
