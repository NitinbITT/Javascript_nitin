import  Component1  from "./Components/Component1.jsx";
import  Component2  from "./Components/Component2.jsx";
import { useState, useContext, createContext, useRef } from "react";
const userNameContext=createContext();
const App=()=>{
  const count=useRef(0)
  const [name,setName]=useState("Alex")
  const [age,setAge]=useState(10)
  const [phone,setPhone]=useState("9876543210")
  const [counter,setCounter]=useState(0)
  count.current+=1
  return(
    <>
    <userNameContext.Provider value={{name,age,phone,setCounter}}>
      Page rendered {count.current} times
      <Component2/>
    </userNameContext.Provider>
    </>
  );
}

export default App
export {userNameContext}