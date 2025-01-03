import Shimmer from "./Shimmer_data";
import { useParams } from "react-router-dom";
import useRestaurantData from "../utils/useRestaurantData";
import ItemCategories from "./ItemsCategories";

const Restaurant = ()=>{
    const {resId} = useParams();
    const resData = useRestaurantData(resId);
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
            {categoryCardsList.map(each=>(
                <ItemCategories key={each.card.card.title} each={each}/>
            ))}
        </div>
    )
}

export default Restaurant