import React from 'react';
import { action } from '@storybook/addon-actions';
import Header from './header-view';
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
    title: 'Header Variants',
    decorators: [withKnobs]
};

export const HeaderText = () => <Header title={text("Title", "Hello Storybook")} onClick={action('Clicked')}/>;

HeaderText.story = {
    name: 'title',
};
