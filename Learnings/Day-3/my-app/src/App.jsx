import { useState } from "react";
export default function App(args){
  console.log(args.Name)
  const [name,setName]=useState("")
  function eventHandling(event){
    event.preventDefault();
    console.log(event.target);
  }
  function eventHandling2(){
    console.log("Clicked")
  }
  return(
    <>
      <form onSubmit={eventHandling}>
        <label htmlFor="name">Enter your name:</label>
        <input type="text" id="name" onChange={(e)=>{setName(e.target.value);console.log(name)}}/>
        <button onClick={eventHandling2}>
          Click !
        </button>
      </form>
    </>
  );
}