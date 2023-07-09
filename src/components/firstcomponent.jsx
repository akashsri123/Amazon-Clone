import React from "react";
import "./firstcomponent.css";
import { CCard,CCardTitle,CCardBody,CCardImage,CCardLink, CCardSubtitle, CButton } from '@coreui/react'
const firscomponent=()=>{
    return (
        <div className="finaldivv"> 

        <div className="row fcompdiv">
            <div className="col-lg-3 col-md-6 firstcompdiv">
            <CCard style={{borderRadius:"0"}}>
  <CCardBody>
    <CCardTitle>Gaming accessories</CCardTitle>
    
   <CCardImage src="https://amz-clone-react-app-0030.web.app/static/media/r1p1.3609e8e634f840d21bc4.jpg" />
   <CCardSubtitle >Gaming PC</CCardSubtitle>
   <CCardImage src="https://amz-clone-react-app-0030.web.app/static/media/r1p12.21a2c998aaae5e530a31.jpg"/>
   <CCardSubtitle >Gaming Keybord</CCardSubtitle>
    <div className="linkdivv">

    
    <CCardLink style={{textDecoration:"none"}} href="#">Shop Now</CCardLink>
    </div>
  </CCardBody>
</CCard>
    </div>


            <div className="col-lg-3 col-md-6 samediv">
            <CCard style={{borderRadius:"0"}} >
  <CCardBody>
    <CCardTitle>Shop Laptops & Tablets</CCardTitle>
    
   <CCardImage src="https://amz-clone-react-app-0030.web.app/static/media/rip2.6d93ceff9ecb42ce84c0.jpg" />
 
    <CCardLink style={{textDecoration:"none"}} href="#">Shop Now</CCardLink>
  
  </CCardBody>
</CCard>

            </div>


            <div className="col-lg-3 col-md-6 samediv">
            <CCard  style={{borderRadius:"0"}}>
  <CCardBody>
    <CCardTitle>Dressess</CCardTitle>
    
   <CCardImage src="https://amz-clone-react-app-0030.web.app/static/media/r1p3.dfa64d890047a2699351.jpg" />
 
    <CCardLink style={{textDecoration:"none"}} href="#">Shop Now</CCardLink>
  
  </CCardBody>
</CCard>
            </div>


            <div className="col-lg-3 col-md-6 lastdivv">
            <CCard style={{borderRadius:"0"}}>
  <CCardBody>
    <CCardTitle>Sign in for the best experience
</CCardTitle>

<div className="buttondiv">
    <CButton href="https://amz-clone-react-app-0030.web.app/login" >Sign in Securely</CButton>
    </div>
    <div className="imgdivv">

    
   <CCardImage src="https://amz-clone-react-app-0030.web.app/static/media/r1p4.f2d956acbddc6e7a7955.jpg" />
 
  
  </div>
  </CCardBody>
</CCard >

            </div>
            

        </div>

        <div className="row scompdiv">
            <div className="col-lg-6 videodiv">
            <div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/sjOTjbUo5OI?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=179&vq=hd1080" title="YouTube video" allowfullscreen></iframe>
</div>

            </div>

            <div className="col-lg-6 nextdivv">
                <div className="row ">
                    <div className="col-md-6 samediv">
                    <CCard style={{borderRadius:"0"}}>
  <CCardBody>
    <CCardTitle>Up to 70% off | Clearance store</CCardTitle>
    
   <CCardImage src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg" />
 
    <CCardLink style={{textDecoration:"none"}} href="#">Shop Now</CCardLink>
  
  </CCardBody>
</CCard>

                    </div> 
                    <div className="col-md-6 samediv">
                    <CCard style={{borderRadius:"0"}}>
  <CCardBody>
    <CCardTitle>Beauty picks</CCardTitle>
    
   <CCardImage src="https://amz-clone-react-app-0030.web.app/static/media/r2p2.2d1d73188dc4ebfccc4a.jpg " />
    <CCardLink style={{textDecoration:"none"}} href="#">Shop Now</CCardLink>
  
  </CCardBody>
</CCard>
                    </div>

                </div>

            </div>

        </div>


        </div>
    )

}
export default firscomponent;

