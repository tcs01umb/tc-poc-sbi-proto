export default (state={coverage: "General Liability", policyDate: "12/29/2019"}, action)=>{

    switch(action.type){
        case "SETSBICOVERAGE": return action.payload
        default:return state
    }
}