import React from 'react';
import AddressAutoComplete from './AddressAutoComplete'
import {TextField,Grid,FormGroup,CardContent} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete';
const aptnums = [
    {
        apt:1301
    },
    {
        apt:1302
    },
    {
        apt:1303
    },
    {
        apt:1304
    },
    {
        apt:1305
    },
    {
        apt:1306
    },
    {
        apt:1307
    },
    {
        apt:1308
    },
    {
        apt:1309
    },
    {
        apt:1310
    }
]
const useStyles = {
    textField: {
        width: "100%",
        border: "2px"
    },
    label: {
        float: "left"
    }
}
class AptAddr extends React.Component {
    constructor(props) {
      super(props)    
    }
    render() {
        return (
          <div>
              <Grid container alignContent='center' alignItems='center' direction='column' justify='center' >
              <AddressAutoComplete city={this.props.city}></AddressAutoComplete>
                
                {/* <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={aptnums.map(apt=>{apt})}
                    renderInput={params => (
                    <TextField
                        {...params}
                        label="Apt/Suite#"
                        placeholder="Type Apt/Suite#"
                        InputProps={{ ...params.InputProps, type: 'search' }}
                    /> */}
                    <Autocomplete
                        freeSolo
                        id="combo-box-demo"
                        options={aptnums}
                        getOptionLabel={option => (typeof option == 'string' ? option: option.apt)}
                        filterOption = {x => x}
                        disableOpenOnFocus
                        disableClearable
                        style={{paddingRight:'12%'}}
                        autoComplete
                        autoHighlight
                        autoSelect
                        clearOnEscape
                        renderInput={params => (
                        <TextField {...params}  
                        required
                        id="year"
                        margin="normal"
                        label="Apt/Ste #"
                        InputProps={{ ...params.InputProps, type: 'search' }}
                        style = {useStyles.textField} />
                     )}
                />           
                {/* // <TextField id="standard-basic" label="Apt/Suite #"  placeholder="Type Apt/Suite#" /> */}
                </Grid>
        </div>
        );
    }
}

export default AptAddr;