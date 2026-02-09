import React from 'react'
export function Whatsapp(){
    return(
        <div>Whatsapp</div>
    )   
}

export function Sms(){
    return(
        <div>Sms</div>
    )   

}
export default function Contact() {
  return (
    <>
        <div>Contact</div>
        <Link to='whatsapp'>whatsapp</Link>
        <Link to='sms'>sms</Link>
    </>
  )
}
