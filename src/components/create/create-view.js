import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import createStyles from './create-styles';

const Create = ({ submitHandler, formData, setFormData}) => {
    const classes = createStyles();
    const handleChange = (event) => {
        const formDataTemp = {...formData};
        formDataTemp[event.target.name] = event.target.value;
        setFormData(formDataTemp);
    }
    return ( 
        <form className={classes.root} noValidate autoComplete="off" onSubmit={submitHandler}>
            <div>
                <TextField name="description" required id="item-name" label="Description" placeholder="Enter description" defaultValue="Description" onChange={handleChange}/>
                <TextField name="place" id="item-place" label="Place" placeholder="Place Name" />
                <TextField
                    id="item-price"
                    label="Price"
                    type="number"
                    name="price"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                />
                 <TextField
                    id="datetime-local"
                    label="creation date/time"
                    type="datetime-local"
                    name="date"
                    defaultValue="2017-05-24T10:30"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button variant="contained" color="primary">
                    Insert
                </Button>
            </div>
        </form>
     );
}

Component.propTypes = {
    submitHandler: PropTypes.func.isRequired,
    setFormData: PropTypes.func.isRequired,
    formData: PropTypes.array.isRequired,

};

export default Create;