import React from 'react';
import ItemList from './itemList-view';
import { withKnobs, object } from "@storybook/addon-knobs";

export default {
    title: 'ItemList',
    decorators: [withKnobs]
};

export const ItemListText = () => {
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
    const value = object('items', itemArray);
    return <ItemList items={value} />;
}
ItemListText.story = {
    name: 'Item',
};
