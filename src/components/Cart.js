import { useDispatch, useSelector } from "react-redux";
import ItemCategoryList from "./ItemsCategoryList";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    const dispatch = useDispatch()
    const cartItems = useSelector((store)=>store.cart.items)
    const clearCartItems = ()=>{
        dispatch(clearCart())
    }
    return (
        <div className="w-6/12 text-center m-auto">
            <h1 className="font-bold text-2xl p-1" m-1>cart</h1>
            <button className="bg-gray-300 p-2 rounded-sm m-3" onClick={clearCartItems}>clear items</button>
            <ItemCategoryList itemCards={cartItems}/>
        </div>
    )
}

export default Cart;