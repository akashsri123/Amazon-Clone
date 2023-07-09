import React from "react";
import { CCard,CCardImage,CCardTitle,CCardText,CButton,CCardBody,CCardSubtitle } from '@coreui/react';
import "./Thirdcard.css";
import { AiFillStar } from 'react-icons/ai';
const ThirdCarddemo=(props)=>{
  const solut = () => {
   
    return <div className="thirdicon">{[...Array(5)].map(() => {
      return <span >{<AiFillStar color="#FFD700"  size={30} />}</span>
    })}</div>
  }
return (
    <CCard style={{borderRadius:"0"}} >
      <CCardTitle>{props.title}</CCardTitle>
      <CCardSubtitle >{props.price}</CCardSubtitle>
      <CCardText >
      {solut(props.star)}
    </CCardText>
  <CCardImage orientation="top" src={props.src} />
<div className="tbutton">
    <CButton href="#">{props.button}</CButton>
    </div>
</CCard>
)
}
export default ThirdCarddemo;