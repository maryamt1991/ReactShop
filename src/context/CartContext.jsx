import { createContext, useContext, useReducer } from "react"
import { sumProducts } from "../helpers/helper";

const CartContext=createContext();
const initialState={
    selectedItems:[],
    itemsCounter:0,
    total:0,
    checkout:false,


};
const reducer=(state,action)=>{
    console.log(action)
    switch (action.type) {
        case "ADD-ITEM":
            if(!state.selectedItems.find((item)=>item.id===action.payload.id)){
             state.selectedItems.push({...action.payload,quantity:1})   
            }
            return{
                ...state,
                checkout:false,
                ...sumProducts(state.selectedItems),
                
            }
           
    
        default:
            throw new Error("Invalid action");
    }
};
function CartProvider({children}) {
    const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <CartContext.Provider value={{state,dispatch}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
const useCart=()=>{
    const {state,dispatch}=useContext(CartContext);
   return [state,dispatch];
}
export {useCart}