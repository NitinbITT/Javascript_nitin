import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"; 
interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

store.subscribe(() => {
  console.log("Current State:", store.getState());
});

store.dispatch(counterSlice.actions.increment());
store.dispatch(counterSlice.actions.increment());
store.dispatch(counterSlice.actions.decrement());
store.dispatch(counterSlice.actions.incrementByAmount(5));

export default store;
