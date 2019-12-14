export default (state='', action)=>{

    switch(action.type){
        case "SETSBIBUSINESS": return action.payload
        default:return state
    }
}