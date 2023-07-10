import React from "react";
import { AiOutlineMenu ,AiFillCloseCircle} from "react-icons/ai";
import { RiAccountCircleFill} from "react-icons/ri";
import { RxCross1} from "react-icons/rx";

import "./Navbottom.css";

const Navbottom=()=>{
  
window.onload=function(){
    const slideButton = document.getElementById("slideButton");
const slideContainer = document.getElementById("slideContainer");

slideButton.addEventListener("click", function() {
  slideContainer.classList.add("slide-in");
});
  }
  function callfunc(){
    const slideContainer = document.getElementById("slideContainer");
    slideContainer.classList.remove("slide-in");
  }
return (
    <div className="startnavbootom">
        <div className="faltudiv">

        </div>

    
    <div className="firdiv">
        <ul className="leftul">
            <li id="slideButton">
                <AiOutlineMenu className="navbicon" />
                All
          <div id="slideContainer" style={{overflowY:"scroll"}}>
            <div className="heydiv">
             <RiAccountCircleFill size={30} style={{marginLeft:"10px"}}/>   Hello, Akash  <button onClick={callfunc} className="logoforclosing"><RxCross1 size={30} style={{paddingBottom:"5px"}} /></button>
            </div>
            <ul>
                <li>
                    Trending
                </li>
                <li>
                    Best Sellers
                </li>
                <li>
                    New Releases
                </li>
                <li>
                   Movies and Shakers
                </li>
            </ul>
            <hr />

            <h4>
                Digital Content And Devices
            </h4>
            <ul>
                <li>
                    Amazon miniTV-FREE entertainment
                </li>
                <li>
                   Echo & ALexa
                </li>
                <li>
                    Fire Tv
                </li>
                <li>
                 Kindle E-readers
                </li>
            </ul>
            <hr />

            <h4>
                Shop By Category
            </h4>
            <ul>
                <li>
                    Mobiles,Computers
                </li>
            </ul>
            <ul>
                <li>
                    Trending
                </li>
                <li>
                    Best Sellers
                </li>
                <li>
                    New Releases
                </li>
                <li>
                   Movies and Shakers
                </li>
            </ul>
            <hr />

<h4>
   Prograns & Features
</h4>
<ul>
    <li>
     Gift Cards & Mobile
    </li>
    <li>
        Amazon Launchpad
    </li>
    <li>
       Flight Tickets
    </li>
    <li>
     Clearance store
    </li>
</ul>
<hr />

<h4>
   Helps & Settings
</h4>
<ul>
    <li>
  Your Account
    </li>
    <li>
    Customer Service
    </li>
    <li>
       Sign out
    </li>
</ul>
            
          </div>

            </li>
            <li>
                Today's Deal
            </li>
            <li>
                Customer Service
            </li>
            <li>
                Registry
            </li>
            <li>
                Prime
            </li>
            <li>
                Amazon Pay
            </li>
            <li>
                Cards
            </li>
            <li>
                Sell
            </li>
        </ul>
        <ul className="rightul">
            <li>
                Shop deals in Electronic
            </li>
        </ul>
    
        </div>
   
        </div>
)
}
export default Navbottom;