import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import createStyles from './create-styles';

const Create = ({ submitHandler, formData, setFormData}) => {
    const classes = createStyles();
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }
    return ( 
        <form className={classes.root} noValidate autoComplete="off" onSubmit={submitHandler}>
            <div>
                <TextField name="description" required id="item-name" label="Description" placeholder="Enter description" defaultValue="Description" onChange={handleChange}/>
                <TextField name="place" id="item-place" label="Place" placeholder="Place Name" onChange={handleChange} />
                <TextField
                    id="item-price"
                    label="Price"
                    type="number"
                    name="price"
                    defaultValue={formData.price}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                    onChange={handleChange}
                />
                 <TextField
                    id="date"
                    label="creation date"
                    type="date"
                    name="date"
                    defaultValue={formData.date}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleChange}
                />
                  <TextField
                    id="time"
                    label="creation time"
                    type="time"
                    name="time"
                    defaultValue={formData.time}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="primary">
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