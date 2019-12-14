import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Widgets/Home/Home';
import InsHomePage from './Widgets/InsHomePage/InsHomePage';
import SbiHome from './Widgets/SbiHome/SbiHome'
import SbiPaymentPage from './Widgets/SbiPayment/SbiPaymentPage'
import SbiConfirmationPage from  './Widgets/SbiConfirm/SbiConfirmationPage'
import QH from './Widgets/SbiHome/QH'
import StepBar from './Widgets/StepBar/StepBar'
import * as serviceWorker from './serviceWorker';
import QuoteResultsPage from './Widgets/QuoteResults/QuoteResultsPage'
import {Router,Route, Switch,Redirect} from 'react-router-dom' 
import history from './utils/history'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import AddDriver from './Widgets/AddDriver/AddDriver'
import DriverDetails from './Widgets/Driver/DriverDetails'
import VehicleDetails from './Widgets/Vehicles/VehicleDetails'
import AddVehicle from './Widgets/AddVehicle/AddVehicle'
import AddProperty from './Widgets/AddProperty/AddProperty'
import Header from './Widgets/Header/Header'
import './index.css'
import ConfirmationPage from './Widgets/QuoteResults/ConfirmationPage';
import QuoteHistory from './Widgets/QuoteHistory/QuoteHistory';
import paymentPage from './Widgets/paymentPage/paymentPage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import StepperUtil from "./Widgets/Stepper/StepperUtil";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, enhancer(applyMiddleware(thunk)))


class App extends React.Component{
    render(){
        return(
            <Router history={history}>
                <div>
                    <Header/>
                <Route render={({location}) => (
                    <TransitionGroup>
                    <CSSTransition
                    in={true}
                    appear={false}
                    key={location.key}
                    timeout={500}
                    classNames="slide"
                    >
                    <Switch location = {location} >
                     <Route exact path="/" component={() => (<Redirect to='/insurance/home' />)} />   
                     <Route exact path="/userinfo" component={() => (<Redirect to='/ent/sbi/userinfo' />)} />
                     <Route exact path="/getstarted" component={() => (<Redirect to='/pc/auto/getstarted' />)} />
                     <Route exact path="/quoteresults" component={() => (<Redirect to='/pc/auto/quoteresults' />)} />
                     <Route exact path="/adddriver" component={() => (<Redirect to='/pc/auto/adddriver' />)} />
                     <Route exact path="/driverdetails" component={() => (<Redirect to='/pc/auto/driverdetails' />)} />
                     <Route exact path="/vehicledetails" component={() => (<Redirect to='/pc/auto/vehicledetails' />)} />
                     <Route exact path="/addvehicle" component={() => (<Redirect to='/pc/auto/addvehicle' />)} />
                     <Route exact path='/addproperty' component={() => (<Redirect to='/pc/auto/addproperty' />)}/>
                     <Route exact path='/payment' component={() => (<Redirect to='/pc/auto/payment' />)}/>
                     <Route exact path='/confirm' component={() => (<Redirect to='/pc/auto/confirm' />)}/>
                     <Route exact path="/insurance/home" component={InsHomePage} />
                     <Route exact path="/pc/auto" component={QuoteHistory} />
                     <Route exact path="/pc/auto/getstarted" component={Home} />
                     <Route path="/pc/auto/quoteresults" exact component={QuoteResultsPage} />
                     <Route path="/pc/auto/adddriver" exact component={AddDriver} />
                     <Route path="/pc/auto/driverdetails" exact component={DriverDetails} />
                     <Route path="/pc/auto/vehicledetails" exact component={VehicleDetails} />
                     <Route path="/pc/auto/addvehicle" component={AddVehicle} />
                     <Route path='/pc/auto/addproperty' component={AddProperty}/>
                     <Route exact path='/pc/auto/payment' component={paymentPage}/>
                     <Route path='/pc/auto/confirm' component={ConfirmationPage}/>
                     <Route exact path='/ent/sbi/userinfo' component={StepperUtil}/>
                     <Route exact path='/ent/sbi/home' component={SbiHome}/>
                     <Route exact path='/ent/sbi' component={QH}/>
                     <Route exact path='/ent/sbi/payment' component={SbiPaymentPage}/>
                     <Route exact path='/ent/sbi/confirm' component={SbiConfirmationPage}/>
                     </Switch>
                        </CSSTransition>
                </TransitionGroup> 
        )} />
                </div>
            </Router>
        )
    }
}


ReactDOM.render( 
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
 );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();