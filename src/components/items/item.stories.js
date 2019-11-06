import React from 'react';
import Item from './item-view';

export default {
    title: 'Item Variants',
};

export const ItemText = () => <Item title="Title"/>;
ItemText.story = {
    name: 'Item',
};
