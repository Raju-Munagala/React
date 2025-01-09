import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = ()=>{
    const cartItems = useSelector((store)=>store.cart.items)
    const [logBtn,setLogBtn] = useState("login");
    const {loggedInUser} = useContext(UserContext)
    return (
    <div className="flex justify-between border m-2 items-center">
        <img className="w-28" src={LOGO_URL}/>
        <ul className="flex w-6/12 justify-around mr-2 text-gray-500 text-lg">
            <li className="hover:text-black"><Link to="/">Home</Link></li>
            <li className="hover:text-black"><Link to="/about">about</Link></li>
            <li className="hover:text-black"><Link to="/contact">contact</Link></li>
            <li className="hover:text-black"><Link to="/grocery">Grocery</Link></li>
            <li className="hover:text-black"><Link to="/cart">cart - ({cartItems.length})</Link></li>
            <li className="hover:text-black"><button className="log-btn" onClick={()=>{
                setLogBtn(logBtn==="login"? "logout" : "login")
            }}>{logBtn}</button></li>
            <li className="text-black">{loggedInUser}</li>
        </ul>
    </div>
)};

export default Header;