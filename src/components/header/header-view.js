import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './header-styles';

const Header = ({title}) => {
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
                <Button color="inherit">{title}</Button>
            </Toolbar>
        </AppBar>
     );
}

Component.PropTypes = {
    title: PropTypes.string.isRequired
};
export default Header;