import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItems } from "../redux/cartStoreSlice";

const Cart = ()=>{
    const cartd = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch();

    const handleClear =()=>{
        dispatch(clearItems())
    }
    return (
    <div>
        <h1 className="font-bold text-center m-4 p-4 text-xl">cart</h1>
        <button className="font-bold bg-black text-white rounded-lg px-4 py-3"
        onClick={handleClear}>
            Clear
        </button>
        <div className=" mx-96  w-6/12">
            <ItemList List={cartd}/>
        </div>
    </div>
    );
}

export default Cart;