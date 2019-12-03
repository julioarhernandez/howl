import React from 'react';
import Header from '../header';
import ItemList from '../itemList';
import './App.css';


const App = () => {
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
        </>
    );
}

export default App;
