import React from 'react';
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
export default ItemList;