export const adddriveraction=(driver)=>async dispatch =>{
    dispatch({
        type:"DRIVERUPDATE",
        payload:driver
    })
}

export const addvehicleaction=(vehicle)=> async dispatch => {   
    dispatch({
        type:"VEHICLEUPDATE",
       payload:vehicle
    })
}

export const addpropertyaction=(property)=> async dispatch => {   
    dispatch({
        type:"PROPERTYUPDATE",
       payload:property
    })
}

export const updatepremiumaction=(premium) => async dispatch => {
    console.log(premium)
    dispatch({
        type:"UPDATEPREMIUM",
        payload:premium
    })
}

export const deletedriveraction=(driverid)=>async dispatch =>{
    dispatch({
        type:"DELETEDRIVER",
        payload:driverid
    })
}

export const deletevehicleaction=(vehicleid)=>async dispatch =>{
    dispatch({
        type:"DELETEVEHICLE",
        payload:vehicleid
    })
}

export const deletepropertyaction=(propertyid)=>async dispatch =>{
    dispatch({
        type:"DELETEPROPERTY",
        payload:propertyid
    })
}

export const setPageNameAction=(pageName) => async dispatch => {
    console.log("setPageNameAction"+pageName)
    dispatch({
        type:"SETPAGENAME",
        payload:pageName
    })
}

export const setSBICoverageName =(sbiCoverage) => async dispatch => {
    dispatch({
        type:"SETSBICOVERAGE",
        payload:sbiCoverage
    })
}

export const setZIPCodeInfo =(zipCodeInfo) => async dispatch => {
    console.log("setZIPCodeInfo",zipCodeInfo)
    dispatch({
        type:"SETZIPCODEINFO",
        payload:zipCodeInfo
    })
}

export const setSelectedBusinessType =(selectedBusinessType) => async dispatch => {
    console.log("setSelectedBusinessType",selectedBusinessType)
    dispatch({
        type:"SETSBIBUSINESS",
        payload:selectedBusinessType
    })
}

export const setAddressInfoType =(addressInfo) => async dispatch => {
    console.log("setSelectedBusinessType",addressInfo)
    dispatch({
        type:"SETADDRESS",
        payload:addressInfo
    })
}

export const setPolicyAgg=(aggregate) => async dispatch => {
    dispatch({
        type:"ADDAGGREGATE",
        payload:aggregate
    })
}
export const setEmptyObject=(quote) => async dispatch => {
    console.log("inside setEmptyObject quote"+quote)
    dispatch({
        type:"PUSHEMPTYOBJECT",
        payload:quote
    })
}
export const setQuoteObject=(quote) => async dispatch => {
    dispatch({
        type:"PUSHQUOTEOBJECT",
        payload:quote
    })
}

export const updateCoverages=(quote) => async dispatch => {
    dispatch({
        type:"UPDATECOVERAGES",
        payload:quote
    })
}

export const deleteDriverFromQuote=(quote) => async dispatch => {
    dispatch({
        type:"DELETEDRIVERSTATE",
        payload:quote
    })
}
export const deleteVehicleFromQuote=(quote) => async dispatch => {
    dispatch({
        type:"DELETEVEHICLESTATE",
        payload:quote
    })
}
export const updatePremiumAndCoveragesAction = (userEnteredPremium) => async dispatch => {
    console.log("Vignesh About to Dispatch"+userEnteredPremium);
    dispatch({
        type:"UPDATEPREMIUMANDCOVERAGES",
        userEnteredPremium 
    })
} 