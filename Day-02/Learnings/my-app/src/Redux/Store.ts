import {configureStore,combineReducers} from '@reduxjs/toolkit'
import {count_reducer,value_reducer} from "./reducers.ts"
import { increment } from './actions.ts'

const rootReducer=combineReducers({
    counter:count_reducer,
    value:value_reducer
})

const store=configureStore({reducer:rootReducer})

console.log(store)
const unsubscribe=store.subscribe(()=>{
    console.log("Updated State");
    console.log(store.getState())
})

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())

unsubscribe()