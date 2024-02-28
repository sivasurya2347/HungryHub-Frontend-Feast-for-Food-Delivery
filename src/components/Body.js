import RestaurantCard from "./RestaurantCard";
import RestList from "../utils/constants";

const Body = () => {
    return(
       <div className='body'>
           <div className='search'>
             search
           </div>
           <div className='res-container'>
               {/* <Restaurantcard RestData={RestList[0]}/>
               <Restaurantcard RestData={RestList[1]}/>
               <Restaurantcard RestData={RestList[2]}/>
               <Restaurantcard RestData={RestList[3]}/>
               <Restaurantcard RestData={RestList[4]}/>
               <Restaurantcard RestData={RestList[5]}/>
               <Restaurantcard RestData={RestList[6]}/>
               <Restaurantcard RestData={RestList[7]}/>
               <Restaurantcard RestData={RestList[8]}/>
               <Restaurantcard RestData={RestList[9]}/> */}
               {
                 RestList.map((restaurant)=>
                   <RestaurantCard key={restaurant.info.id} RestData={restaurant}/>
                 )
               }
           </div>
       </div>
    )
}

export default Body;