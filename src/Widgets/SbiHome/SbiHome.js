import React from 'react';
import ReactDOM from "react-dom";
import Grid from '@material-ui/core/Grid';
import history from '../../utils/history'
import Header from '../../Widgets/Header/Header'
import { makeStyles } from '@material-ui/core/styles';
import { Widget,addResponseMessage, dropMessages,addLinkSnippet, addUserMessage } from 'react-chat-widget';
import { Stepper,Step,StepLabel,MobileStepper,Button,Card, CardContent, Typography,CardHeader,ListItemIcon ,TextField,List,ListItem,ListItemText,Divider,Checkbox, Container} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AptAddr from './AptAddr'
import CoverageSelection from './CoverageSelection';
import BusinessSelection from './BusinessSelection';
// import ZipQueryHandler from "../ZipAdd/ZipQueryHandler";
// import ZipPlace from "../ZipAdd/ZipPlace";
// import GoogleMap from "../ZipAdd/GoogleMap";
import ZipGetter from './ZipGetter';
import SwipeableViews from 'react-swipeable-views';
import './SbiHome.css'
import AddressAutoComplete from "./AddressAutoComplete";
const products =[
  {
    topic:'Florist',
    image:null,
    color:null,
    navigate:'/'
  },
  {
      topic:'Groomer',
      image:null,
      color:null,
      navigate:'/pc/auto'
  },
  {
    topic:'Personal Trainer',
    image:null,
    color:null,
    navigate:'/'
  },
  {
    topic:'Software Engineer',
    image:null,
    color:null,
    navigate:'/'
  },
  {
    topic:'Agriculture Consultant',
    image:null,
    color:null,
    navigate:'/'
  },
  {
    topic:'Physician',
    image:null,
    color:null,
    navigate:'/'
  },
  {
    topic:'Tax advisor',
    image:null,
    color:null,
    navigate:'/'
  },
  {
    topic:'Chef',
    image:null,
    color:null,
    navigate:'/'
  }
    ]
    var zipCodeInfo = { zip: "", city: "", state: "", notFound: false };

    class Swipe extends React.Component {
      
      setStateZipCode(zipdata)
      {
        this.props.setStateZipCode(zipdata)
      }
      render() {
          switch(this.props.val)
          {
              case 1: return <ZipGetter setStateZipCode={this.props.setStateZipCode} />
              // case 2: return <AddressAutoComplete value={this.props.city}></AddressAutoComplete>
              // case 1: return <h1>Hello1</h1>
              case 2: return <AddressAutoComplete />
              case 3: return  <BusinessSelection />
              case 4: return  <CoverageSelection />
              default: return  <Typography component="div">{ this.props.val}</Typography>
          }    
      }
    }
