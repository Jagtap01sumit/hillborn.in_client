import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "../css/home.css"
import Appcontext from '../context/Appcontext'


const Overlaynav = () => {
    const mainstate=useContext(Appcontext)
    function closer(){
        mainstate.setOverlay(false)
    }
  return (
   <>
   
   {
    mainstate.overlay===true? <div className="overlay-nav">
    <ul className="overlay-list">
        <li className="overlay-list-ele"><p className='overlay-para' onClick={()=>{
            closer()
        }}> <Link to="/" style={{"color":"white"}}>Home</Link></p></li>
        <li className="overlay-list-ele"><p className='overlay-para' onClick={()=>{
            closer()
        }}><Link to="/aboutus" style={{"color":"white"}}>About Us</Link></p></li>
        <li className="overlay-list-ele"><p className='overlay-para' onClick={()=>{
            closer()
        }}>Services</p></li>
        <li className="overlay-list-ele"><p className='overlay-para' onClick={()=>{
            closer()
        }}><Link to="/contact" style={{"color":"white"}}>Contact Us</Link></p></li>
        <li className="overlay-list-ele"><p className='overlay-para' onClick={()=>{
            closer()
        }}><Link to="/login" style={{"color":"white"}}>Login</Link></p></li>
        <li className="overlay-list-ele"><p className='overlay-para' onClick={()=>{
            closer()
        }}><Link to="/register" style={{"color":"white"}}>Signup</Link></p></li>
    </ul>
</div>
:undefined
   }

   </>
  )
}

export default Overlaynav
