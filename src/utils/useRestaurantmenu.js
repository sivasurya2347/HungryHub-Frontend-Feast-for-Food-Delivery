import { useState ,useEffect } from "react";
import { Menu_API } from "../utils/url";

const useRestaurantmenu = (restId) =>{
    const [RestaurantData,setRestarantData]=useState(null)

    useEffect(()=>{
      fetchMenu();
    },[])

    const fetchMenu = async () =>{
        const data = await fetch(Menu_API+restId);
        const json = await data.json();
        // console.log(json)
        setRestarantData(json?.data)
    }
    return RestaurantData;
}

export default useRestaurantmenu;