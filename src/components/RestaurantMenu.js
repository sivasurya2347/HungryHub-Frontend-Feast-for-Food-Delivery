import useRestaurantmenu from "../utils/useRestaurantmenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () =>{
   const {restId}=useParams();

   const RestaurantData = useRestaurantmenu(restId)
   // console.log(RestaurantData)
  if(RestaurantData===null){
    return <Shimmer/>
  } 

  const {name,cuisines,areaName,costForTwoMessage} = RestaurantData?.cards[0]?.card.card.info
  const {itemCards}=RestaurantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  const Category = RestaurantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
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
            {Category.map((category)=><RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}/>)}
         </div>
    )
}

export default RestaurantMenu;

//Category.map((res)=>{res?.card?.card?.title