class SbiHome extends React.Component {
  constructor(props) {
    super(props)    
    this.state = { 
      showChat:false,
      chatContext:null,
      val:1,
      maxVal:4
  };
  }
  incrementIndexValue = () => {
    if(this.state.val){this.setState({val : this.state.val+1})}
  }
  decrementIndexValue = () => {
    if(this.state.val){this.setState({val : this.state.val-1})}
  }
  setStateZipCode = (zipdata) =>
  {
    zipCodeInfo =zipdata
  }
  componentDidMount(){
    setTimeout(() => {
         this.setState({showChat: false,})   
     }, 5000)
 }
 handleChangeIndex = index => {
  this.setState({val:index})
}
 handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    if(newMessage && (newMessage.toUpperCase().includes("SMALL") || newMessage.toUpperCase().includes("SBI") || newMessage.toUpperCase().includes("BIS")
    || newMessage.toUpperCase().includes("BUSI")))
    {
        addResponseMessage("Sure i will help you offering an Insurance Quote for your Business...");
        setTimeout(() => {
        ReactDOM.findDOMNode(this).querySelector('.rcw-widget-container .rcw-launcher .rcw-close-launcher').click() 
        history.push('/ent/sbi')} , 1500)

    }
  }
  render() {
    return (
      <div>
          {/* <TextField label="Type of Your Business" variant="standard" margin='none' color='primary' style={{width:'250px',color:'#041c3d'}} onChange={()=>{}}/>
          <br/>
          <br/> */}        
        { this.state.showChat?  <Widget
          handleNewUserMessage={this.handleNewUserMessage}          
          showCloseButton={true}
          fullScreenMode={false}
          badge={0}
          autofocus={true}
          title="Ask TARS"
          subtitle="Hey Jenny! I am Tars Your bot for today! Any help needed with small business insurance?"
        />:""}
        {/* <Typography variant="h6" align="left" style={{color:'#041c3d',textAlign:'center'}}>Here are the most popular business insurance products offered by us.</Typography> */}
        <br/>
          {/* <Grid container  alignItems='center' justify='center' spacing={4} style={{flexDirection:"row"}}> */}
          {products.map(product=> {
          // return(<Grid item>
          //   <Card square elevation={4} onClick={()=>{history.push(product.navigate)}} style={{height:'100px',width:'100px'}}>  
          //   <CardHeader title={product.topic} titleTypographyProps={{variant:"body1", align:"center", component:"p"}}
          //           />
          //   {/* <Paper square  >              */}
          //   <CardContent>
          //   {/* <Grid container   justify='center' spacing={3} style={{flexDirection:"row"}}>
          //     <Grid justify="flex-start" item style={{width:'30%'}}> 
          //     Image here
          //     </Grid>      
          //     <Grid justify="flex-end" item style={{width:'70%'}}>  
          //       Please tap to get your   {product.topic} Quote.
          //     </Grid>  
          //   </Grid> */}
          //   {/* </Paper> */}
          //   </CardContent>
          //   </Card>
          // </Grid>)
        })}
        {/* </Grid> */}
        <Grid container  alignItems='center' justify='center' spacing={4} style={{flexDirection:"row"}}> 
        <Container maxWidth="sm">
          {/* <Grid item>             */}
            {/* <Grid container   justify='center' spacing={3} style={{flexDirection:"row"}}>
                <Grid justify="center" item xs={6}> */}
                <Typography variant="body1" align="left" style={{color:'#041c3d',textAlign:'center'}}>Hi Jenny, You have Selected Business Owners Policy for protecting your Business...</Typography>
                <br/>
                <Typography variant="body1" align="left" style={{color:'#041c3d',textAlign:'center'}}>Lets get the Quote in minutes</Typography>
                <br/>
                <br/>
                {/* <Paper square> */}
                <Paper square maxWidth='lg'>
                <Stepper activeStep={this.state.val -1}>
                      <Step key="Zip Code" completed={this.state.val > 1}>
                        <StepLabel>Location</StepLabel>
                      </Step>   
                      <Step key="Address" completed={this.state.val > 2}>
                        <StepLabel>Address</StepLabel>
                      </Step>
                    <Step key="Business" completed={this.state.val > 3}>
                        <StepLabel>Business</StepLabel>
                    </Step>
                    <Step key="Coverages" completed={this.state.val > 4}>
                        <StepLabel>Coverages</StepLabel>
                      </Step>                               
                </Stepper>
                <SwipeableViews
                  index={this.state.val}  
                  onChangeIndex={this.handleChangeIndex}
                  style={{height:'250px'}}
                  >
                    {console.log("inside swipeable view" + this.state.val)}
                  <Swipe val={this.state.val} index={1} setStateZipCode={this.props.setStateZipCode}/>
                  <Swipe val={this.state.val} index={2} city={zipCodeInfo.city} />              
                  <Swipe val={this.state.val} index={3} city={zipCodeInfo.city} />
                  <Swipe val={this.state.val} index={4} city={zipCodeInfo.city} />
                </SwipeableViews>
                <br/>
                 <MobileStepper steps={this.state.maxVal}
                position="static"
                variant="dots"
                activeStep={this.state.val -1}
                nextButton={
                  this.state.val && this.state.val !== this.state.maxVal ? <button className={"buttonSBI buttonSBIContinue"} id={0} onClick={()=>{this.incrementIndexValue()}}>
                    Next
                  </button>
                  :
                  <button className={"buttonSBI buttonSBIContinue"}  onClick={()=>{ this.incrementIndexValue()
                    history.push('/ent/sbi/userinfo')}}> 
                  Get Quote
                  </button> }
                backButton={
                this.state.val && this.state.val === 1 ?<Button className={"buttonSBI buttonSBIContinue"}  disabled={this.state.val === 1} id={1} onClick={()=>{this.decrementIndexValue()}}>
                    
                    Back
                  </Button>
                  :
                  <button className={"buttonSBI buttonSBIContinue"} id={1} onClick={()=>{this.decrementIndexValue()}}>
                  
                  Back
                  </button>
                }
                style={{backgroundColor:'white',bottom:'10%'}}
                />  
                </Paper>
                {/* </Paper> */}
                {/* <ZipGetter setStateZipCode={this.setStateZipCode} />   
                <AddressAutoComplete value={zipCodeInfo.city}></AddressAutoComplete> */}
                {/* <Paper square>
                  <List style={{padding:'0px'}}>
                    <ListItem button divider style={{color:'white',backgroundColor:'#041c3d',height:'65px'}}>
                      <ListItemText primary="Select Your Coverage" />
                    </ListItem>
                    <ListItem button divider onClick={()=>{history.push('/ent/sbi/userinfo')}}>
                      <ListItemText primary="Business Owners" style={{textAlign:'left',color:'#041c3d'}}/>
                        <ListItemIcon>
                          <div
                            edge="end"
                            disableRipple
                          />
                        </ListItemIcon>
                    </ListItem> 
                    <ListItem button divider onClick={()=>{history.push('/ent/sbi/userinfo')}}>
                      <ListItemText primary="General Liability" style={{textAlign:'left',color:'#041c3d'}}/>
                        <ListItemIcon>
                          <div
                            edge="end"
                            disableRipple
                          />
                        </ListItemIcon>
                    </ListItem> 
                    <ListItem button divider onClick={()=>{history.push('/ent/sbi/userinfo')}}>
                      <ListItemText primary="Professional Liability" style={{textAlign:'left',color:'#041c3d'}}/>
                        <ListItemIcon>
                          <div
                            edge="end"
                            disableRipple
                          />
                        </ListItemIcon>
                    </ListItem> 
                    <ListItem button divider onClick={()=>{history.push('/ent/sbi/userinfo')}}>
                      <ListItemText primary="Worker Compensation" style={{textAlign:'left',color:'#041c3d'}}/>
                        <ListItemIcon>
                          <div
                            edge="end"
                            disableRipple
                          />
                        </ListItemIcon>
                    </ListItem> 
                    <ListItem button divider onClick={()=>{history.push('/ent/sbi/userinfo')}}>
                      <ListItemText primary="Commercial Auto" style={{textAlign:'left',color:'#041c3d'}}/>
                        <ListItemIcon>
                          <div
                            edge="end"
                            disableRipple
                          />
                        </ListItemIcon>
                    </ListItem> 
                  </List>
                  </Paper> */}
                {/* </Grid> */}
                {/* <Grid justify="center" alignContent="center" alignItems="center" item style={{padding:'20%'}}> */}
                    
                    <br/>
                {/* </Grid> */}
            {/* </Grid>
          </Grid> */}
          </Container>
         </Grid> 
      <br/>
      <br/>
      </div>
    );
  }
}

export default SbiHome;