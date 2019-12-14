import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import {Button, Divider, makeStyles, TextField} from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CurrencyFormat from 'react-currency-format';
import {connect} from "react-redux";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import business_details_24 from "../../assets/business_details_24.png";
import {Link} from "react-router-dom";

const useStyles = {
    textField: {
        width: "95%",
        border: "2px"
    },
    currencyField:{
        width: "95%",
        padding: "2%",
        borderStyle : 'ridge',
        borderRadius: '5px',
        borderColor: '#fcfcfc'
    },
    errorMessage: {
        fontSize: 12, color: "red", textAlign: 'left'
    },
    label: {
        textAlign: "left",
        float: "right"
    }
}

class Advanced extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            businessOperated:undefined,
            value: "frame"
        }
    }

    changeHandler = e =>  {
        if(e.target.name === "businessOperated") {
            this.setState({businessOperated:e.target.value});
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        let sbiCoverage = this.props.sbiCoverage.coverage;
        console.log("this.props", this.props.sbiCoverage)
        if(sbiCoverage === "General Liability") {
            return (
                <div style={{backgroundColor:'#F5F5F5', paddingTop: '6px', paddingBottom: '30px'}}>
                    <Paper style={useStyles.root} className="panel-outerMargin">
                        <Grid container className="MuiGrid-direction-xs-row">
                            <Grid item xs={6} className="MuiGrid-align-items-xs-flex-start">
                                <img  style={useStyles.img} src={business_details_24} alt="icon"/>
                                <span className="panel-heading"><b>Additional Business Information</b></span>
                            </Grid>
                            <Grid item xs={6} ></Grid>
                        </Grid>
                        <Divider/>
                        <div className="sbi-formField-row sbi-formField-row-topBreak">
                            <div className="sbi-formField-label">
                                <Box component="span" visibility="visible" p={1} m={1} >
                                    <b>We'll build this quote based on following assumptions. Please confirm:</b>
                                </Box><br/><br/>
                                <Box component="span" visibility="visible" p={1} m={1} >
                                    <b><span>&#10003;</span></b>&nbsp;&nbsp;You have started your business a year before
                                </Box><br/><br/>
                                <Box component="span" visibility="visible" p={1} m={1} >
                                    <b><span>&#10003;</span></b>&nbsp;&nbsp;You are more than 5 years of experience in profession
                                </Box><br/><br/>
                                <Box component="span" visibility="visible" p={1} m={1} >
                                    <b><span>&#10003;</span></b>&nbsp;&nbsp;Your payroll expenses are within $200,000
                                </Box><br/><br/>
                                <Box component="span" visibility="visible" p={1} m={1} >
                                    <b><span>&#10003;</span></b>&nbsp;&nbsp;Your annual Gross revenue is between $200,000 to $500,000
                                </Box><br/><br/>
                            </div>
                            <div className="sbi-formField-value radioButtonStyle">
                                <RadioGroup name="businessOperated" onChange={this.changeHandler} className="radioButtonStyle">
                                    <table><tr><td style ={{width:"100px"}} className="radioButtonStyle"><FormControlLabel value="Yes" control={<Radio />} label="Yes" /></td>
                                        <td><FormControlLabel value="No" control={<Radio />} label="No" /></td>
                                    </tr></table>
                                </RadioGroup>
                                {this.state.businessOperatedErrorMessage && <div style={useStyles.errorMessage} className="radioButtonErrors">{this.state.businessOperatedErrorMessage}</div>}
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
                            <Button variant="contained"  style={{backgroundColor:'#041c3d',color:'white'}} onClick={this.props.handleNext}>
                                {'Next'}
                            </Button>
                        </Grid>
                    </Grid>
                    </Paper>
                </div>
            )
        } else {
            return(
                <div  style={{backgroundColor:'#F5F5F5', paddingTop: '6px', paddingBottom: '30px'}}>
                    <Paper style={useStyles.root} className="panel-outerMargin">
                        <Grid container className="MuiGrid-direction-xs-row">
                            <Grid item xs={6} className="MuiGrid-align-items-xs-flex-start">
                                <img  style={useStyles.img} src={business_details_24} alt="icon"/>
                                <span className="panel-heading"><b>Additional Business Information</b></span>
                            </Grid>
                            <Grid item xs={6} ></Grid>
                        </Grid>
                        <Divider/>
                        <div className="sbi-formField-row">
                            <div className="sbi-formField-label">
                                <label style={useStyles.label} className="sbi-formField-label-text">Federal Employee Identification Number (FEIN) if any?</label>
                            </div>
                            <div className="sbi-formField-value">
                                <TextField
                                    required
                                    name="federalEmployeeIDNumber"
                                    id="federalEmployeeID"
                                    margin="normal"
                                    
                                    style = {useStyles.textField}
                                    onChange={this.changeHandler}
                                />
                            </div>
                        </div>

                        <div className="sbi-formField-row">
                            <div className="sbi-formField-label">
                                <label style={useStyles.label} className="sbi-formField-label-text">Social Security Number (SSN) if any?</label>
                            </div>
                            <div className="sbi-formField-value">
                                <TextField
                                    required
                                    name="ssn"
                                    id="ssn"
                                    margin="normal"
                                    
                                    style = {useStyles.textField}
                                    onChange={this.changeHandler}
                                />
                            </div>
                        </div>

                        <div className="sbi-formField-row">
                            <div className="sbi-formField-label">
                                <Box component="span" visibility="visible" p={1} m={1} >
                                    <b>We'll build this quote based on following assumptions. Please confirm:</b>
                                </Box><br/><br/>
                                <Box component="span" visibility="visible" p={1} m={1} >
                                    <b><span>&#10003;</span></b>&nbsp;&nbsp;You have started your business a year before
                                </Box><br/><br/>
                                <Box component="span" visibility="visible" p={1} m={1} >
                                    <b><span>&#10003;</span></b>&nbsp;&nbsp;You are more than 5 years of experience in profession
                                </Box><br/><br/>
                                <Box component="span" visibility="visible" p={1} m={1} >
                                    <b><span>&#10003;</span></b>&nbsp;&nbsp;Your payroll expenses are within $200,000
                                </Box><br/><br/>
                            </div>
                            <div className="sbi-formField-value radioButtonStyle">
                                <RadioGroup name="businessOperated" onChange={this.changeHandler} className="radioButtonStyle">
                                    <table><tr><td style ={{width:"100px"}} className="radioButtonStyle"><FormControlLabel value="Yes" control={<Radio />} label="Yes" /></td>
                                        <td><FormControlLabel value="No" control={<Radio />} label="No" /></td>
                                    </tr></table>
                                </RadioGroup>
                                {this.state.businessOperatedErrorMessage && <div style={useStyles.errorMessage} className="radioButtonErrors">{this.state.businessOperatedErrorMessage}</div>}
                            </div>
                        </div>
                        {(this.state.businessOperated === "No" || this.state.businessOperated === "Yes") &&
                        <div className="sbi-formField-row">
                            <div className="sbi-formField-label">
                                <label style={useStyles.label} className="sbi-formField-label-text">Contents Limit(Business Personal Property)</label>
                            </div>
                            <div className="sbi-formField-value">
                                <TextField
                                    required
                                    id="content"
                                    margin="normal"
                                    
                                    style = {useStyles.textField}
                                />
                            </div>
                        </div>
                        }

                        {this.state.businessOperated === "No" &&
                        <div>

                            <div className="sbi-formField-row">
                                <div className="sbi-formField-label">
                                    <label style={useStyles.label} className="sbi-formField-label-text">Year of Construction?</label>
                                </div>
                                <div className="sbi-formField-value">
                                    <TextField
                                        required
                                        id="yearOfConstruction"
                                        margin="normal"
                                        
                                        style = {useStyles.textField}
                                    />
                                </div>
                            </div>

                            <div className="sbi-formField-row">
                                <div className="sbi-formField-label">
                                    <label style={useStyles.label} className="sbi-formField-label-text">Number of Stories?</label>
                                </div>
                                <div className="sbi-formField-value">
                                    <TextField
                                        required
                                        id="Stories"
                                        margin="normal"
                                        
                                        style = {useStyles.textField}
                                    />
                                </div>
                            </div>

                            <div className="sbi-formField-row">
                                <div className="sbi-formField-label">
                                    <label style={useStyles.label} className="sbi-formField-label-text">Square Footage of your the building?</label>
                                </div>
                                <div className="sbi-formField-value">
                                    <TextField
                                        required
                                        id="footage"
                                        margin="normal"
                                        
                                        style = {useStyles.textField}
                                    />
                                </div>
                            </div>

                            <div className="sbi-formField-row">
                                <div className="sbi-formField-label">
                                    <label style={useStyles.label} className="sbi-formField-label-text">Square Footage of your business occupied in the building?</label>
                                </div>
                                <div className="sbi-formField-value">
                                    <TextField
                                        required
                                        id="footage"
                                        margin="normal"
                                        
                                        style = {useStyles.textField}
                                    />
                                </div>
                            </div>
                        </div>
                        }

                        <div className="sbi-formField-row">
                            <div className="sbi-formField-label">
                                <Box component="span" visibility="visible" p={1} m={1} >
                                    <b>We'll build this quote based on following assumptions. Please confirm:</b>
                                </Box><br/><br/>
                                <Box component="span" visibility="visible" p={1} m={1} >
                                    <b><span>&#10003;</span></b>&nbsp;&nbsp;Your premises is not more than 5 years old
                                </Box><br/><br/>
                                <Box component="span" visibility="visible" p={1} m={1} >
                                    <b><span>&#10003;</span></b>&nbsp;&nbsp;You have used masonry/wood as construction material for your building
                                </Box><br/><br/>
                                <Box component="span" visibility="visible" p={1} m={1} >
                                    <b><span>&#10003;</span></b>&nbsp;&nbsp;If computers are present, then its value is less than $5000 and necessary <br/>
                                    anti-virus and firewall protection is in place
                                </Box><br/><br/>
                                <Box component="span" visibility="visible" p={1} m={1} >
                                    <b><span>&#10003;</span></b>&nbsp;&nbsp;You have the below safety features installed<br/>
                                </Box>
                                <Box component="span" visibility="visible" p={1} m={1} >
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b><span>&#10003;</span></b>&nbsp;&nbsp;Location within 1000ft of the fire hydrant<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b><span>&#10003;</span></b>&nbsp;&nbsp;Location has any two of below items<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b><span>&#10003;</span></b>&nbsp;&nbsp;Safes for valuables, burglar alarm, security cameras, smoke detectors & sprinkler system installed
                                </Box><br/>
                            </div>
                            <div className="sbi-formField-value radioButtonStyle">
                                <RadioGroup name="businessOperated" onChange={this.changeHandler} className="radioButtonStyle">
                                    <table><tr><td style ={{width:"100px"}} className="radioButtonStyle"><FormControlLabel value="Yes" control={<Radio />} label="Yes" /></td>
                                        <td><FormControlLabel value="No" control={<Radio />} label="No" /></td>
                                    </tr></table>
                                </RadioGroup>
                                {this.state.businessOperatedErrorMessage && <div style={useStyles.errorMessage} className="radioButtonErrors">{this.state.businessOperatedErrorMessage}</div>}
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
                                <Button variant="contained"  style={{backgroundColor:'#041c3d',color:'white'}} onClick={this.props.handleNext}>
                                    {'Next'}
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        "sbiCoverage": state.sbiCoverage
    }
}

export default connect(mapStateToProps)(Advanced)