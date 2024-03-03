import { useState ,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_API } from "../utils/url";


const RestaurantMenu = () =>{
   const {resId}=useParams();

 const [RestaurantData,setRestarantData]=useState(null)

 useEffect(()=>{
    fetchMenu();
 },[])
 
  
 const fetchMenu = async()=>{
    const data = await fetch(Menu_API+resId)
    const json = await data.json();
   //  console.log(json?.data)
   //  console.log(json?.data?.cards[0]?.card.card)
    console.log(json?.data);
    setRestarantData(json?.data)
 }


  if(RestaurantData===null){
    return <Shimmer/>
  }

  const {name,cuisines,areaName,costForTwoMessage  } = RestaurantData?.cards[0]?.card.card.info
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
                  itemCards.map((rest) => <li key={rest.card.info.id}>{rest.card.info.name}</li>)
               }
            </ul>
            </div>
         </div>
    )
}

export default RestaurantMenu;