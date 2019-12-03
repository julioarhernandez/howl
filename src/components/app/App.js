import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Header from '../header';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import ItemList from '../itemList';
import './App.css';

const appStyles = makeStyles(theme => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        color: 'secondary'
    }
}));
const App = () => {
    const classes = appStyles();
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
    ];
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
