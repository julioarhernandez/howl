import React from 'react';
import Header from '../header';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import ItemList from '../itemList';
import useStyles from './app-styles';
import storage from "../../helpers/localStorage";

const App = () => {
    const classes = useStyles();
    const itemArray = [
        {
            title: "Lorem Ipsum name product",
            subtitle: "Costco",
            subtitleFragment: "9.44",
            time: "30 days"
        },
        {
            title: "Ipsum Lorem name product",
            subtitle: "Walmart",
            subtitleFragment: "10.23",
            time: "5 days"
        },
        {
            title: "Ipsum Lorem name product",
            subtitle: "Exp Lane",
            subtitleFragment: "0",
            time: "39 min"
        },
    ];

    const localStore = new storage('randomKey');

    return (
        <>
            <Header title="Howl" counter="2"/>
            <ItemList items={itemArray}/>
            <Fab aria-label="Add" className={classes.fab} color="secondary">
                <AddIcon />
            </Fab>
        </>
    );
}

export default App;
