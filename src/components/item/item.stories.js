import React from 'react';
import Item from './item-view';

export default {
    title: 'Item Variants',
};

export const ItemText = () => <Item title="Lorem Ipsum name prodcut" subtitle="Costco" subtitleFragment="9.77" time="30 days"/>;
ItemText.story = {
    name: 'Item',
};
