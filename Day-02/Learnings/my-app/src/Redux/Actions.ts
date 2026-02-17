import {INCREMENT,DECREMENT} from "./Action-types.ts"
export const increment=()=>{
    return{
        type:INCREMENT
    }
}

export const decrement=()=>{
    return{
        type:DECREMENT
    }
}
