import ItemCategoryList from "./ItemsCategoryList";
import {useState}  from "react";

const ItemCategories = (props)=>{
    const [showItems,setShowItems] = useState(false)
    const changeShowItemsStatus = ()=>{
        setShowItems(!showItems)
    }
    const {each} = props
    return (
        <div className="flex justify-center">
            <div className="border bg-gray-200 rounded-sm p-1 mb-2 w-6/12">
                <div className="flex w-full justify-between cursor-pointer" onClick={changeShowItemsStatus}>
                    <div>
                        <span>{each.card.card.title}</span>
                        <span>{" ("+each.card.card.itemCards.length+")"}</span>
                    </div>
                    {showItems?<div>△</div>:<div>▽</div>}
                </div>
                <div>
                    {showItems && <ItemCategoryList itemCards={each.card.card.itemCards}/>}
                </div>
            </div>
        </div>
)
}
export default ItemCategories