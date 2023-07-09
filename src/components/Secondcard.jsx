import React from "react";
import { AiFillStar } from 'react-icons/ai';
import { CCard,CCardImage,CCardTitle,CCardText,CButton,CCardBody,CCardSubtitle } from '@coreui/react'
import "./Secondcard.css"
const Secondcard=()=>{
  return (
    <div className="row carddiv1">
      <div className="col-lg-6 carddiv ">
      <CCard className="cardbody" style={{borderRadius:"0"}}>

 
    <CCardTitle>ASUS ZenBook 13 Ultra-Slim Laptop” 16GB, 512GB SSD, NumberPad, Thunderb... ASUS ZenBook 13 Ultra-Slim Laptop, 13.3” Intel Evo Platform i7-1165G7, 16GB, 512GB SSD, NumberPad, Thunderbolt 4, Wi-Fi 6, Windows 11 Pro</CCardTitle>

<CCardSubtitle >Rs.82990</CCardSubtitle>
   
    <CCardText>
    <ul>
      <li>
        <AiFillStar size={30} color="#FFD700"/>
      </li>
      <li>
        <AiFillStar size={30} color="#FFD700"/>
      </li>
      <li>
        <AiFillStar size={30} color="#FFD700"/>
      </li>
      <li>
        <AiFillStar size={30} color="#FFD700"/>
      </li>
      <li>
        <AiFillStar size={30} color="#FFD700"/>
      </li>
    </ul>
   </CCardText>
   <CCardImage src="	https://amz-clone-react-app-0030.web.app/static/media/pro1.adb5334dc735b3ac1f18.jpg " className="image"/>
   <CCardBody  >
   <div className="tbutton">
    <CButton href="#">Add to Cart</CButton>
    </div>
  </CCardBody>
</CCard>
      </div>
      <div className="col-lg-6 carddiv">
      <CCard  className="cardbody" style={{borderRadius:"0"}}>

  
    <CCardTitle>Ant Esports KM540 Gaming Backlit Keyboard and Mouse Combo, LED Wired Gaming Keyboard, Ergonomic & Wrist Rest Keyboard, Programmable Gaming Mouse for PC/Laptop/Mac – Black

</CCardTitle>
<CCardSubtitle >Rs.82990</CCardSubtitle>
<CCardText>
    <ul>
      <li>
        <AiFillStar size={30} color="#FFD700"/>
      </li>
      <li>
        <AiFillStar size={30} color="#FFD700" />
      </li>
      <li>
        <AiFillStar size={30} color="#FFD700" />
      </li>
      <li>
        <AiFillStar size={30} color="#FFD700" />
      </li>
      <li>
        <AiFillStar  size={30} color="#FFD700"/>
      </li>
    </ul>
   </CCardText>
   <CCardImage src="https://amz-clone-react-app-0030.web.app/static/media/pro2.21a2c998aaae5e530a31.jpg" className="image" />
   
   <CCardBody >
   <div className="tbutton">
    <CButton href="#">Add to Cart</CButton>
    </div>
  </CCardBody>
</CCard>
      </div>
    </div>
  )
}
export default Secondcard;