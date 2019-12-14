export default (state={}, action)=>{

    switch(action.type){
        case "SETZIPCODEINFO": return action.payload
        default:return state
    }
}