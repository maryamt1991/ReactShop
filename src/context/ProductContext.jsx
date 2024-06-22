import { createContext,useEffect,useState,useContext} from 'react'
import api from '../services/config';

const productContext=createContext()
function ProductProvider({children}) {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
       
            const fetchProducts=async()=>{
                try {
                    const response= await api.get("/products")
                    setProducts(response)  
                } catch (error) {
                    console.log(error.message)
                }
                
            }
        fetchProducts();
    },[])
  return (
    <productContext.Provider value={products}>
        {children}
    </productContext.Provider>
  )
}

const useProducts=()=>{
   const products = useContext(productContext);
   return products
}

export default ProductProvider;
export {useProducts};