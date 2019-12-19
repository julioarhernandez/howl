import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TimerIcon from '@material-ui/icons/Timer';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './header-styles';

const Header = ({title, counter, backLink}) => {
    const classes = useStyles();
    return ( 
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" className={classes.menuButton} aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={backLink ? classes.titleLeft : classes.titleCenter}>
                    {title}
                </Typography>
                {counter &&
                    <Badge color="secondary" badgeContent={counter}>
                        <TimerIcon />
                    </Badge>
                }
                {backLink &&
                    <Button color="inherit" className={classes.title}>{backLink}</Button>
                }
            </Toolbar>
        </AppBar>
     );
}

Component.propTypes = {
    title: PropTypes.string.isRequired,
    counter: PropTypes.string,
    backLink: PropTypes.string
};
export default Header;