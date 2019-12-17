import React from 'react';
import Create from './create-view';
import { withKnobs } from "@storybook/addon-knobs";

export default {
    title: 'Create Component',
    decorators: [withKnobs]
};

export const CreateTest = () => <Create />;
CreateTest.story = {
    name: 'Create',
};
