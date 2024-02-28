import { CDN_URL } from "../utils/url"

const RestaurantCard= (props) => {
    const {RestData} = props
    const {cloudinaryImageId , id , name ,costForTwo ,cuisines ,avgRating}=RestData?.info
    console.log(props)
   return(
     <div className='res-card' style={{
        backgroundColor:"orange"
     }}>
        <img alt='Barbeque Nation' className='res-logo' src={CDN_URL + cloudinaryImageId}></img>
        <h4>{id}</h4>
        <h4>{name}</h4>
        <h4>Cost ForTwo{costForTwo}</h4>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating}</h4>
     </div>
   )
}

export default RestaurantCard;