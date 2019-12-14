import { combineReducers } from 'redux'
import driverreducer from './driverreducer';
import vehiclereducer from './vehiclereducer';
import premiumreducer from './premiumreducer';
import propertyreducer from './propertyreducer'
import pagenamereducer from './pagenamereducer'
import policyaggreducer from './policyaggreducer'
import quotereducer from './quotereducer'
import sbicoveragereducer from './SBICoverageReducer';
import sbibusinessTypeReducer from './SBIBusinessTypeReducer';
import zipcodeinforeducer from "./zipcodeinforeducer";
import addressreducer from "./addressreducer";

export default combineReducers({
    "drivers":driverreducer,
    "vehicles": vehiclereducer,
    "premium": premiumreducer,
    "custproperties":propertyreducer,
    "pagename":pagenamereducer,
    "aggregate":policyaggreducer,
    "quote":quotereducer,
    "sbiCoverage":sbicoveragereducer,
    "selectedBusinessType":sbibusinessTypeReducer,
    "zipcodeinfo": zipcodeinforeducer,
    "address": addressreducer
})