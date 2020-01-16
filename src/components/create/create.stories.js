import React, {useState} from 'react';
import Create from './create-view';
import { withKnobs } from "@storybook/addon-knobs";
import {formatDate, formatTime} from "../../helpers/date";

export default {
    title: 'Create Component',
    decorators: [withKnobs]
};

export const CreateTest = () => {
    const submitHandler = (e) =>{
        e.preventDefault();
        alert(`This is the data received form child ${JSON.stringify(formData)}`);
    }
    const [formData, setFormData] = useState({date: formatDate(), price: 12, time: formatTime()})
    return <Create submitHandler={submitHandler} formData={formData} setFormData={setFormData} />;
}
CreateTest.story = {
    name: 'Create',
};
