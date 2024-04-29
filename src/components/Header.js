import { LOGO_URL } from "../utils/url";
import { useState , useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useonlineStatus from "../utils/useonlineStatus";
import SampleContext from "../utils/sampleContext";
const Header = () => {
    const [Lbtn,setLbtn] = useState("Login");

    useEffect(() => {
    },[])

    const status = useonlineStatus();
    const {loggeduser} = useContext(SampleContext)
    return(
    <div className='flex justify-between  bg-green-300 shadow-lg'>
      <div className='w-52'>
            <img src={LOGO_URL} className='logo'/>
      </div>
      <div>
            <ul className="flex items-center m-10">
                <li className="p-4">OnlinStatus:{status ? "✅":"🔴"}</li>
                <li className="p-4">
                <Link to="/">Home</Link>
                </li>
                <li className="p-4">
                    <Link to="/about">About Us</Link>
                </li>
                <li className="p-4">
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li className="p-4">Cart</li>
                <button className="login-btn" onClick={()=>{
                 Lbtn==="Login"? setLbtn("Logout") : setLbtn("Login");
                }}>
                 {Lbtn}
                 </button>
                 <li className="px-3 font-bold">{loggeduser}</li>
            </ul>
        </div>
    </div>
    )
}

export default Header;