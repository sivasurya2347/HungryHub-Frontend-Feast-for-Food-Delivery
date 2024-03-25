import { CDN_URL } from "../utils/url";

const ItemList = ({ List }) => {
    console.log(List);
    return (
        <div>
            {List.map((list) => (
                <div key={list?.card?.info?.id} className="m-2 p-3 border-gray-200 border-b-2 text-left text-lg flex">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{list?.card?.info?.name}</span>
                            <span>- ₹{list?.card?.info?.price / 100}</span>
                        </div>
                        <p className="text-xs">{list?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <img src={CDN_URL + list?.card?.info?.imageId} className="w-full"/>
                        <div className="absolute">
                            <button className="bg-black text-white shadow-lg p-1 rounded-lg mx-14">
                                 Add + 
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ItemList;
