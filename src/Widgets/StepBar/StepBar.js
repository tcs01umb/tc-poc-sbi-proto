import React from 'react';
import history from '../../utils/history'
import ReactDOM from "react-dom";
import { Widget,addResponseMessage } from 'react-chat-widget';
import { AppBar,Tabs,Tab,Typography} from "@material-ui/core";
import SwipeableViews from 'react-swipeable-views';
import Advanced from "../Advanced/Advanced";
import ContactInfo from "../ContactInfo/contact-info-page";
import SBIQuoteResultsPage from "../SBIQuotePage/SBIQuoteResults";
import BusinessInfo from "../BusinessInfo/BusinessInfo";
import { Progress } from 'semantic-ui-react';
import SbiPaymentPage from "../SbiPayment/SbiPaymentPage";
import SbiConfirmationPage from "../SbiConfirm/SbiConfirmationPage";

const styles = {
    tabs: {borderRadius: '15px 75px', backgroundColor: '#041c3d', color: 'white', outline : 'none'}
}

class Swipe extends React.Component {

    render() {
        switch(this.props.val)
        {
            case 1: return <BusinessInfo incrementIndexValue={this.props.incrementIndexValue} />
            case 2: return <ContactInfo incrementIndexValue={this.props.incrementIndexValue} decrementIndexValue={this.props.decrementIndexValue}/>
            case 3: return <Advanced  incrementIndexValue={this.props.incrementIndexValue} decrementIndexValue={this.props.decrementIndexValue}/>
            case 4: return <SBIQuoteResultsPage incrementIndexValue={this.props.incrementIndexValue} decrementIndexValue={this.props.decrementIndexValue}/>
            case 5: return <SbiPaymentPage incrementIndexValue={this.props.incrementIndexValue} decrementIndexValue={this.props.decrementIndexValue}/>
            case 6: return <SbiConfirmationPage />
            default: return  <Typography component="div">{this.props.val}</Typography>
        }
    }
}

class StepBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showChat:false,
            chatContext:null,
            val:1,
            progressBarPercentage:0
        };
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({showChat: true,})
        }, 5000)
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
    handleChangeIndex = index => {
        this.setState({val:index})
    }

    incrementIndexValue = () => {
        if(this.state.val){this.setState({val : this.state.val+1,
            progressBarPercentage : this.state.progressBarPercentage+25
        })}
    }

    decrementIndexValue = () => {
        if(this.state.val){this.setState({val : this.state.val-1,
            progressBarPercentage : this.state.progressBarPercentage-25
        })}
    }

    render() {
        return (
            <div>
                { this.state.showChat?  <Widget
                    handleNewUserMessage={this.handleNewUserMessage}
                    showCloseButton={true}
                    fullScreenMode={false}
                    badge={0}
                    autofocus={true}
                    title="Ask TARS"
                    subtitle="Hey Jenny! I am Tars Your bot for today! Any help needed with small business insurance?"
                />:""}
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.val-1}
                        indicatorColor="primary"
                        variant="fullWidth"
                        style={{margin:'0px'}}
                    >
                        <Tab label="Business Summary" id={0} style={styles.tabs}/>
                        <Tab label="Contact Information" id={1} style={styles.tabs}/>
                        <Tab label="Business Details" id={2} style={styles.tabs}/>
                        <Tab label="Quote Results" id={3}  style={styles.tabs}/>
                        <Tab label="Payment" id={4}  style={styles.tabs}/>
                        <Tab label="Confirmation" id={5}  style={styles.tabs}/>
                    </Tabs>
                </AppBar>
                    <Progress percent={this.state.progressBarPercentage} progress style={{background:'#041C3D',borderRadius:"10px"}}/>
                <SwipeableViews
                    index={this.state.val}
                    enableMouseEvents="true"
                >
                    {console.log("inside swipeable view" + this.state.val)}
                    <Swipe val={this.state.val} index={1} incrementIndexValue={this.incrementIndexValue} />
                    <Swipe val={this.state.val} index={2} incrementIndexValue={this.incrementIndexValue}  decrementIndexValue={this.decrementIndexValue}/>
                    <Swipe val={this.state.val} index={3} incrementIndexValue={this.incrementIndexValue}  decrementIndexValue={this.decrementIndexValue} />
                    <Swipe val={this.state.val} index={4} incrementIndexValue={this.incrementIndexValue} decrementIndexValue={this.decrementIndexValue}/>
                    <Swipe val={this.state.val} index={5} incrementIndexValue={this.incrementIndexValue} decrementIndexValue={this.decrementIndexValue}/>
                    <Swipe val={this.state.val} index={6} />
                </SwipeableViews>

                <br/>
                <br/>
            </div>
        );
    }
}

export default StepBar;