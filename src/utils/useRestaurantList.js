import { useEffect, useState } from "react"
const useRestaurantList = ()=>{

    const [Listofrest,setListofrest] = useState([])

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.50330&lng=80.64650&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        console.log(json)
        setListofrest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants)
    }

    return Listofrest;
}

export default useRestaurantList;