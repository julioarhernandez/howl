import React from 'react';
import { action } from '@storybook/addon-actions';
import Header from './header-view';

export default {
    title: 'Header Variants',
};

export const HeaderText = () => <Header title="Title" onClick={action('Clicked')}/>;
export const HeaderText2 = () => <Header title="Title2" onClick={action('Clicked')}/>;

HeaderText.story = {
    name: 'title',
};
HeaderText2.story = {
    name: 'title2',
};
