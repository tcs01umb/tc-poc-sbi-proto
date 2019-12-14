import React from 'react';
import ReactDOM from "react-dom";
import Grid from '@material-ui/core/Grid';
import {Button,} from '@material-ui/core';
import history from '../../utils/history';
import { Widget,addResponseMessage, dropMessages, renderCustomComponent} from 'react-chat-widget';
import { Card, CardContent, CardHeader,Avatar } from "@material-ui/core";
import "../ChatStyle/chatstyle.css"
import ParallelCard from './ParallelCard';

class ButtonSelection extends React.Component {

  render() {
  return <Button  size="small" color="primary" onClick={(e)=>{ dropMessages()   
  history.push(this.props.navigate)}} style={{marginTop:'2px',marginRight:'2px',marginLeft:'2px',backgroundColor:'#041c3d',color:'white',height:'25px',width:'auto',font:'5px'}}>{this.props.text}</Button>
  }
}
// const buttons =[
//   {
//     label: '',
//     value: 'aaaa'
//   }
// ]
const products =[
  {
    topic:'Additional Insurance',
    btndisp:'Additional',
    image:"https://content.usaa.com/mcontent/static_assets/Media/pc_InsMain_additional_insurance.jpg?cacheid=3855121879_p",
    color:null,
    navigate:'/ent/sbi',
    links: [
        {
          label:"Small Business",
          target:"/ent/sbi",
        },
        {
          label:"Travel",
          target:"/ent/sbi",
        },
        {
          label:"Mobile Phone",
          target:"/ent/sbi",
        },
        {
          label:"Special Events",
          target:"/ent/sbi",
        }
    ]
  },
  {
      topic:'Auto Insurance',
      btndisp:'Auto',
      image:"https://content.usaa.com/mcontent/static_assets/Media/pc_InsMain_autoAndRecVehicles.jpg?cacheid=3035219294_p",
      color:null,
      navigate:'/pc/auto',
      links: [
        {
          label:"Auto",
          target:"/pc/auto",
        },
        {
          label:"Motorcycle",
          target:"/pc/auto",
        },
        {
          label:"Boat",
          target:"/pc/auto",
        },
        {
          label:"Classic Car",
          target:"/pc/auto",
        }
    ]
  },
  {
    topic:'Home & Property Insurance',
    btndisp:'Home',
    image:"https://content.usaa.com/mcontent/static_assets/Media/pc_InsMain_homeAndProperty.jpg?cacheid=559429108_p",
    color:null,
    navigate:'/',
    links: [
      {
        label:"Home",
        target:"/",
      },
      {
        label:"Renters",
        target:"/",
      },
      {
        label:"Fire",
        target:"/",
      },
      {
        label:"Umbrella",
        target:"/",
      }
  ]
  },
  {
    topic:'Life & Health Insurance',
    btndisp:'Umbrella',
    image:"https://content.usaa.com/mcontent/static_assets/Media/pc_InsMain_lifeAndHealth.jpg?cacheid=3380513761_p",
    color:null,
    navigate:'/',
    links: [
      {
        label:"Life",
        target:"/",
      },
      {
        label:"Dental",
        target:"/",
      },
      {
        label:"Medicare",
        target:"/",
      },
      {
        label:"Vision",
        target:"/",
      }
  ]
  }
    ]
class InsHomePage extends React.Component {
  constructor(props) {
    super(props)    
    this.state = { 
      showChat:false,
      chatContext:null
  };
  }
  componentDidMount(){
    setTimeout(() => {
         this.setState({showChat: true,})   
     }, 5000)
    //  setQuickButtons(buttons);
    products.forEach(product=> {renderCustomComponent(ButtonSelection,{text:product.btndisp,navigate:product.navigate} )})
    }
 handleQuickButtonClicked = (value) => {
   console.log(value)
 }
 handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    if(newMessage && (newMessage.toUpperCase().includes("AUT")))
    {
        addResponseMessage("Sure i will help you take an Auto Insurance Quote...");
        setTimeout(() => {
        ReactDOM.findDOMNode(this).querySelector('.rcw-widget-container .rcw-launcher .rcw-close-launcher').click() 
        dropMessages()
        history.push('/pc/auto')
      } , 1500)

    }
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
        <Grid container spacing={1} >
          <Grid item  direction="column" alignContent="flex-start">
            <p>Good Morning,<br/>

              <b>Major Jenny!</b>          
              
              </p>
              <p >Explore our products and services. We offer better products for competitive premium.</p>
              <br/>
              <br/>
          </Grid>
        </Grid>
        { this.state.showChat?  <Widget
          handleNewUserMessage={this.handleNewUserMessage}          
          showCloseButton={true}
          fullScreenMode={false}
          badge={0}
          autofocus={true}
          title="Ask TARS"
          subtitle="Hey Jenny! I am Tars Your bot for today! Any help needed with our products?"
          handleQuickButtonClicked={this.handleQuickButtonClicked}
        />:""}
        {products.map(product=>{
          return(<ParallelCard product={product}/>)
        })}          
      <br/>
      <br/>
      </div>
    );
  }
}

export default InsHomePage;