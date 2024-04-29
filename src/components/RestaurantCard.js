import { CDN_URL } from "../utils/url"
import { useContext } from "react"
import SampleContext from "../utils/sampleContext"

const RestaurantCard= (props) => {
    const {RestData} = props
    const {cloudinaryImageId , name ,costForTwo ,cuisines ,avgRating}=RestData?.info
   //  const {loggeduser} = useContext(SampleContext)
   //  console.log(props)
   const data = useContext(SampleContext)
   console.log(data)
   return(
     <div className='p-6 m-4 w-[250px] border-solid border-black  bg-gray-200 rounded-lg hover:cursor-pointer hover:size-64 hover:bg-slate-700' >
        <img alt='Barbeque Nation' className="rounded-sm" src={CDN_URL + cloudinaryImageId}></img>
        <h4 className="font-bold text-lg py-4">{name}</h4>
        <h4>Cost ForTwo{costForTwo}</h4>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating}</h4>
        <h4>{data.loggeduser}</h4>
     </div>
   )
}

export const OfferReastaurantCard = (RestaurantCard)=>{
   return (props)=>{
   // {console.log(props)}
      return(
         <div>
            <label className="absolute text-white bg-black rounded-lg p-4">Offers</label>
            <RestaurantCard {...props}/>
         </div>
      )
   }
}

export default RestaurantCard;