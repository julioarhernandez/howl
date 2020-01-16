import React, {useState} from 'react';
import Create from './create-view';
import { withKnobs } from "@storybook/addon-knobs";
import {formatDate, formatTime} from "../../helpers/date";
import storage from "../../helpers/localStorage";

export default {
    title: 'Create Component',
    decorators: [withKnobs]
};

export const CreateTest = () => {
    const localStore = new storage('randomKey');
    const submitHandler = (e) =>{
        e.preventDefault();
        localStore.saveItem(formData);
        console.log(localStore.getItem());
    }
    const [formData, setFormData] = useState({date: formatDate(), price: 12, time: formatTime()})
    return <Create submitHandler={submitHandler} formData={formData} setFormData={setFormData} />;
}
CreateTest.story = {
    name: 'Create',
};
