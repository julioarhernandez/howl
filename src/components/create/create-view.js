import React from 'react';
// import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import createStyles from './create-styles';

const Create = () => {
    const classes = createStyles();
    return ( 
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField required id="item-name" label="Description" placeholder="Enter description" defaultValue="Description"/>
                <TextField id="item-place" label="Place" placeholder="Place Name" />
                <TextField
                    id="item-price"
                    label="Price"
                    type="number"
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
                    defaultValue="2017-05-24T10:30"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
        </form>
     );
}

// Component.PropTypes = {
//     icon: PropTypes.string,
//     title: PropTypes.string.isRequired,
//     subtitle: PropTypes.string.isRequired,
//     subtitleFragment: PropTypes.string.isRequired,
//     time: PropTypes.string.isRequired,
// };

export default Create;