import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";

const Body = () => {
    const [Listofrest,setListofrest] = useState([]);
    const [FilterListofrest,setFilterListofrest] = useState([])
    const [SearchTxt,setSearchTxt] = useState(" ");

    const FilterTopRatedRestaurant = () =>{
      const Toprated = Listofrest.filter((res) => res.info.avgRating>4.3)
      setFilterListofrest(Toprated)
    }

    useEffect(()=>{fetchData()},[]);

    const fetchData = async() => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.50330&lng=80.64650&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const json = await data.json();
      console.log(json)
      //optional chaining
      setListofrest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants);
      setFilterListofrest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants);
    }
 
    //conditional rendering
    if (Listofrest.length === 0) {
      return <Shimmer />;
    }

    return(
       <div className="body">
        <div className="search">
          <input type="text"
           value={SearchTxt} 
           onChange={(e)=>setSearchTxt(e.target.value)}/>
          <button className="search-btn" 
          onClick={()=>{

            const filteredRestaurant=Listofrest.filter(
              (res)=> res.info.name.toLowerCase().includes(SearchTxt));
              setFilterListofrest(filteredRestaurant)
          }}>Search</button>
        </div>
        <div className="filter" >
             <button 
             className="filter-btn" onClick={FilterTopRatedRestaurant}
                 >
                Filter-Top-Rated-Restaurant
             </button>
           </div>
           <div className='res-container'>
               {/* <Restaurantcard RestData={RestList[0]}/> */}
               {
                    FilterListofrest.map((restaurant)=>
                   <Link to={"/restaurants/"+restaurant.info.id}key={restaurant.info.id}><RestaurantCard RestData={restaurant}/></Link>
                 )
               }
           </div>
       </div>
    )
}

export default Body;