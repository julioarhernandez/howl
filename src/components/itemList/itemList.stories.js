import React from 'react';
import ItemList from './itemList-view';

export default {
    title: 'ItemList',
};

const items = [
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

export const ItemListText = () => <ItemList items={items} />;
ItemListText.story = {
    name: 'Item',
};
