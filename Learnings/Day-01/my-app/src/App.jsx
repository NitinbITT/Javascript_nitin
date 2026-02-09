import {BrowserRouter, Link, Outlet, Routes, Route} from 'react-router-dom'
import Home from "./Home.jsx"
import About from "./Aboutus.jsx"
import Contact,{Whatsapp,Sms} from "./Contact.jsx"

const App=()=> {
  return (
    <>
        <Link to ='/'>Home</Link>
        <Link to ='/aboutus'>About us</Link>
        <Link to ='/contact'>Contact</Link>
        <Outlet/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<About/>}/>
      </Routes>
      
      <Routes>
        <Route path='/contact'>
          <Route element={<Contact/>}/>
          <Route path='whatsapp' element={<Whatsapp/>}/>
          <Route path='sms' element={<Sms/>}/>
        </Route>
      </Routes>
      <div>End of Child block</div>

    </>
  )
}
export default App