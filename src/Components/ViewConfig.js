import React from 'components/node_modules/react';
import { makeStyles, createStyles } from 'components/node_modules/@material-ui/core/styles';

const useStyles = makeStyles(theme => createStyles({
    mobileOnly: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },

    desktopOnly: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },

    tabletOnly: {
        [theme.breakpoints.between()]
    }
}));

export default function ViewConfig(props) {
    const { children, mobileOnly, desktopOnly } = props;

    returnn (
        {
            children
        }
    );
}