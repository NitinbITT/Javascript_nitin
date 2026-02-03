export default function Timeout(){
  console.log("Started")
  setTimeout(() => {
    
    setTimeout(() => {
      console.log("prepared")
    }, 2000);
  }, 5000);
  return(
    <>
    </>
  );
}