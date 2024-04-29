import RestaurantCard ,{OfferReastaurantCard}from "./RestaurantCard";
import { useState,useEffect,useContext } from "react";
import Shimmer from "./Shimmer"
import useonlineStatus from "../utils/useonlineStatus";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import SampleContext from "../utils/sampleContext";

const Body = () => {
    // const [Listofrest,setListofrest] = useState([]);
    const [FilterListofrest,setFilterListofrest] = useState([])
    const [SearchTxt,setSearchTxt] = useState("");
    const {loggeduser,setuserName} = useContext(SampleContext)
    
    const FilterTopRatedRestaurant = () =>{
      const Toprated = Listofrest.filter((res) => res.info.avgRating>4.3)
      setFilterListofrest(Toprated)
    }
    
    const Offerscard = OfferReastaurantCard(RestaurantCard)

    const Listofrest = useRestaurantList();
    useEffect(() => {
      if (Listofrest.length > 0) {
          setFilterListofrest(Listofrest);
      }
  }, [Listofrest]);

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
             <input className="border border-black px-3 py-3"
             type="text"
             value={loggeduser}
             onChange={(e)=>setuserName(e.target.value)}/>
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
                    </Link>
                 )
               }
        </div>
      </div>
    )
}

export default Body;