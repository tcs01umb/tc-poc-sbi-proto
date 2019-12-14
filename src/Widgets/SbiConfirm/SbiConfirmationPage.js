import React from "react";
import $ from "jquery";
import { connect } from 'react-redux'
import "./styleconfirmation.css";
// import QuoteResultsPage from "./QuoteResultsPage";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
// import DisplayDriver from './DisplayDriver'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import PrintIcon from '@material-ui/icons/Print';
import {Divider, Grid} from "@material-ui/core";
import confirmation_24 from "../../assets/confirmation_24.png";
import Paper from "@material-ui/core/Paper";



const useStyles = {
  root: {
      flexGrow: 1,
      flexDirection: 'row',
      
  },
  paper: {
      textAlign: 'center',
  },
}

 export default class SbiConfirmationPage extends React.Component {

  constructor(props) {
    super(props);
    
    
  }



  componentDidMount() {
      window.scrollTo(0,0);
    $("button").click(function() {
      $(".check-icon").hide();
      setTimeout(function() {
        $(".check-icon").show();
      }, 0);
    });
  }

  render() {  
    // console.log(this.props);
    return (
        <div  style={{backgroundColor:'#F5F5F5', paddingTop: '30px', paddingBottom: '30px'}}>
        <Paper style={useStyles.root} className="panel-outerMargin">
            <Grid container className="MuiGrid-direction-xs-row">
                <Grid item xs={6} className="MuiGrid-align-items-xs-flex-start">
                    <img  style={useStyles.img} src={confirmation_24} alt="icon"/>
                    <span className="panel-heading"><b>Confirmation</b></span>
                </Grid>
                <Grid item xs={6} ></Grid>
            </Grid>
            <Divider/>
            {/* <div className="success-checkmark">
          <div className="check-icon">
            <span className="icon-line line-tip"></span>
            <span className="icon-line line-long"></span>
            <div className="icon-circle"></div>
            <div className="icon-fix"></div>
          </div>
        </div> */}
        
        
        <div style={useStyles.root}>
            {/*<Card className = "conf-box" style={{flex: 1, flexDirection: 'row', flexWrap: 'Wrap'}}>
      
            <CardContent>*/}
                <div>
                    <ul><Typography variant="body2" color="textSecondary" component="p">
                    Thank you Jenny, Your policy has been processed. A confirmation and follow up steps are sent to your registered email address.
                        </Typography>
                    </ul>
                    
                    <div style={{width:"50%",textAlign: 'center',}}>
                        <Card className = "details" style={{flex: 1, flexDirection: 'row', flexWrap: 'Wrap'}}>
                        <div class="row">
                        <div class="avatar-container">
                          <div class="photo">
                          <Typography  > <img src={require("../../assets/sbilogo.png")} width = "100%" className = "vehicle-img"/> </Typography>
                          </div>
                        </div>
                      <div class="details-container" style={{flex: 1, flexDirection: 'row'}}>
                        <div class="content">
                          <h3>Jenny Doe</h3>
                       <div className = "top-row">
                        <div className = "item">
                        <ul className = "top-column">Policy Number</ul>
                        <ul className = "bottom-column"> 7010 </ul>
                          </div>
                        <div className = "item">
                        <ul className = "top-column">Effective Date</ul>
                        <ul className = "bottom-column"> 2019-10-22 </ul>
                        </div>
  
                      
                        </div>
                        
                        <div className = "top-row" >
                        <div className = "item">
                        <ul className = "top-column">Expiration Date</ul>
                        <ul className = "bottom-column"> 2020-10-22 </ul>
                          </div>
                        <div className = "item">
                        <ul className = "top-column">Premium</ul>
                        <ul className = "bottom-column">$712.90</ul>
                        </div>
  
                      
                        </div>
  
                      </div>
                  </div>
                </div>
                </Card>
                <br></br>
                </div> 
                                  
                    
                                           
                    
                </div>
                
           {/* </CardContent>*/}
            <Link to='/' ><Button variant="contained" style={{backgroundColor:'#041c3d',color:'white',flex: 1, flexDirection: 'row', flexWrap: 'Wrap'}}>
                                View Your Policy
                </Button></Link>
             {/*  </Card>*/}

        </div>
  
<br/><br/><br/><br/>      

        </Paper>

        </div>
    );
  }
}

// const mapStateToProps = state => {
//   console.log("Confirmation page quote state on click"+JSON.stringify(state.quote))
//   return {
//     "quote": state.quote,
//       };
// };

// export default connect(mapStateToProps,null)(ConfirmationPage)