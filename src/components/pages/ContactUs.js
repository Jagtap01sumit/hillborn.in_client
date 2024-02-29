import React from 'react'
import "../css/aboutus.css"
import "../css/contact.css"
import Navbar from './Navbar'
import { MdOutlineMailOutline ,MdSmartphone,MdOutlineHomeWork} from 'react-icons/md';

const ContactUs = () => {
  return (
   <>
   <Navbar/>
   <div className="abt-one">
    <div className="abt-two">
      <h1 className='abt-h1 ct-h1'>Welcome to customer support</h1>
    </div>
    <i class="fa-solid fa-handshake-angle abt-icon1"></i>
    </div>

    <div className="ct-one">
        <div className="ct-two">
            <div className="ct-s-1" data-aos="fade-up">
                <div className="ct-s-child">
                    <div className="ct-s-child1">
                    {/* <i class="bi bi-envelope ct-icon1"></i> */}
                    <MdOutlineMailOutline className='icons'></MdOutlineMailOutline>
                    {/* <p className="ct-p-1">EMAIL</p> */}
                    </div>
                    <div className="ct-s-child2">
                    <p className="ct-p-2">&#183; hillborntechnologies@gmail.com</p>
                    <p className="ct-p-2">&#183;  info@hillborn.tech</p>
                    </div>
                </div>
            </div>
            <div className="ct-s-1" data-aos="fade-up">
            <div className="ct-s-child">
                    <div className="ct-s-child1">
                    {/* <i class="bi bi-headset ct-icon1"></i> */}
                    <MdSmartphone className='icons'></MdSmartphone>
                    {/* <p className="ct-p-1">PHONE IN</p> */}
                    </div>
                    <div className="ct-s-child2">
                    <p className="ct-p-2">&#183;9353690229</p>
                    <p className="ct-p-2">&#183; 7676002844</p>
                    
                    </div>
                </div>
            </div>
            <div className="ct-s-1" data-aos="fade-up">
            <div className="ct-s-child">
                    <div className="ct-s-child1">
                    {/* <i class="bi bi-person-lines-fill ct-icon1"></i> */}
                    <MdOutlineHomeWork className='icons'></MdOutlineHomeWork>
                    {/* <p className="ct-p-1">ADDRESS</p> */}
                    </div>
                    <div className="ct-s-child2">
                    <p className="ct-p-2"> 1955, H V HALL RR NAGARA BENGALURU Bangalore KA 560098 IN</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

   </>
  )
}

export default ContactUs
