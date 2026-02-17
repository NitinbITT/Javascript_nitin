import { useDispatch, useSelector } from "react-redux";
import counterSlice, { decrement, increment } from "./Slices/CounterSlice"
import type { RootState, AppDispatch } from "./Store"
const App:React.FC=()=>{
  const count=useSelector((state:RootState)=>state.counter.count)
  const dispatch=useDispatch();
  return(
    <>
    <div>{count}</div>
    <button onClick={()=>dispatch(increment())}>Increment</button>
    <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </>
  );
}

export default App;
