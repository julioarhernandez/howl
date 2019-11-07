import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SendIcon from '@material-ui/icons/Send';
import Typography from '@material-ui/core/Typography';
import useStyles from './item-styles';

const Item = ({icon, title, subtitle, subtitleFragment, time }) => {
    const classes = useStyles();
    return ( 
    <ListItem alignItems="flex-start">
        <ListItemIcon>
            <SendIcon />
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
            {` —  ${subtitleFragment}`}
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
export default Item;