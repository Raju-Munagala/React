import Card from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer_data";
import { Link } from "react-router-dom";
import axios from "axios";


const Body = ()=>{
    const [resData,setResData] = useState([]);
    const [searchData,setSearchData] = useState("");
    const [filteredData,setFilteredData] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);


    const fetchData = async ()=>{
        const response =await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.50330&lng=80.64650");
        console.log(response)
        const dataJson =response.data
        console.log(dataJson)
        setResData(dataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredData(dataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if(resData?.length===0){
        return <Shimmer/>
    }

    
    return (
    <div className="body p-2">
        <div className="flex justify-between">
            <div>
                <input className="border border-gray-600 m-2" value={searchData} onChange={(e)=>{
                    setSearchData(e.target.value);
                }}/>
                <button className="border bg-gray-300 px-2 rounded-sm" onClick={()=>{
                    //console.log(resData[0].info.name.toLowerCase());
                    setFilteredData(resData?.filter(res=>res?.info?.name?.toLowerCase()?.includes(searchData?.toLowerCase())));
                }}>search</button>
            </div>
            <button className="border bg-gray-300 p-2 rounded-sm" onClick={()=>
                setFilteredData(resData?.filter(restaurant=>restaurant?.info?.avgRating>4))
            }>
                top rated restaurants
            </button>
        </div>
        <div className="flex flex-wrap justify-center">
            {filteredData?.map(restaurant=><Link className="w-2/12 h-72 mb-4" to={`/restaurant/${restaurant?.info?.id}`} key={restaurant?.info?.id}><Card resData={restaurant}/></Link>)}
        </div>
    </div>
)};

export default Body;