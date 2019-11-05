const defaultState = {
    list:  [],
    list1: [],
    list2: [],
    list3: [],
};
export default (state = defaultState, action) => {
    console.log(action);
    if (action.type === 'inp_home_data') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data.list;
        newState.list1 = action.data.topicList;
        newState.list2 = action.data.sineList;
        newState.list3 = action.data.scanList;
        return newState;
    }
    return state;
}