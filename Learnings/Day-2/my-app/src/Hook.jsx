import { use } from "react";
import { useState, useEffect } from "react";
export default function Hook(){
    const [count,setCounter]=useState(0)
      useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 2000);

    return () => {
      clearInterval(interval);
      console.log("Interval cleared");
    };
  }, []); 
    useEffect(()=>{
        console.log("Render once")
    },[])

    useEffect(()=>{
        console.log("State changed")
    },[count])
 return(
    <>
    {console.log("Rendering")}
        <button onClick={()=>setCounter((prev)=>prev-1)}>decrease</button>
        <div id="counter">{count}</div>
        <button onClick={()=>setCounter((prev)=>prev+1)}>increase</button>
    </>
 );   
}