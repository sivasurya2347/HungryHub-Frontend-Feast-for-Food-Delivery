import { LOGO_URL } from "../utils/url";
import { useState } from "react";
const Header = () => {
    const [Lbtn,setLbtn] = useState("Login");
    return(
    <div className='Header'>
      <div className='Logo-container'>
            <img src={LOGO_URL} className='logo'/>
      </div>
      <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login-btn" onClick={()=>{
                 Lbtn==="Login"? setLbtn("Logout") : setLbtn("Login");
                }}>
                 {Lbtn}
                 </button>
            </ul>
        </div>
    </div>
    )
}

export default Header;