import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import RestList from "../utils/constants";


const Body = () => {
    const [Listofrest,setListofrest] = useState(RestList);

    return(
       <div className="body">
           <div className="filter" >
             <button 
             className="filter-btn" onClick={ () => {
                 const filtering = Listofrest.filter(
                    (res) => res.info.avgRating>4.3
                 );
                 setListofrest(filtering);
                 }}
                 >
                Filter-Top-Rated-Restaurant
             </button>
           </div>
           <div className='res-container'>
               {/* <Restaurantcard RestData={RestList[0]}/> */}
               {
                 Listofrest.map((restaurant)=>
                   <RestaurantCard key={restaurant.info.id} RestData={restaurant}/>
                 )
               }
           </div>
       </div>
    )
}

export default Body;