import { INCREMENT, DECREMENT } from "./Action-types";

const INITIAL_COUNTER_STATE={
    count:0
}

const INITIAL_VALUE_STATE={
    value:0
}

const count_reducer=(state=INITIAL_COUNTER_STATE,action:any)=>{
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                count:state.count+1
            }
        case DECREMENT:
            return{
                ...state,
                count:state.count-1
            }
        default: return state;

    }
}

const value_reducer=(state=INITIAL_VALUE_STATE,action:any)=>{
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                value:state.value+1
            }
        case DECREMENT:
            return{
                ...state,
                value:state.value-1
            }
        default: return state;

    }
}

export  {count_reducer,value_reducer}