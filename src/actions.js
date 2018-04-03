export function inc(){
    return {
        type: "INC_VAL",
        data: {text:'any_data_can_be_here'}
    };
}

export function dec(){
    return {
        type: "DEC_VAL",
        data: {text:'any_data_can_be_here'}
    }
}