import useRestaurantmenu from "../utils/useRestaurantmenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () =>{
   const {restId}=useParams();

   const RestaurantData = useRestaurantmenu(restId)
   // console.log(RestaurantData)

  if(RestaurantData===null){
    return <Shimmer/>
  } 

  const {name,cuisines,areaName,costForTwoMessage} = RestaurantData?.cards[0]?.card.card.info
  const {itemCards}=RestaurantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

  return(
         <div>
            <h1>{name}</h1>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{areaName}</h3>
            <h3>{costForTwoMessage}</h3>
            <div className="men">
               <h1>Menu</h1>
            <ul>
               {
                  itemCards.map((rest) => <li key={rest?.card?.info?.id}>{rest?.card?.info?.name}</li>)
               }
            </ul>
            </div>
         </div>
    )
}

export default RestaurantMenu;