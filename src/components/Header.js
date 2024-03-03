import { LOGO_URL } from "../utils/url";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const [Lbtn,setLbtn] = useState("Login");

    useEffect(() => {
        console.log("UseEffect called")
    },[])
    console.log("Header rendered")
    return(
    <div className='Header'>
      <div className='Logo-container'>
            <img src={LOGO_URL} className='logo'/>
      </div>
      <div className='nav-items'>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
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