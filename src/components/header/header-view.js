import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import TimerIcon from '@material-ui/icons/Timer';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './header-styles';

const Header = ({title, counter}) => {
    const classes = useStyles();
    return ( 
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" className={classes.menuButton} aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    {title}
                </Typography>
                {counter &&
                    <Badge color="secondary" badgeContent={counter}>
                        <TimerIcon />
                    </Badge>
                }
            </Toolbar>
        </AppBar>
     );
}

Component.PropTypes = {
    title: PropTypes.string.isRequired,
    counter: PropTypes.string
};
export default Header;