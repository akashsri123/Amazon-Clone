import React from "react";
import {BsGithub ,BsLinkedin,BsInstagram,BsTwitter,BsFacebook } from 'react-icons/bs';
import "./Footer.css"
const Footer=()=>{
return (
    <div > 
       <div className="hdiv" onClick={() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }}>
        <h1 >
            Back to top
        </h1>
    </div>



    <div className="fdivup">

    
    <div className="footdiv">
        <div className="row list1">
            <div className="col-md-3 listdiv">
                <h4>
                Get to Know with Amazon
                </h4>
                <ul>
                    <li>
                        <a href=""> Careers</a>
                    </li>
                    <li>
                        <a href="">Blog</a>
                    </li>
                    <li>
                        <a href="">About Amazon</a>
                    </li>
                    <li>
                        <a href="">Amazon Device</a>
                    </li>
                    <li>
                        <a href="">Amazon Science</a>
                    </li>
                </ul>

            </div>
            <div className="col-md-3  listdiv">
                <h4>
                Make Money with Us
                </h4>
                <ul>
                    <li>
                        <a href=""> Sell products on Amazon</a>
                    </li>
                    <li>
                        <a href="">Sell on Amazon Business</a>
                    </li>
                    <li>
                        <a href="">Sell apps on Amazon</a>
                    </li>
                    <li>
                        <a href="">Become an Affiliate</a>
                    </li>
                    <li>
                        <a href="">Advertise Your Products</a>
                    </li>
                    <li>
                        <a href="">Self-Publish with Us</a>
                    </li>
                    <li>
                        <a href="">Host an Amazon Hub</a>
                    </li>
                    <li>
                        <a href="">See More Make Money with Us</a>
                    </li>
                </ul>

            </div>
            <div className="col-md-3 listdiv">
                <h4>
                Amazon Payment Products
                </h4>
                <ul>
                    <li>
                        <a href=""> Amazon Business Card</a>
                    </li>
                    <li>
                        <a href="">Shop with Points</a>
                    </li>
                    <li>
                        <a href="">Reload Your Balance</a>
                    </li>
                    <li>
                        <a href="">Amazon Currency Converter</a>
                    </li>
                </ul>

            </div>
            <div className="col-md-3  listdiv">
                <h4>
                Let Us Help You
                </h4>
                <ul>
                    <li>
                        <a href=""> Amazon and COVID-19</a>
                    </li>
                    <li>
                        <a href="">Your Account</a>
                    </li>
                    <li>
                        <a href="">Your Orders</a>
                    </li>
                    <li>
                        <a href="">Shipping Rates & Policies</a>
                    </li>
                    <li>
                        <a href="">Returns & Replacements</a>
                    </li>
                    <li>
                        <a href="">Manage Your Content and Devices</a>
                    </li>
                    <li>
                        <a href="">Amazon Assistant Help</a>
                    </li>
                </ul>

            </div>

        </div>
        <div className="copydiv">
            <h2 className="ffdiv">
            Created by Akash Srivastava
            </h2>
            <p className="ffdiv">
            @Akash All Right Reserve
            </p>
            <ul className="copydivul">
                <li>
                    <a href="https://github.com/akashsri123"><BsGithub className="ficon" size={42}  /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/akash-srivastava-631a7921a/"><BsLinkedin className="ficon"  size={42} /></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/akash_srivastava_/"><BsInstagram className="ficon" size={42}  /></a>
                </li>
                <li>
                    <a href="https://twitter.com/AkashSr77598096?t=6kU38BNvbSMWw-MEhbMggg&s=09"><BsTwitter className="ficon"  size={42} /></a>
                </li>
                <li>
                    <a href="https://www.facebook.com/profile.php?id=100037713789477&mibextid=ZbWKwL"><BsFacebook className="ficon"  size={42} /></a>
                </li>
            </ul>
        </div>
    </div>
    </div>
    </div>

)
}
export default Footer;