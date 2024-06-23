import { createContext,useEffect,useState,useContext} from 'react'
import api from '../services/config';
import axios from 'axios';

  const ProductContext=createContext()
function ProductProvider({children}) {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
   const fetchProducts=async()=>{
    try {
        setProducts(api.get("/products"))
    } catch (error) {
       console.log(error.message) 
    }
   }
   fetchProducts();
    },[])
  return (
    <ProductContext.Provider value={products}>
        {children}
    </ProductContext.Provider>
  )
}

const useProducts=()=>{
    const products = useContext(ProductContext);
    return products
}

export default ProductProvider;
export {useProducts};
