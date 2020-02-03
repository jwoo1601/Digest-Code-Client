import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import PlaceHolderIcon from '@material-ui/icons/ControlPoint';
import HomeIcon from '@material-ui/icons/Home';
import CoursesIcon from '@material-ui/icons/Storage';
import MyCoursesIcon from '@material-ui/icons/Star';
import MembershipIcon from '@material-ui/icons/MonetizationOn';
import AccountIcon from '@material-ui/icons/Person';

const useStyles = makeStyles(theme => createStyles({
    root: {
        position: 'fixed',
        zIndex: theme.zIndex.appBar,
        bottom: 0,
        left: 0,
        margin: 0,
        width: '100%',
        height: 'auto',
        boxShadow: theme.shadows[4],
        
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
    },

    menu: {
        label: {
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }
        }
    }
}));

function BottomNavMenu(props) {
    const { menu } = useStyles();
    const { name, icon } = props;

    return (
        <BottomNavigationAction classes={{ root: menu, label: menu.label }} label={name} value={name} icon={icon || <PlaceHolderIcon />} {...props} />
    );
}

export default function BottomNavBar(props) {
    const classes = useStyles();

    return (
        <BottomNavigation className={classes.root} showLabels>
            <BottomNavMenu name="Home" icon={<HomeIcon />} />
            <BottomNavMenu name="Courses" icon={<CoursesIcon />} />
            <BottomNavMenu name="My Courses" icon={<MyCoursesIcon />} />
            <BottomNavMenu name="Membership" icon={<MembershipIcon />} />
            <BottomNavMenu name="Account" icon={<AccountIcon />} />
        </BottomNavigation>
    );
}