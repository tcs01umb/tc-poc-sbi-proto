import React from 'react';
import {Button, Divider, makeStyles, TextField, Typography} from '@material-ui/core';
import {Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import FormGroup from '@material-ui/core/FormGroup';
import { Link } from 'react-router-dom'
import Grid from "@material-ui/core/Grid";
import quote_24 from "../../assets/quote_24.png";
import Paper from "@material-ui/core/Paper";


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
        width: "95%"
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

export default  class SBIQuoteResultsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            premium:712.90,
            propertyDeductible: '$1000.00'
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({propertyDeductible: event.target.value});
    }

    recalculatePremium(value) {
        if(value) {
            this.setState({premium: 712.90});
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return(
            <div  style={{backgroundColor:'#F5F5F5', paddingTop: '6px', paddingBottom: '30px'}}>
            <Paper style={useStyles.root} className="panel-outerMargin">
                <Grid container className="MuiGrid-direction-xs-row">
                    <Grid item xs={6} className="MuiGrid-align-items-xs-flex-start">
                        <img  style={useStyles.img} src={quote_24} alt="icon"/>
                        <span className="panel-heading"><b>Coverage Details</b></span>
                    </Grid>
                    <Grid item xs={6} ></Grid>
                </Grid>
                <Divider/><br/>
                <Typography align="left" style={{paddingLeft:'19px'}}>All limits are in US Dollars unless otherwise noted. Monthly premiums are rounded to the nearest penny.</Typography> <br/>
                <div style={{marginLeft:'7%', marginRight: '7%'}}>
                    <Table style={{border:"90%"}}>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{width:"50%", backgroundColor: '#F5F5F5'}} align='left'>Coverage</TableCell>
                                <TableCell style={{width:"25%",backgroundColor: '#F5F5F5'}} align='left'>Selection</TableCell>
                                <TableCell style={{width:"25%", backgroundColor: '#F5F5F5'}} align='left'>Monthly Premium</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        <TableRow >
                            <TableCell style={{width:"50%"}} align='left'>General Liability</TableCell>
                            <TableCell style={{width:"25%"}} align='left'><span className="currency-display">$1,000,000 </span> Per Occurrence <br/><br/>
                            <span className="currency-display">$2,000,000 </span> Aggregate Limit
                            </TableCell>
                            <TableCell style={{width:"25%"}} align='left'><span className="currency-display">$600.90 </span></TableCell>
                        </TableRow>
                            <TableRow >
                                <TableCell style={{width:"50%"}} align='left'>Business Property</TableCell>
                                <TableCell style={{width:"25%"}} align='left'><span className="currency-display">$50,000 </span></TableCell>
                                <TableCell style={{width:"25%"}} align='left'><span className="currency-display">$112.00</span></TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell style={{width:"50%"}} align='left'>Property Deductible</TableCell>
                                <TableCell style={{width:"25%"}} align='left'>
                                    <select id="propertyDeductible" value={this.state.value} onChange={this.handleChange} className="currency-display">
                                        <option value='$1000.00'>$1000.00</option>
                                        <option value='$2000.00'>$2000.00</option>
                                        <option value='$3000.00'>$3000.00</option>
                                        <option value='$4000.00'>$4000.00</option>
                                    </select>
                                </TableCell>
                                <TableCell style={{width:"25%"}} align='left'>Property Deductible</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <div className="quotePremium-table" style={{border:"10px", display: "flex"}}>
                        <div style={{width:"50%"}} align='left'><h1>${this.state.premium}</h1>per year</div>
                        <div style={{width:"50%"}} align='right'>
                            <button variant="contained" className="buttonSBI" style={{backgroundColor:'#041c3d',color:'white'}} onClick={() => this.recalculatePremium( this.state.propertyDeductible)}>
                                Recalculate
                            </button><br/>
                            <label>No payment information required at this time</label>
                        </div>
                    </div>
                    <br/>
                </div>
                <Grid container>
                    <Grid sm={1}>
                        <Link to="/ent/sbi"><Button variant="contained" style={{borderColor:"#041c3d",backgroundColor:'white',color:'#041c3d',boarderRadius:'10%'}}>Cancel</Button></Link>{' '}
                    </Grid>
                    <Grid sm={7} style={{marginRight: '6%'}}/>
                    <Grid sm={1}>
                        <Button variant="contained"  style={{borderColor:"#041c3d",backgroundColor:'white',color:'#041c3d',boarderRadius:'10%'}} onClick={this.props.handleBack}>
                            {'Previous'}
                        </Button>
                    </Grid>
                    <Grid sm={1}>
                        <Link to="/ent/sbi"><Button variant="contained" style={{borderColor:"#041c3d",backgroundColor:'white',color:'#041c3d',boarderRadius:'10%'}}>Save</Button></Link>
                    </Grid>
                    <Grid sm={1}>
                        <Button variant="contained"  style={{backgroundColor:'#041c3d',color:'white'}} onClick={this.props.handleNext}>
                            {'Next'}
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            </div>
        );
    }

}