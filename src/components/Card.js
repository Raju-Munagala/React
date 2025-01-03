import { IMG_URL } from "../utils/constants";

const Card = (props)=>{
    const {resData} = props;
    const {name, cuisines, avgRatingString,sla,cloudinaryImageId} = resData.info;
    const img = IMG_URL+cloudinaryImageId;
    return (
    <div className="border border-gray-700 hover:border-2 bg-gray-200 m-1 rounded-sm p-1 h-72">
        <img className="w-full h-32 object-cover" src={img}/>
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRatingString} rating</p>
        <p>{sla.deliveryTime} mins</p>
    </div>
)};

export default Card;