import React from "react";
import "./Signin.css"
const Signin=()=>{
    return (
        <div className="sign">
            <h6 className="signup">
            See personalized recommendations
            </h6>
            <a href="https://amz-clone-react-app-0030.web.app/login">
            <button type="button" class="btn btn-warning" >sign in</button>
            </a>
            
            <h6 className="signdown">
            New customer? Start here.
            </h6>
        </div>

    )
}
export default Signin;