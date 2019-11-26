import React, {Component} from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Item from '../item';
import useStyles from './itemList-styles';

const ItemList = ({ items }) => {
    const classes = useStyles();
    return ( 
    <List className={classes.root}>
        {items.map((itm)=>{
            return ( 
                <>
                    <Item {...itm}></Item>
                    <Divider variant="inset" component="li" />
                </>
            )
        })}
    </List>
     );
}
Component.PropTypes = {
    items: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        subtitleFragment: PropTypes.string,
        time: PropTypes.string.isRequired
    })
};
export default ItemList;