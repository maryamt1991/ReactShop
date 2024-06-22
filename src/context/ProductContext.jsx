import React from 'react'
import { createContext,useEffect,useState } from 'react'
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

export default ProductProvider