import { RES_DETAILS_URL } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantData = (resId)=>{
    const [resData, setResData] = useState(null);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData =async ()=>{
        const data =await fetch(RES_DETAILS_URL+resId)
        const jsonData = await data.json()
        setResData(jsonData) 
    }
    console.log(resData)
    return resData
}

export default useRestaurantData