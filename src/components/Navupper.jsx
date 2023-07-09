import React from "react";
import "./Navupper.css";
import { useState, useEffect } from "react";
import { AiOutlineShoppingCart,AiOutlineSearch } from 'react-icons/ai';
import { MdArrowDropDown} from 'react-icons/md';
import { CiLocationOn} from 'react-icons/ci';
const Navupper=()=>{
    const [newvar,setVar]=useState(0);
    const [isclickonen,setEN]=useState(false);
    const [isclickonreturn,setreturn]=useState(false);
    useEffect(() => {
        if(newvar===0){
            var x = document.getElementById("myDIV");
            x.style.display="none";
            var x1 = document.getElementById("myDIV1");
            x1.style.display="none";
        }
      }, []);

    
      function callfunc2() {
        var x = document.getElementById("myDIV1");
        if (x.style.display === "none") {
            setEN(true);
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
        
      

      function callforleave(){
      if(isclickonen===true){
   var x = document.getElementById("myDIV1");
              x.style.display = "none";
        }
      }

      function callfunc(){
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
            setreturn(true);
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      function callforleave1(){
        if(isclickonreturn===true){
            var x = document.getElementById("myDIV");
            x.style.display = "none";
        }
      }

   


    return (
        <div className="mainlastdiv">

        <div className="upperdiv">
            <div className="alllogodiv">
                <div className="logodiv forborder">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaUAAAB4CAMAAABl2x3ZAAAAyVBMVEUAAAD+/v7////4nDVQUFD7+/vm5ub09PRFRUXOzs79nzb4+Pg8PDyPj4+FhYUtLS18fHycnJzn5+cODg5KSkq3t7cnJye+vr7f39+JiYnt7e3T09Oqqqr/ozceHh4+Pj5nZ2dzc3M0NDQZGRlqamrIyMjdiy+5ublWVlavr69fX1+ZmZm9dygNDQ3ymDSjo6NTNBJsRBeBURufZCLThS2sbCWSXB87JQ3nkTFjPhXEeyogFAc/Jw0lFwhPMRGWXiAVDgR2ShkxHwpLSKp0AAATMElEQVR4nO1daVvqPBOWCJQdRKAFBMoqmywCHkA9B/3/P+ptS5fMZAEFLO9j7y/nkjTtJHcymcxMcm5uAvwU2rl4slLU/RYjgAzZR2Ih7bcgASR4ICETJNn0W5IAQvSVPUsh0q37LUsAEZo2SSESTfktSwARKJYafssSQIRC3tF4j/d+yxJAiGlgPfwfoG5b4jm/BQkgxTCuacWS31IECBAgQIAAAQIECBAgwH8Z2XAzPajmk4REKvFiWS+0v/iCVF9v5nKdPs/x2wobZU1+GcZTapi7U7VKhJCk1p3mhpfyJN/vJW52hoWv7zjrsWHHqKuHs2eSJtUfdjr6MCYR5b45iCf3fgwS2v9TUe/6/Ifbes5B0+3B5kCL7KtrA+yv6gyqil1WzBzwODbSjxqBMCoJRK9n7g5iJGhFf6TaEhttjQ9EnzAedFubCzu/pUbd/L6qEh905C0y5TQBRn1MNzB0/7zPDLR9/+e7U9H7RprZiyEAiyjeMG4PlKQLbS94q5p0XmD8m6zSEhWqClUW0WQ+x6yaD2FJzEr5O+7jdxFyGEqMU7NfrRDvQ6bM0Qe+SOmK11pFt3/Lu3XND6gtSZMMPEY1A9Gy98uwopgYOH9G6e5TqpxuL6WTBFPkSsARIAz6wArmj0LgBcYfrmexPiWojMRFYZaCSviSmL2YZidhXeOKjSuXmYr9Km9Qhqac3i5V6daq5k/ZKqxs/M5+gkLGHkt5r/Ptl+atnkh1mS4a4KhuIc6nyK6hDdHzBkt0ucnSA/MGomTsRnbZtxONr4RyFZkgpMisAN9kqT5KCgalpjNCZePUs+TR7NQq2yJp5kk5YlUgUW9SV+1fTJZSbCuMkQxf0YnKW0oUTFOY7ndTvAyHZhLZi8QdAkTjzaZpRCoJIV1M0zdZ6oZE1YjCRBdYluK8FkUkYQk5Sy2WdLNIBW+QTSS7dwpylnSF+5mK2aeP/LeT6hNuyhNn0jG1kNn5LZaymuRDhOAFkGFpyp+HEYGRcoilLJck81NeFw0Pdo058uEYRhrvnje2zBJjNW7yVYutKAEejuhwMj2dJf7QFUuGWeoLmoR1lJyluMtSkbJg6OWJWto5KpEnABxfcC6VhyIilH5bQKBRmEeTKSfUQuCVYVDpOyypB8YliUAbFLMk0A6syjmKpZbdmQY/1XRHzz1SdqdiP3uvctYtzhpTAZ0DWcoIe4oUm8IOISE4ZGPsCOVK0j2VpdHBGkh3QZaKQ+HiiWQ7jqXY3iogSWfPU1Ld4erM6g4awNbuIsJ2DxyNUOOJFQhJSjoRro7MCDVNb3YLZ4wX0INHskRNDqyvkJqxmyRhaSBuribyQkhYGlhFJE+JmHZZ0vZ7D9jDxuZx0OmH+3o6gveVQOeGoXEv6R5ZWZXem2QjSJJoemhI0nxkejADWAJ7GcLrcnNueNuUJxV9h6jp8l0c1QJLE2QpKlpozRGkf5WlUMR6HdGArnJWaKJY3GWhbBFvbcZGMRGz5LZXzAm37yq0gV8kgrIsmi2kCNrf1PIYUebjVJ/DPYMxKp3vg/aSPLXEAJacgccfDqMvs2SNcRKHW1h3HSKWeMCmJAo9gpC5SWiXRZiVjyjVrukjwgV2oRbFsxPqoRKY1ESjXDrIvsHGeL2RgmjlsE6Le4roHr3M69Y7oBNoWzLLWkDGVO+qcWb/QQQuJhlLIWfLQqNjv5rETd8ikBl9A7aV6IAlrIaSmXC21ArztqXGfr4ZTsX6OdwoOjtNp50OJAnWnibsP+VAQvx9Fy881Lzow0bRyz3sC6rjWJZIstyo35cKU7wuqIIogpQlXpqeLQxRClRmrPWLBt1kadggep5hlojmljBamyTdmsiepFeYkWggm4BuI3IgUPCASaL7AE7ZJP2qBvyKZy4xLHkrahOtplWBbHKWODPQsY3NyTGkhzd+GO6CQM8hjUfb6WmGJY/eRlTUEUj1IpcnNP9wKQI2lMF8SYFBRAagJpxMUff3EmKJKJ72R8upJpBNxhKyWvdoOywZQ6wNLCTsBooIW4TmEl3WQk5BYBw+CKdnJ0kJkke+bzSr5ccWsLFB2wHG4kMXhaCmuYOGq9vhDEt0/AGocVIRyCZlibvLcowUy53QGmYeupoWzStJ7N+IAUUDdjdwLpEKHb6BVgcJ6fQr4QoDtrWxTrpYNSSpKIy/MwdfKdzhm8BaFfgRnsCSRTQYxIE7cE95IJaIRkcL4QRM8gJZNwdY4jJrq2bLuesKEtObeFGO5Y9lSaOroYEPe0LC0h73rXCHCZQ0j2eJse+AUivAPkXjMpznl2KWwKoJ9rhCH5HMEle4NWwtD/fXHDSOZgk4ETpQB6jAWwdZkgbOKCCWwuIn2yg+hbwByFqEzg/km/ZiK5AlkgRTPXeUbDKWitwazklcjVvq4XiWgDcgDBYmJMNZWJLMJWadh/MSufDwXFb5bCCWoIXQP5klfnqBrZJIRdxYA0+lztHrkk5XbECtAo1qaGIBdoWot0bHsoRDZThUBCwyEsE5IMiWdHa8iCWogxons8SPSpXt4qSgqSk9PbCWcdhgCUug21o0SyQEfSbKV1hqF5p3qimJciRLYUbfwfJ7qNKYqB30o7oDDLEEV7PWiSxB04uqYb83ggtSw9yANs2PZgkYKZClCNRqx7HULuhltSKURMRSGznniYL2mHU4lSPYuBqhZct2JCCW4GqWPZUlwUY447wX/JpKFzWZw1TGElDUkKUkZOIYloZTtSIRRMzSHSIpgtc97FvG/ZOBO8SqbXEjlqayd36dpS4/C5DHUraY5wSVwPclLIHWIpbg3ufwutS0suQkgghZYgJHXZwYloJiJ/HeA0b/ScUefYgluNadzJLA9ceyFOvKxq79/WNZSslYishZancOURQSstRinA5M+gsSO4n7pwNZCtkaEbEEV9qTWRLcLcCwlJYlwbnfPwtLISlLLfWo1Ac+SyiESjgWLrKak7h/dBQGsLsUsQTt959iSeXF8b9kPZyJpUb0qOAinyWcCoU8qfYz4AmGpaHiA0vFY1gqVZlYEbFSDirHW+LnYanJBtUMRAxBjrDEs0zkj7Mo619kyf7QGVhKn8ZSvctwFNKKD6NcZ9g8eld7FpbwZseQpNIdTNNNvX94V4tToUiEcQbesHMJr0u+sHSMxhsxWemjoW3apI72EJ2FJbz4Ey3nnCnqHGQJ5/Ix+akW8LqEp9vwYuvSaXOpgEhSqNYd7xM/B0so0QscITjoxyvIIn9Ui9B+CYfssPXAt/F+niXkk3cO5+zb9JMs6ShqHqffeZAl7GSt8DsLeXMY3wPaLzkhWb81HhILxi5/lCXkQoN+50MsIVe38JBKCbGEuxQGp9yoh89zCWcQQt/H8bHa01lCQVwFEnEgVttBxiGOG7low3HH+MTTcNPd5fvxfpolxAPyzsJ0oMuylIEvRMtKWcpSG9sdUVGS0RMyaLGfDyUDONk6Pms8tH9AwVtkEV2UJbQ+6lCSOylLOLNLctrrgU+Dg+PiSz89l1DrkTbXf5AlaEgT5AZVZSw1sdMBJfNxm75/EluCMHfFvRfSZ5ZU6Qgui5t0bpZKcEFQ0HYT2X8geNdA+i4UUR8MTMudAtt8eGYR5zLjvAenR33WeJqk9cwIpuOe52YpDH+PQsHvJbnQ2MlqlpO9ZymvVUcoDgpPAZIonJV9uEy7C4DPcwm1HjlV8JpMBQLOzRI8RUUqslRoqNJyDEnOUzYeO3SqGVp5oPmA9KHLhs8sRWC7YIfivqHTcc7NUhOtS0ATMYFyalbjzC4GBk8adYdDTpyvi1OIQm6rfNZ4yLkIthnMITt6CF92LqFEiiZ2/1AJpJkjAlKE5N3A3T3yLtCevDo82eSNBZ/nEkquz9O9XcTNp79wbpb6iCV6jKeY2yio4YQ9+nwQb41BtjitPFFivqc6fGYJtpFEqFhxmg0NUn13bpZa6ICJQk0mzvFsz90oPAGPaoScGg04YZJer3agMqSSwX3WePi4n+JaeTlO/JZ4Ilx4v+Q5Z26eeMf2XW0kvqcA13AnDbJc3VuZkIFHc+HzXMLH/AnJNIw6JZ1/iQmpOE06O0vMIqjpJfP2OsG9RM5JhPqB+zW8Cq6boY82X8lMo97Ohu9QCCdOWbQ+s8Qc3CMk+jgoCu+OIo/tC7HE3MFASLw4UEU30Tje+2+wxB4VjHbVKnO7AL0r+SZLdcqDcorGY8LpzjZD1FYnbnN2lnjHqaWZk91vs1Rijvdy7nsAJvq3WNI1LRp3uT4pClg+dIcW+tvR4mdniXOFCxQEj/UHIUtccmnHavig9U7ioOe+wVJd3Y8yh+2TWJLePGLs2/EhOMe6OH8UUHiplPWgMoX7HDK457DkuIaSEWYiAvf36ABN2HP0DZacdBKniadlp0gu9CJEvQ9T2oFQd51cIO9BsvMxT5nTnhDiWmwOS3tWqtNMZ2heuNIf6s3RY4WiCrD0VJTnWodQaOQbLDmDytmonZjphW8sQF3hWeQEKI3zs8SYed5j1gbBU4mk4mat7lkymhCtljn5d+EHzc5oRqEk9mZM6nN5fGXq11lyQ/cOLSey1BaMK6Lst7iOy5mA9OhLsBQT3HhJqn1QTKK6W8diiSTVtPBygeHUygrFAb+pSMEatiWTVvF1ltouS/ax4hPz8W7aU3a1NX6JOubJvs/RNWnfZomIWbqJcexucwG23963r5ED9yqZxxAewtJrz1u6eSYLx291hXtPqaFB2Dn5DY3nbMqO0HgHWHLufxpq8IogU4F4krTNHS7J6+AVBfp2BgJd2FlwF3gSZoBUQD3cdXfoxIVRPe5xYi6SzJ2z6vSIm+ljj5wzOFPmeAchSpd3qr/dlUhdAmXOkma7j0nE/jtjL52UNrWtQMHh55ucXeyeYG+Xuwr1pUo3TU+O7IAwNxa3R/vLsC1UkDYp570yZQBHSlOj6rFXlRem4JoQrQjOTQyjBB15PwmxqUZZgmYXPgruOaelVvCpqAe6K+7sMfNUtnq04oyOlmqmuysVatkIaxUTmuCC90bXKqZvIK+Hm1O1GtW07iDdCaOsg3Yzx4yw+1jYRQx3HFUWxtO5QZXxbn1qDTODrhbVquo0w/y/CY1M56v/p4MUreHIHRXRQVNwo4aBlETqpwLVFV5zCyNVTXtvLFnl8ABywYRwRS1ZxcF/b2uj3WoF/6viT+LPbP78/PLy8vyx+bPzW5gAHMwWy15vPZncGphM1r3e8t+b3zIFoLCbvfRqtUQicUvB+LO2np/P2AhwEl6fx7eAH4qpydxv6X4e494/v0Vg8dETcWTSdIUCXxifhlJZP7/7LQbAZlkTc2SwtPJbwJ9Hz+iQxPaalMjHxOEo4eGXs/TXomkyvhrb6d2YSYmagUlvO14tDBv8ZbFa3nrT6zeydLMbm+1P1MYzvyWx8TxefPxldPD7YuKwtPBDKt9h0WTOp2vhiY+5w9KL35L4g4Xd/PX16D0e1raYz34L4hM2673WT9S2m1e/hRFiuxdyvfFbEL8wW9qLc+J2+3ytPNmaefnHb0F8w+e45qj922vc55rYj6TE1m85/MQLvU1ZXYfi+5xva7Xtp/2XbeT9RkPcw2bp7R0Tie2L75bE38XS3M46+6PXPUuTX7ss7WFoPYqn2/X4r5/SzJfrhK3idtYPG5slP4W6Csx7wBVTu13MPg/XOj8+NyvP2eDsYle/1/OA8GeMPJu328WPa5jNakk57lxa9oZ47bq33j+D3fME+qMTiXVv8YMT6m3VW9McTRxPw9t+nveuy3/vG8aIJ4Oo2mQxf9td+sO7t/lqUoPR2a1LyvN+kfql7iEWH0s2vGNMqfG/S+q+3ezfuJdA83hN7dxWVtk6UHgO3v8lOGE4w+rrjT92l/jgbj7urXF4NlHbUpuBV8uLlxhf4vP/r3hdYbVnzyhD+Y2fZ+fTfrs/s2dLzbGf64HQ5MbyjUx+r3eIi/lWmB6SSPTGq5fNycv46+x5MV7e8uatoewW8P2WhReY4Rivm7U4/SBhqr+eMau++/a3j9Wyt57w5pD1+hXaUe8mwVQSYL6UpPLs9V/NtCo+NrO/n++7g+/bfb7NNvMXMz5eSwgIurXikcw8fbFKfmtk6QBelsK+pMkyZtbSTFJYmHnCs79vn++vOwuvr++fb39nm4/nf4vVarzsTXCuCYejFWtL7rZWEs1VuICvEO/znjTtCnBldP9ksjbQo2H+MLllUoFEr1nxtOjGtPACfSfB3+36iO7l8/bFGrc9gXmwMN8UbJWkmC3wfvMSSNxuXwR2o7lZmgReh0P48yHPNz2dIjPyKLTtjc3SL83v+ipeF+bSfxmKDOPjQ/btcW0SmHdHYjdfXUDzJRKT7b8D8cb56ppSpK8ef6zw3PmYMnZcy+dZYGCfH58L0zN6MlMJM3J1VccI/mt4M/0HpxBlULQcLzY7vxvyX8fn7GOxZo5UHsVPzfSrB0eZfw5vL9ve3ml6pCOp11u++Jqa9FvxuXleeC469rxywnb0mYeRNoGTx0/s3t/+bjYfLwZf2+X+8L/p0utZ3HzMN7O3z53fMl4P/gdV4rJm9DCBXAAAAABJRU5ErkJggg==" alt="" />                </div>
               
                <div className="locationdiv forborder">
                    <div>
                        <CiLocationOn size={25} className="locationlog"/>
                    </div>
                    <div className="address">
                    <div className="hellodiv">
                   <span>Hello</span>
                </div>
                <div className="mainaddress">
                    Select your address
                </div>
                    </div>
               
                </div>
            </div>





            <div  className="input">
                <div className="alldiv">
                <span className="allspan">All<MdArrowDropDown size={20}/></span>

                </div>
                <div className="inputtdiv">
                <span>
    <input type="text" name="" id=""  placeholder="Search Amazon.in" className="inputdiv"/>
</span>
                </div>
                <div className="searchicondiv">
                <span  className="searchicon"><AiOutlineSearch/></span> 
                </div>


            </div>






            <div className="rightsidediv">

 <div className="rightdivfirstbox forborder " onMouseEnter={callfunc2} onMouseLeave={callforleave}>
<img src="data:image/jpeg;base64,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" alt="" /> 
   <div>
   <span> EN <MdArrowDropDown size={20}/></span>
   </div>
   <div id="myDIV1" >
   <div>
		<input type="radio" checked/>
		<label >English - EN</label>
	</div>
<hr />
	<div>
		<input type="radio" />
		<label >हिन्दी - HI</label>
	</div>

	<div>
		<input type="radio" />
		<label >தமிழ் - TA</label>
	</div>
    <div>
		<input type="radio" />
		<label >తెలుగు - TE</label>
	</div>
    <div>
		<input type="radio" />
		<label >ಕನ್ನಡ - KN</label>
	</div>
    <div>
		<input type="radio" />
		<label >മലയാളം - ML</label>
	</div>
    <div>
		<input type="radio" />
		<label >বাংলা - BN</label>
	</div>
    <div>
		<input type="radio" />
		<label >मराठी - MR</label>
	</div>
    <div>
		<a href="">Learn more</a>
	</div>
    <hr />
    <div>
        You are shopping on Amazon.in
    </div>
    <div>
        <a href=""> Change country/region</a>
    </div>
</div>

</div>


 




 <div className="greetdiv forborder" onMouseEnter={callfunc} onMouseLeave={callforleave1}>
 <div >
 <div>
    <span>Hello,Akash</span>
    </div>
    <div>
        <span className="accounts">Accounts & Lists <span><MdArrowDropDown size={20}/></span></span>
    </div>
</div>


<div id="myDIV" >
<div className="row"  >
    <div className="col-6 onhoverdiv diffonhoverdiv">
        <h5>
            Your Lists
        </h5>
        <ul>
            <li>
                Shopping list
            </li>
            <li>
                Create a Wish List
            </li>
            <li>
                Wish from any Website
            </li>
            <li>
                Baby Wishlist
            </li>
            <li>Dicover Your Style</li>
            <li>
                Explore Showroom
            </li>

        </ul>

    </div>
    <div className="col-6 onhoverdiv">
        <h5>
            Your Account
        </h5>
        <ul>
            <li>
                Your Account
            </li>
            <li>
                Your Orders
            </li>
            <li>
                Your Wish List
            </li>
            <li>
                Your Recommendation
            </li>
            <li>
                Your Prime Membership
            </li>
            <li>
                Your Prime Video
            </li>
            <li>
            Switch Acoount
            </li>
            <li>
                Your Seller Account
            </li>
            <li>
                Sign Out
            </li>
           
        </ul>

    </div>

</div>
</div>
</div>


 <div className="returndiv forborder" >
 <div className="return">
        <span>Returns </span>
    </div>
    <div className="order">
        & Orders
    </div>

 </div>




 <div className="cartdiv forborder">
    <span className="cartlogo"><AiOutlineShoppingCart size={30}/></span>
    <span className="cartname">Cart</span>
 </div>
            </div>



        </div>
        </div>

        
    )

}
export default Navupper;