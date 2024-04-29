import useRestaurantmenu from "../utils/useRestaurantmenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () =>{
   const {restId}=useParams();
   const showItems = false;
   const [showIndex,setshowIndex]=useState(null)


   const RestaurantData = useRestaurantmenu(restId)
   // console.log(RestaurantData)
  if(RestaurantData===null){
    return <Shimmer/>
  } 
  // console.log(RestaurantData)

  const {name,cuisines,areaName,costForTwoMessage} = RestaurantData?.cards[2]?.card.card.info
  const {itemCards}=RestaurantData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
  const Category = RestaurantData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
   (c)=>c?.card?.card?.["@type"]===
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
//   console.log(Category)

  return(
         <div className="text-center">
            <h1 className="my-4 text-lg">{name}</h1>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{areaName}</h3>
            <h3>{costForTwoMessage}</h3>
            <h1 className="text-2xl m-4">Menu</h1>
            {Category.map((category,index)=>
            <RestaurantCategory key={category?.card?.card?.title} 
              data={category?.card?.card}
              showItems={showIndex===index ? true : false}
              setshowIndex = {() =>{setshowIndex(index)}}
            />
            )}
         </div>
    )
}

export default RestaurantMenu;