import React from 'react';
import { action } from '@storybook/addon-actions';
import Header from './header-view';
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
    title: 'Header Variants',
    decorators: [withKnobs]
};

export const HeaderText = () => <Header title={text("Title", "Howl")} counter={text("counter", "2")} onClick={action('Clicked')}/>;
export const HeaderText2 = () => <Header title={text("Title", "Howl")} onClick={action('Clicked')}/>;
export const HeaderText3 = () => <Header title={text("Title", "Howl")} backLink={text("Back", "Back")} onClick={action('Clicked')}/>;

HeaderText.story = {
    name: 'Header with counter',
};
HeaderText2.story = {
    name: 'Header w/o Counter',
};
HeaderText3.story = {
    name: 'Header w/ Back Link',
};
