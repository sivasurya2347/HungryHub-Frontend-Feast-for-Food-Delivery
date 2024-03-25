import RestaurantCard ,{OfferReastaurantCard}from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer"
import useonlineStatus from "../utils/useonlineStatus";
import { Link } from "react-router-dom";

const Body = () => {
    const [Listofrest,setListofrest] = useState([]);
    const [FilterListofrest,setFilterListofrest] = useState([])
    const [SearchTxt,setSearchTxt] = useState("");
    
    const FilterTopRatedRestaurant = () =>{
      const Toprated = Listofrest.filter((res) => res.info.avgRating>4.3)
      setFilterListofrest(Toprated)
    }
    
    const Offerscard = OfferReastaurantCard(RestaurantCard)
     
    // console.log(Listofrest[0].info.aggregatedDiscountInfoV3.header)
    //  .Listofrest[0].info.aggregatedDiscountInfoV3.header
   
    useEffect(()=>{fetchData()},[]);

    const fetchData = async() => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.50330&lng=80.64650&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const json = await data.json();
      //  console.log(json)
      //optional chaining
      setListofrest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants);
      setFilterListofrest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants);
    }

    const status = useonlineStatus();
    if(status===false) return<h1>You are in offline</h1>
    
    //conditional rendering
    if (Listofrest.length === 0) {
      return <Shimmer />;
    }

    return(
       <div className="ml-4">
        <div className="flex">
          <input className="border border-solid border-black m-4 px-12" 
          type="text"
           value={SearchTxt} 
           onChange={(e)=>setSearchTxt(e.target.value)}/>
          <button className="border px-5 py-2 bg-orange-200 border-solid border-black my-5" 
          onClick={()=>{

            const filteredRestaurant=Listofrest.filter(
              (res)=> res.info.name.toLowerCase().includes(SearchTxt));
              setFilterListofrest(filteredRestaurant)
          }}>Search</button>
          <div>
             <button 
             className="px-4 py-2 bg-gray-100 my-5 border mx-3 border-black border-solid" 
             onClick={FilterTopRatedRestaurant}
                 >
                Filter-Top-Rated-Restaurant
             </button>
           </div>
        </div>
           <div className='flex flex-wrap'>
               {
                    FilterListofrest.map((restaurant)=>
                   <Link to={"/restaurants/"+restaurant.info.id}key={restaurant.info.id}>
                    {restaurant.info.aggregatedDiscountInfoV3 && restaurant.info.aggregatedDiscountInfoV3.header && restaurant.info.aggregatedDiscountInfoV3.header.includes("OFF") ?
                     <Offerscard RestData={restaurant}/> :
                     <RestaurantCard RestData={restaurant}/>
                    }
                    {/* <RestaurantCard RestData={restaurant}/> */}
                    </Link>
                 )
               }
           </div>
       </div>
    )
}

export default Body;