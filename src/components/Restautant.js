import Shimmer from "./Shimmer_data";
import { useParams } from "react-router-dom";
import useRestaurantData from "../utils/useRestaurantData";
import ItemCategories from "./ItemsCategories";
import { useState } from "react";

const Restaurant = ()=>{
    const {resId} = useParams();
    const resData = useRestaurantData(resId);
    const [showIndex,setShowIndex] = useState(null);
    if (resData===null) return <Shimmer/>

    const {name, cuisines, costForTwoMessage} = resData?.data?.cards[2]?.card?.card?.info

    const {cards} = resData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR
    const categoryCardsList = cards.filter(each=>(each.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))

    return (
        <div className="text-center">
            <h1 className="font-bold text-xl">{name}</h1>
            <p >{cuisines.join(", ")}</p>
            <p>{costForTwoMessage}</p>
            <h1 className="font-bold text-xl">Menu</h1>
            {categoryCardsList.map((each,index)=>(
                <ItemCategories key={each.card.card.title} each={each} showItems={index===showIndex} setShowIndex={()=>index===showIndex?setShowIndex(null):setShowIndex(index)}/>
            ))}
        </div>
    )
}

export default Restaurant