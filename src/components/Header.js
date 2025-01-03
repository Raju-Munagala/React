import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = ()=>{
    const [logBtn,setLogBtn] = useState("login");
    return (
    <div className="flex justify-between border m-2 items-center">
        <img className="w-28" src={LOGO_URL}/>
        <ul className="flex w-6/12 justify-around mr-2 text-gray-500 text-lg">
            <li className="hover:text-black"><Link to="/">Home</Link></li>
            <li className="hover:text-black"><Link to="/about">about</Link></li>
            <li className="hover:text-black"><Link to="/contact">contact</Link></li>
            <li className="hover:text-black"><Link to="/grocery">Grocery</Link></li>
            <li className="hover:text-black">cart</li>
            <li className="hover:text-black"><button className="log-btn" onClick={()=>{
                setLogBtn(logBtn==="login"? "logout" : "login")
            }}>{logBtn}</button></li>
        </ul>
    </div>
)};

export default Header;