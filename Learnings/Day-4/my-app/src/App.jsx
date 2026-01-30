import { useEffect, useState } from "react";
import Card from "./Card.jsx"
export default function App() {

  // const cards=[
  //   {name:"Sony speaker",price:10000,description:"Good speaker"},
  //   {name:"Sony headphones",price:25000,description:"Good Headphones"},
  //   {name:"Sony Phone",price:80000,description:"Good Phone"},
  // ]

  // return(
  // <>
  //   <div id="Container">

  //   {cards.map((item)=>
  //     <Card key={item.name} details={item}/>
  //   )}
  //   </div>
  // </>
  // );
  const [number,setNumber]=useState(0)
  useEffect(()=>{
    console.log("Mounted")
  },[])

  useEffect(()=>{
    console.log("updated and re mounted")
    return ()=>console.log("Unmounting")
  },[number])
  return(
    <>
      {console.log("Rendering")}
      <button onClick={()=>setNumber((number)=>number+1)}>click</button>
    </>
  );
}
