import { useContext } from "react";
import {userNameContext} from "../App.jsx"
const Component3=()=>{
    const name=useContext(userNameContext)
    return (
      <>
      <div>Component3</div>
      <h1>{name.name}</h1>
      <h1>{name.age}</h1>
      <h1>{name.phone}</h1>
      <button onClick={()=>name.setCounter((prev)=>prev+1)}>click</button>
      </>  
    );
}

export default Component3