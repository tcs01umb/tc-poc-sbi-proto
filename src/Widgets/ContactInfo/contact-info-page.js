import React from 'react';
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import {connect} from "react-redux";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import contact_24 from "../../assets/contact_24.png";
import {Button, Divider} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = {
    content: {
        width: 140,
        borderRadius: 200,
        height: 300
    },
    textField: {
        width: "95%",
        border: "2px"
    },
    errorMessage: {
        fontSize: 12, color: "red", textAlign: 'left'
    },
    label: {
        textAlign: "left",
        float:"right"
    },
    input: {
        display: "none",
        width: "60%"
    },
    InputWidth: {
        width: "50%",
        margin: "0 auto"
    },
    AlignCenter:{
        margin: "0 auto"
    }
}

class ContactInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addressLine1:(this.props.address ? this.props.address.addressLine1 : ''),
            suitOrAptNumber: (this.props.address ? this.props.address.appNumber : ''),
            city: (this.props.zipcodeinfo ? this.props.zipcodeinfo.city: ''),
            state: (this.props.zipcodeinfo ? this.props.zipcodeinfo.state: ''),
            gender: "",
            addressLine1ErrorMessage:"",
            suitOrAptNumberErrorMessage: "",
            cityErrorMessage: "",
            stateErrorMessage: "",
            genderErrorMessage: ""
        };
    }

    changeHandler = e => {
        if (e.target.name === "addressLine1") {
            this.setState({ addressLine1: e.target.value, addressLine1ErrorMessage:'' });
        } else if (e.target.name === "suitOrAptNumber") {
            this.setState({ suitOrAptNumber: e.target.value, suitOrAptNumberErrorMessage: '' });
        } else if (e.target.name === "city") {
            this.setState({ city: e.target.value, cityErrorMessage: '' });
        } else if (e.target.name === "state") {
            this.setState({ state: e.target.value, stateErrorMessage: '' });
        }
        console.log("e.target.name ",this.state)
    };

    validate = () => {
       let { addressLine1 , suitOrAptNumber ,city, state} = this.state;
        if(addressLine1 && suitOrAptNumber && city && state ) {
            return true;
        } else {
            return false;
        }
    }

    updateErrorMessage = () => {
        let { addressLine1 , suitOrAptNumber ,city, state } = this.state;

        if(!addressLine1){
            this.setState({ addressLine1ErrorMessage: "Address line cannot be blank" });
        }

        if(!suitOrAptNumber){
            this.setState({ suitOrAptNumberErrorMessage: "Suit/App Number cannot be blank" });
        }

        if(!city){
            this.setState({ cityErrorMessage: "City cannot be blank" });
        }

        if(!state){
            this.setState({ stateErrorMessage: "State cannot be blank" });
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        console.log("this.props",this.props.zipcodeinfo)
        let isEnable = this.validate();
        return (
            <div style={{backgroundColor:'#F5F5F5', paddingTop: '6px', paddingBottom: '30px'}}>
                <Paper style={useStyles.root} className="panel-outerMargin">
                    <Grid container className="MuiGrid-direction-xs-row">
                        <Grid item xs={6} className="MuiGrid-align-items-xs-flex-start">
                            <img  style={useStyles.img} src={contact_24} alt="icon"/>
                            <span className="panel-heading"><b>Contact Information</b></span>
                        </Grid>
                        <Grid item xs={6} ></Grid>
                    </Grid>
                    <Divider/>
                <div className="sbi-formField-row">
                    <div className="sbi-formField-label">
                        <label style={useStyles.label} className="sbi-formField-label-text">Address Line 1</label>
                    </div>
                    <div className="sbi-formField-value">
                        <TextField
                            required
                            name="addressLine1"
                            id="address-line-1"
                            margin="normal"
                            style = {useStyles.textField}
                            onChange={this.changeHandler}
                            value = {this.props.address ? this.props.address.addressLine1: undefined}
                            inputProps={{
                                readOnly: (this.props.address && this.props.address.addressLine1) ? true: false
                            }}
                        />
                        {this.state.addressLine1ErrorMessage &&
                            <div style={useStyles.errorMessage}>
                                {this.state.addressLine1ErrorMessage}
                            </div> 
                        }
                    </div>
                </div>

                <div className="sbi-formField-row">
                    <div className="sbi-formField-label">
                        <label style={useStyles.label} className="sbi-formField-label-text">Address Line 2</label>
                    </div>
                    <div className="sbi-formField-value">
                        <TextField
                            required
                            id="address-line-2"
                            margin="normal"
                            style = {useStyles.textField}
                        />
                    </div>
                </div>

                <div className="sbi-formField-row">
                    <div className="sbi-formField-label">
                        <label style={useStyles.label} className="sbi-formField-label-text">Suit/App Number</label>
                    </div>
                    <div className="sbi-formField-value">
                        <TextField
                            required
                            name="suitOrAptNumber"
                            id="suit-apt-number"
                            margin="normal"
                            style = {useStyles.textField}
                            onChange={this.changeHandler}
                            value = {this.props.address ? this.props.address.appNumber: undefined}
                            inputProps={{
                                readOnly: (this.props.address && this.props.address.appNumber) ? true: false
                            }}
                        />
                        {this.state.suitOrAptNumberErrorMessage && 
                            <div style={useStyles.errorMessage}>
                                    {this.state.suitOrAptNumberErrorMessage}
                            </div>
                        }
                    </div>
                </div>

                <div className="sbi-formField-row">
                    <div className="sbi-formField-label">
                        <label style={useStyles.label} className="sbi-formField-label-text">City</label>
                    </div>
                    <div className="sbi-formField-value">
                        <TextField
                            required
                            name="city"
                            id="add-city"
                            margin="normal"
                            style = {useStyles.textField}
                            onChange={this.changeHandler}
                            value = {this.props.zipcodeinfo ? this.props.zipcodeinfo.city: undefined}
                            inputProps={{
                                readOnly: (this.props.zipcodeinfo && this.props.zipcodeinfo.city) ? true: false
                            }}
                        />
                        {this.state.cityErrorMessage && 
                            <div style={useStyles.errorMessage}>
                                {this.state.cityErrorMessage}
                            </div>
                        }
                    </div>
                </div>

                <div className="sbi-formField-row">
                    <div className="sbi-formField-label">
                        <label style={useStyles.label} className="sbi-formField-label-text" >State</label>
                    </div>
                    <div className="sbi-formField-value">
                        <TextField
                            required
                            name="state"
                            id="add-state"
                            margin="normal"
                            style = {useStyles.textField}
                            onChange={this.changeHandler}
                            value = {this.props.zipcodeinfo ? this.props.zipcodeinfo.state: undefined}
                            inputProps={{
                                readOnly: (this.props.zipcodeinfo && this.props.zipcodeinfo.state) ? true: false
                            }}
                        />
                        {this.state.stateErrorMessage && 
                            <div style={useStyles.errorMessage}>
                                {this.state.stateErrorMessage}
                            </div>
                        }
                    </div>
                </div>

                    <Grid container>

                        <Grid sm={1}>
                            <Link to="/ent/sbi"><Button variant="contained" style={{borderColor:"#041c3d",backgroundColor:'white',color:'#041c3d',boarderRadius:'10%'}}>Cancel</Button></Link>{' '}
                        </Grid>
                        <Grid sm={8} style={{marginRight: '7%'}}/>
                        <Grid sm={1}>
                            <Button variant="contained"  style={{borderColor:"#041c3d",backgroundColor:'white',color:'#041c3d',boarderRadius:'10%'}} onClick={this.props.handleBack}>
                                {'Previous'}
                            </Button>
                        </Grid>
                        <Grid sm={1}>
                            <Button variant="contained"  style={{backgroundColor:'#041c3d',color:'white'}} onClick={isEnable ? this.props.handleNext: this.updateErrorMessage}>
                                {'Next'}
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        "zipcodeinfo": state.zipcodeinfo,
        "address":state.address
    }
}

export default connect(mapStateToProps)(ContactInfo)