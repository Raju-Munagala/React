import { useDispatch } from "react-redux"
import { IMG_URL } from "../utils/constants"
import {addItem} from "../utils/cartSlice"

const ItemCategoryList = (props)=>{
    const dispatch = useDispatch();
    const {itemCards} = props;
    const handleCart = (each)=>{
        dispatch(addItem(each))
    }
    console.log(itemCards)
    return (
        <div>
            {itemCards.map(each=>(
                <div key={each.card.info.id} className="flex border-b-2 border-gray-400 p-2 text-left w-full">
                    <div className="w-10/12">
                        <h1 className="font-bold">{each.card.info.name}</h1>
                        <h3 className="font-bold">{(each.card.info.price?each.card.info.price:each.card.info.defaultPrice)/100+" RS"}</h3>
                        <h3>{each.card.info.description}</h3>
                    </div>
                    <div className="w-2/12 flex flex-col items-center">
                        <button onClick={()=>handleCart(each)} className="absolute bg-black text-white px-2 rounded-sm text-lg">Add</button>
                        <img src={IMG_URL+each.card.info.imageId} alt="image" className="object-cover w-full"/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemCategoryList
