import React, {useState} from 'react';
import Create from './create-view';
import { withKnobs } from "@storybook/addon-knobs";

export default {
    title: 'Create Component',
    decorators: [withKnobs]
};

export const CreateTest = () => {
    const submitHandler = (e) =>{
        e.preventDefault();
        console.log('something', formData);
    }
    const [formData, setFormData] = useState({data: 'form'})
    return <Create submitHandler={submitHandler} formData={formData} setFormData={setFormData} />;
}
CreateTest.story = {
    name: 'Create',
};
