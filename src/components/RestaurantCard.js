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
     <div className='p-10 m-8 w-[350px] h-[430px] border-solid border-black bg-gray-200
     flex-col
     rounded-lg hover:cursor-pointer hover:bg-slate-400 hover:animate-pulse
     transition duration-150 ease-out hover:ease-in' >
      <div className="h-[50%]">
           <img alt='Barbeque Nation' className="rounded-xl w-[100%] h-[90%] border-solid" 
           src={CDN_URL + cloudinaryImageId}>
           </img>
      </div>
      <div className="W-[60%] h-[55%]">
        <h4 className="font-bold text-lg py-4">{name}</h4>
        <h4>{costForTwo}</h4>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating}</h4>
        <h4>{data.loggeduser}</h4>
      </div>
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