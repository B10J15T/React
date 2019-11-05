const defaultState={
    flag:false
};
export default (state=defaultState,action)=>{
    /*if(action.type==='infocus'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.flag=true;
        return newState
    }else if(action.type==='inBlur'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.flag=false
        return newState
    }

    console.log(action)
    return state;
*/
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'infocus':
            newState.flag=true;
            return newState
        case 'inBlur':
            newState.flag=false
            return newState
        default:
            return state;

    }
}