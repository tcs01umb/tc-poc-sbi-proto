import React, { useLayoutEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'


import DebitCard from "./DebitCard";
import Savings from "./Savings";
import Cheque from "./Cheque";
import CreditCard from "./CreditCard";
import Boxy from './Boxy'
import { connect } from 'react-redux'
import { setQuoteObject } from "../../actions";

import "./stylePaymentPage.css";
import {
    Button,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    CssBaseline,
    Container,
    Grid,
    makeStyles,
    Divider
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Header from '../Header/Header'
import payment_24 from "../../assets/payment_24.png";
import Paper from "@material-ui/core/Paper";


// const postData ={"policyId": "7b4ba338-0b66-11ea-a983-060ef1aaca49", "baseLocation": "TX", "premium": 1000.99, "packageCode": "QUOTE", "policyNumber": "7001", "isQuote": false, "policyEffDate": "2019-11-19", "policyExpDate": "2020-06-13", "lastVisitedPage": "Complete", "coverages": {"bodilyInjury": 50.11, "propertyDamage": 10.22, "comprehensive": 100.0, "collision": 400.99}, "drivers": [{"name": "Monica Feloola Geller", "age": 29, "relationship": "SELF", "gender": "female", "license": "OH00000001"}, {"name": "Regina Phelange", "age": 30, "relationship": "ROOMIE", "gender": "female", "license": "OH00000001"}], "vehicles": [{"driverName": "Regina Phelange", "year": 2018, "make": "Honda", "model": "Civic", "vin": "HODHFOAHDLASDOI", "mileage": 130000, "addressLineOne": "4980 usaa blvd", "addressLineTwo": "apt9999", "city": "San Antonio", "state": "Texas", "zip": "78240"}, {"driverName": "Monica Feloola Geller", "year": 2017, "make": "Porshe", "model": "Civic", "vin": "HODHFOAHDLASDOI", "mileage": 120000, "addressLineOne": "4980 usaa blvd", "addressLineTwo": "home", "city": "San Antonio", "state": "Texas", "zip": "99999"}]};

var quote;
const useStyles = {
    root: {
        width: 'auto',
        height: 'auto',
        backgroundColor: 'white',
        boxShadow: '0px 2px 1px 2px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 3px rgba(0,0,0,0.12)'
    },
    alignCenter:
        {
            margin: '0 auto'
        },
    aligning:
        {
            display: 'inline-block',
            padding: 10,
        },
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
export default class SbiPaymentPage extends React.Component {
  
 
  constructor(props) {
    super(props);
    this.state = {value: 'none',
                  pay: 'monthly',
                  
                  };

    this.handleChange = this.handleChange.bind(this);
    // this.handleChange2 = this.handleChange2.bind(this);  
    this.handleChange3 = this.handleChange3.bind(this);   
    this.submitHandler = this.submitHandler.bind(this);
    // quote={...this.props.quote};              

    // this.props.setQuoteObject(this.quote);
  }


  

  handleChange(event) {
    // console.log("before",this.state.value);
    this.setState({value: event.target.value});
    console.log("disp",this.quote);
  }
  // handleChange2(event) {
  //   // console.log("before",this.state.pay);
  //   this.setState({pay: event.target.value});
  //   // console.log(this.state.pay);
  // }
  handleChange3(ev) {
    console.log("before",this.state.value);
    this.setState({ pay: ev.target.value });
    console.log(this.state.value);
  }

  submitHandler = e => {
      this.props.handleNext();
    // quote.lastVisitedPage="confirm";
    // quote.isQuote=false;
    // console.log("arun testing ", quote);
    // this.props.setQuoteObject(quote);
    // console.log("Payment Page postRequest:  "+JSON.stringify(quote));
    // axios.post('https://1nbs6supkj.execute-api.us-east-1.amazonaws.com/v1/pc/auto/policyexpapi/'+this.props.quote.policyId, quote)
    // .then(response => {console.log("Payment Page Response",response)})
    // .catch(error =>{console.log("Payment Page ERROR"+error)})
}

componentDidMount(){
    window.scrollTo(0,0);
  this.setupBeforeUnloadListener();
}
doSomethingBeforeUnload = (ev) => {
//  console.log("SEE YOU SOON WITH A NEW quote"+ JSON.stringify(this.props.quote))        
//  axios.post("https://1nbs6supkj.execute-api.us-east-1.amazonaws.com/v1/pc/auto/policyexpapi/"+this.props.quote.policyId, this.props.quote)
//  .then(response => {console.log("Response"+response.data)})
//  .catch(error =>{console.log("ERROR"+error)})
//  return ev.returnValue="Are you sure want to exit?"
}
setupBeforeUnloadListener = () => {
 window.addEventListener("beforeunload", (ev) => {
     ev.preventDefault();
     console.log("GOOD BYE")
     return this.doSomethingBeforeUnload(ev);
 });
};



  render() {
      let h= 59.4;
      let k;
      h=parseFloat(h).toFixed(2);
      k=parseFloat(h*12).toFixed(2);
    return (
        <div  style={{backgroundColor:'#F5F5F5', paddingTop: '30px', paddingBottom: '30px'}}>
        <Paper style={useStyles.root} className="panel-outerMargin">
            <Grid container className="MuiGrid-direction-xs-row">
                <Grid item xs={6} className="MuiGrid-align-items-xs-flex-start">
                    <img  style={useStyles.img} src={payment_24} alt="icon"/>
                    <span className="panel-heading"><b>Payment</b></span>
                </Grid>
                <Grid item xs={6} ></Grid>
            </Grid>
            <Divider/>
            <div>
           

                <br></br>
                <div>
                    <span>Your total Policy Premium is ${k}</span>
                </div>



                <div>
                  <FormControl component="fieldset" name="method-of-payment">
                    <RadioGroup onChange={this.handleChange3} value={this.state.pay} color="primary">
                      <FormControlLabel value="full" control={<Radio />} label="Pay Full Premium"/>
                      <FormControlLabel value="monthly" control={<Radio />} label="Pay Monthly Installments" />
                    </RadioGroup>
                  </FormControl>            
                </div>


 

                <div>
                  {
                    this.state.pay === 'full' &&
                    <span>The total Amount to be paid is ${k}</span>
                  }
                </div>
                <div>
                  {
                    this.state.pay === 'monthly' &&
                    <div>
                    <div>The total Amount to be paid is ${h}</div>
                    <h3> Installments </h3>
                    < Boxy value={h} />
                    </div>
                    }
                </div>
                  <br></br>    
                  <form>
                    <label>Type of Payment </label>  
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="none" selected disabled hidden>Select an Option</option>
                        <option value='Debit Card'>Debit Card</option>
                        <option value='Credit Card'>Credit Card</option>
                        <option value='Savings'>Savings</option>
                        <option value='Cheque'>Checkings</option>
                    </select>
                  </form>
                
                
           </div>

           <div>
           
               {this.state.value === 'Debit Card' &&
               <DebitCard />
            }
            </div>
            <div>
           
               {this.state.value === 'Credit Card' &&
               <CreditCard />
            }
            </div>
            <div>
          
               {this.state.value === 'Savings' &&
               <Savings />
            }
            </div>
            <div>
           
               {this.state.value === 'Cheque' &&
               <Cheque />
            }
            </div>

            <div>
                <br></br>

                <Grid container>

                    <Grid sm={2}>
                        <Link to="/ent/sbi"><Button variant="contained" style={{borderColor:"#041c3d",backgroundColor:'white',color:'#041c3d',boarderRadius:'10%'}}>Cancel</Button></Link>{' '}
                    </Grid>
                    <Grid sm={5} style={{marginRight: '60px'}}/>
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
                            {'Submit'}
                        </Button>
                    </Grid>
                </Grid>
           </div> 
           <br></br>
        </Paper>
        </div>
    );
  }
}
// export default SbiPaymentPage;