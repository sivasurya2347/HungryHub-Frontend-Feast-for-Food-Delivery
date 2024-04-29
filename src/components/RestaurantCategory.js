import ItemList from "./ItemList"
import { useState } from "react";

const RestaurantCategory = (props)=>{
    const {data,showItems,setshowIndex}=props
    
    const handleclick =()=>{
    //  setshowItems(!showItems);
        setshowIndex()
   }
    // console.log(props)
    return(
        <div>
            <div className="p-4 w-6/12 mx-auto my-4 bg-gray-50 shadow-lg">
                <div className="flex justify-between">
                    <span className="font-bold text-xl cursor-pointer" onClick={handleclick}>
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>⬇️</span>
                </div>
                {showItems && <ItemList List={data?.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;