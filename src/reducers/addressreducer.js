export default (state={}, action)=>{

    switch(action.type){
        case "SETADDRESS": return action.payload
        default:return state
    }
}