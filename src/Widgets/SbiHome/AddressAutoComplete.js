import React from "react";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from "@material-ui/core/Input";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { FaCheckCircle,FaTimesCircle } from 'react-icons/fa';
import Grid from "@material-ui/core/Grid";
import {connect} from "react-redux";
import {setAddressInfoType} from "../../actions";
import Address from './Address'

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block'
  },
  InputWidth: {
    width: "50%",
    margin: "0 auto"
  },
  formControl: {
    margin: theme.spacing(1)
  },
}));

const addressValidation =
{
  "addressLine1": null,
  "appNumber": null
}


class AddressAutoComplete extends React.Component {
  changeHandler = e => {
    if(e.target.name=== 'address')
    {
      addressValidation.addressLine1 = e.target.value;
    }
    if(e.target.name=== 'appNumber')
    {
      addressValidation.appNumber = e.target.value;
    }
   this.props.setAddressInfoType(addressValidation);
  };
render() {
  return (
      <div>
        <Grid container style={useStyles.grid}>
          <Grid sm={2} />
          <Grid xs={12} sm={8} style={useStyles.InputWidth}>
              <Address />
          </Grid>
          <Grid sm={2} />
        </Grid>
        <Grid container style={useStyles.grid}>
          <Grid sm={2} />
          <Grid xs={12} sm={8} style={useStyles.InputWidth}>
            <Input
                style={useStyles.InputWidth}
                placeholder="Suit/App number"
                name="appNumber"
                onChange={this.changeHandler}
            ></Input>
          </Grid>
          <Grid sm={2} />
        </Grid>
      </div>
  );
}
}

export default connect(undefined, { setAddressInfoType})(AddressAutoComplete)