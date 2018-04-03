const initialState = {
    reduxStoreValue:0
}

export function manageClick(state =  initialState, action) {
    if(action.type === 'INC_VAL') {
        return state = {reduxStoreValue: state.reduxStoreValue+=1};
    }
    if(action.type === 'DEC_VAL') {
        return state = {reduxStoreValue: state.reduxStoreValue-=1};
    }

    return state
}