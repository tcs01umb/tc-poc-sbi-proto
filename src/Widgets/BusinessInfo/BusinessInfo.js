import React from 'react';
import { Link } from 'react-router-dom'
import ReactDOM from "react-dom";
import Input from "@material-ui/core/Input";
import Grid from '@material-ui/core/Grid';
import history from '../../utils/history'
import Header from '../../Widgets/Header/Header'
import { makeStyles } from '@material-ui/core/styles';
import { Widget,addResponseMessage, dropMessages,addLinkSnippet, addUserMessage } from 'react-chat-widget';
import { Button,Card, CardContent,Switch, Typography,CardHeader,ListItemIcon ,TextField,List,ListItem,ListItemText,Divider,Checkbox} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import ComputerIcon from '@material-ui/icons/Computer';
import HomeIcon from '@material-ui/icons/Home';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import InputBase from '@material-ui/core/InputBase';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormControl from '@material-ui/core/FormControl';
import {connect} from "react-redux";
import Box from '@material-ui/core/Box';
import businessImg from '../../assets/dollar_stack.png';

import "./BusinessInfo.css"
import CurrencyFormat from "react-currency-format";

const busList = ["Offices of Lawyers","Offices of Notaries","Title Abstract and Settlement Offices","All Other Legal Services", 
"Offices of Certified Public Accountants", "Tax Preparation Services", "Payroll Services" ,"Other Accounting Services", 
"Interior Design Services","Industrial Design Services","Graphic Design Services", "Other Specialized Design Services",
"Custom Computer Programming Services","Computer Systems Design Services", "Computer Facilities Management Services",
"Other Computer Related Services", "Advertising Agencies","Outdoor Advertising", "Direct Mail Advertising", "Advertising Material Distribution Services",
"Other Services Related to Advertising", "Photography Studios, Portrait", "Commercial Photography", "Translation and Interpretation Services",
"IT Consultants", "Management Consultants", "Offices of Bank Holding Companies", "Offices of Other Holding Companies", 
"Corporate, Subsidiary, and Regional Managing Offices", "Office Administrative Services", "Facilities Support Services", 
"Employment Placement Agencies", "Executive Search Services", "Temporary Help Services", "Document Preparation Services",
"Telephone Answering Services", "Telemarketing Bureaus and Other Contact Centers", "Private Mail Centers", "Other Business Service Centers (including Copy Shops)",
"Collection Agencies", "Credit Bureaus", "Travel Agencies","Tour Operators","Convention and Visitor Bureaus", "All Other Travel Arrangement and Reservation Services",
"Security Systems Services (excluding Locksmiths)", "Locksmiths", "Janitorial Services", "Landscaping Services", "Carpet and Upholstery Cleaning Services"


];


const products =[
    {
        topic:'Florist',
        image: <LocalFloristIcon/>,
        color:null,
        navigate:'/'
    },
    {
        topic:'Personal Trainer',
        image:<FitnessCenterIcon/>,
        color:null,
        navigate:'/'
    },
    {
        topic:'IT Consultant',
        image:<ComputerIcon/>,
        color:null,
        navigate:'/'
    },
    {
        topic:'Restaurant',
        image:<RestaurantIcon/>,
        color:null,
        navigate:'/'
    },
    {
        topic:'Interior Design',
        image:<HomeIcon/>,
        color:null,
        navigate:'/'
    },
    {
        topic:'Tax advisor',
        image:<SupervisorAccountIcon/>,
        color:null,
        navigate:'/'
    },
    {
        topic:'Travel Agency',
        image:<FlightTakeoffIcon/>,
        color:null,
        navigate:'/'
    }
]
const useStyles = {
    content: {
      width: 140,
      borderRadius: 200,
      height: 300
    },
    currencyField:{
        width: "95%",
        padding: "2%",
        borderStyle : 'ridge',
        borderRadius: '5px',
        borderColor: '#fcfcfc'
    },
    textField: {
        width: "95%",
        marginTop: '0px'
    },  
    input: {
        display: "none",
        width: "60%"
    },
    errorMessage: {
        fontSize: 12, color: "red", textAlign: 'left'
    },
    label: {
        textAlign: "left",
        float: "right"
    },
    grid : {flexDirection:"row",justifyContent:"flex-start", width: '100%', flexShrink: '0' , overflow: 'inherite'},
    InputWidth: {
      width: "50%",
      margin: "0 auto"
    },
    InputWidth_: {
      // paddingLeft: "45%",
      // width: "60%",
      // margin: "0 auto"
    },
    AlignCenter:{
      margin: "0 auto"
    }
}

class BusinessInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            zipCode: (this.props.zipcodeinfo ? this.props.zipcodeinfo.zip: ''),
            zipCodeErrorMessage: "",
            isCheckedA: false,
            isCheckedB: false,
            isCheckedC: false
        };
    }

    changeHandler = e => {
        if (e.target.name === "zipCode")
        {
            this.setState({ zipCode: e.target.value, zipCodeErrorMessage: '' });
        } else if(e.target.name === "selectedRadio") {
            this.setState({ selectedRadio: e.target.value });
        }
    };

    validate = () => {
        let { zipCode} = this.state;
        if(zipCode) {
            return true;
        } else {
            return false;
        }
    }

    updateErrorMessage = () => {
        let { zipCode} = this.state;

        if(!zipCode){
            this.setState({ zipCodeErrorMessage: "Zipcode cannot be blank" });
        }
    }

    componentDidMount() {
       window.scrollTo(0,0);
    }

    render() {
        let isEnable = this.validate();
console.log("I selectedBusinessType ",this.props.sbiCoverage)
        return(

            <div style={{backgroundColor:'#F5F5F5', paddingTop: '6px', paddingBottom: '30px'}}>
                <Paper style={useStyles.root} className="panel-outerMargin">
                    <Grid container className="MuiGrid-direction-xs-row">
                        <Grid item xs={6} className="MuiGrid-align-items-xs-flex-start" >
                            <img  style={useStyles.img} src={businessImg} alt="icon"/>
                            <span className="panel-heading"><b>Describe your Business</b></span>
                        </Grid>
                        <Grid item xs={6} ></Grid>
                    </Grid>
                    <Divider/>
                        <div className="sbi-formField-row">
                            <div className="sbi-formField-label">
                                <label style={useStyles.label} className="sbi-formField-label-text">What is your business type?</label><br/>
                            </div>
                            <div className="sbi-formField-value">
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={busList}
                                    getOptionLabel={option => (typeof option == 'string' ? option: option)}
                                    filterOption = {x => x}
                                    value={this.props.selectedBusinessType}
                                    disableOpenOnFocus
                                    renderInput={params => (
                                        <TextField {...params}
                                                   required
                                                   name="businessType"
                                                   id="businessType"
                                                   margin="normal"
                                                   placeholder = "i.e Landscapping, Photography, etc..."
                                                   style = {useStyles.textField}
                                                   value={this.props.selectedBusinessType}
                                                   onChange={this.changeHandler}/>
                                    )}
                                />
                            </div>
                        </div>

                        <div className="sbi-formField-row">
                            <div className="sbi-formField-label">
                                <label style={useStyles.label} className="sbi-formField-label-text">Business Zip Code</label>
                            </div>
                            <div className="sbi-formField-value">
                                <TextField
                                    required
                                    name="zipCode"
                                    id="zipCode"
                                    margin="normal"
                                    style = {useStyles.textField}
                                    onChange={this.changeHandler}
                                    value = {(this.props.zipcodeinfo && this.props.zipcodeinfo.zip ) ? this.props.zipcodeinfo.zip: undefined}
                                    inputProps={{
                                        readOnly: (this.props.zipcodeinfo && this.props.zipcodeinfo.zip) ? true: false
                                    }}
                                />
                                {this.state.zipCodeErrorMessage && <div style={useStyles.errorMessage}>{this.state.zipCodeErrorMessage}</div>}
                            </div>
                        </div>

                        <br/>
                        <div className="sbi-formField-row">
                            <div className="sbi-formField-label">
                                <Box component="span" visibility="visible" p={1} m={1} >
                                    <b>We'll build this quote based on following assumptions. Please confirm:</b>
                                </Box><br/><br/>
                                <Box component="span" visibility="visible" p={1} m={1} >
                                    <b><span>&#10003;</span></b>&nbsp;&nbsp;Your annual sales do not exceed 500K
                                </Box><br/><br/>
                                <Box component="span" visibility="visible" p={1} m={1} >
                                    <b><span>&#10003;</span></b>&nbsp;&nbsp;You are the sole proprietor of the business
                                </Box><br/><br/>
                                <Box component="span" visibility="visible" p={1} m={1} >
                                    <b><span>&#10003;</span></b>&nbsp;&nbsp;Your business did not incur any policy losses in this past 3 years
                                </Box><br/>
                            </div>
                            <div className="sbi-formField-value radioButtonStyle">
                                <RadioGroup name="selectedRadio" onChange={this.changeHandler} className="radioButtonStyle">
                                    <table><tr><td style ={{width:"100px"}} className="radioButtonStyle"><FormControlLabel value="Yes" control={<Radio />} label="Yes" /></td>
                                        <td><FormControlLabel value="No" control={<Radio />} label="No" /></td>
                                    </tr></table>
                                </RadioGroup>
                                {this.state.lossesClaimedErrorMessage && <div style={useStyles.errorMessage}  className="radioButtonErrors">{this.state.lossesClaimedErrorMessage}</div>}
                            </div>
                        </div>
                            {this.state.selectedRadio === "Yes" &&
                                <div style={{marginTop: '2px', marginBottom: '0px'}}>
                                    <div className="sbi-formField-row">
                                        <div className="sbi-formField-label">
                                            <label style={useStyles.label} className="sbi-formField-label-text">What types of insurance are you looking for?</label>
                                        </div>
                                        <div className="sbi-formField-value radioButtonStyle">
                                            <RadioGroup name="selectedInsurance" onChange={this.changeHandler} className="radioButtonStyle" value={this.props.sbiCoverage.coverage ? this.props.sbiCoverage.coverage : "General Liability"}>
                                                <table><tr><td style ={{width:"100px"}} className="radioButtonStyle"><FormControlLabel value="Business Owners" control={<Radio />} label="BOP" /></td>
                                                    <td><FormControlLabel value="General Liability" control={<Radio />} label="GL" /></td>
                                                </tr></table>
                                            </RadioGroup>
                                        </div>
                                    </div>
                                    <div className="sbi-formField-row">
                                        <div className="sbi-formField-label">
                                            <label style={useStyles.label} className="sbi-formField-label-text">When would you like your policy to start?
                                            </label>
                                        </div>
                                        <div className="sbi-formField-value">
                                            <TextField
                                                required
                                                name="policyStartDate"
                                                id="policyStartDate"
                                                margin="normal"
                                                style = {useStyles.textField}
                                                onChange={this.changeHandler}
                                                value = {this.props.sbiCoverage.policyDate}
                                            />
                                            {this.state.zipCodeErrorMessage && <div style={useStyles.errorMessage}>{this.state.zipCodeErrorMessage}</div>}
                                        </div>
                                    </div>
                                </div>
                            }
                    <Grid container>
                        <Grid sm={1}>
                            <Link to="/ent/sbi"><Button variant="contained" style={{borderColor:"#041c3d",backgroundColor:'white',color:'#041c3d',boarderRadius:'10%'}}>Cancel</Button></Link>{' '}
                        </Grid>
                        <Grid sm={9} style={{marginRight: '7%'}}/>
                        <Grid sm={1}>
                            <Button variant="contained"  style={{backgroundColor:'#041c3d',color:'white'}} onClick={isEnable ? this.props.handleNext: this.updateErrorMessage}>
                                {'Next'}
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        "selectedBusinessType": state.selectedBusinessType,
        "zipcodeinfo": state.zipcodeinfo,
        "sbiCoverage": state.sbiCoverage
    }
}
export default connect(mapStateToProps)(BusinessInfo);