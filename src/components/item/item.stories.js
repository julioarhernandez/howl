import React from 'react';
import Item from './item-view';
import { withKnobs, text, number } from "@storybook/addon-knobs";

export default {
    title: 'Item Variants',
    decorators: [withKnobs]
};

export const ItemText = () => <Item title={text("Title", "Lorem Ipsum name prodcut")} subtitle={text("Subtitle", "Costco")} subtitleFragment={number("Price", "9.77")} time={text("Duration", "30 days")}/>;
ItemText.story = {
    name: 'Item',
};
