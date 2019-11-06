import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SendIcon from '@material-ui/icons/Send';
import Typography from '@material-ui/core/Typography';
import useStyles from './item-styles';

const Item = ({icon, title, subtitle, description}) => {
    const classes = useStyles();
    return ( 
    <ListItem alignItems="flex-start">
        <ListItemIcon>
            <SendIcon />
        </ListItemIcon>
        <ListItemText
        primary="Brunch this weekend?"
        secondary={
            <React.Fragment>
            <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
            >
                Ali Connors
            </Typography>
            {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
        }
        />
        <ListItemText
        className={classes.shrink}
        secondary="30 days"
        />
    </ListItem>
     );
}
export default Item;