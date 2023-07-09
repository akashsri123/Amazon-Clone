import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./Carousel1.css";

const Carousel1=()=>{
return  (
    
       
    <Carousel  showThumbs={false} infiniteLoop={true} autoPlay={true} className="carouseldiv">
    <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/MFD/MFD-July-hero-PC._CB600958410_.jpg" />
        
    </div>
    <div>
        <img  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg" />
 
    </div>
    <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/vendorcentral/supporthub/trainingCourses/learningPaths/5300-Kitchen---Water-bottles--Lunch-box--hero-v2-3000-x-1200-_Under_1._CB601243436_.jpg" />
       
    </div>
    <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/MFD/MFD-July-hero-PCskin._CB600958145_.jpg" />
       
    </div>
    <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/July_23/MFD/Unrec/Luggage/3000._CB601231827_.jpg" />
       
    </div>
    <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/CML/Dashboardcard/Rev/pdpc1._CB601157716_.jpg" />
       
    </div>
</Carousel>
    

    
)
}
export default Carousel1;

