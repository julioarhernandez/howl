import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import Typography from '@material-ui/core/Typography';
import useStyles from './item-styles';

const Item = ({icon, title, subtitle, subtitleFragment, time }) => {
    const classes = useStyles();
    return ( 
    <ListItem alignItems="flex-start">
        <ListItemIcon className={classes.leftIcon}>
            <WatchLaterOutlinedIcon color="secondary"/>
        </ListItemIcon>
        <ListItemText
        primary={title}
        secondary={
            <React.Fragment>
            <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
            >
                {subtitle}
            </Typography>
            {` —  $${subtitleFragment}`}
            </React.Fragment>
        }
        />
        <ListItemText
        className={classes.shrink}
        secondary={time}
        />
    </ListItem>
     );
}

Component.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    subtitleFragment: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};

export default Item;