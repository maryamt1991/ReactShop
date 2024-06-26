import { useProducts } from "../context/ProductContext";
import styles from "../pages/ProductsPage.module.css"
import Card from "../components/Card";
import Loader from "../components/Loader"
import { ImSearch } from "react-icons/im";
import { useState,useEffect } from "react";
import { FaListUl } from "react-icons/fa6";
import { createQueryObject, filterProducts, getInitialQuery, searchProducts } from "../helpers/helper";
import { useSearchParams } from "react-router-dom";

function ProductsPage() {
  const products=useProducts();
  
  const [search,setSearch]=useState("");
  const [displayed,setDisplayed]=useState([]);
  const [query,setQuery]=useState({});
  const [searchParams,setSearchParams]=useSearchParams();
  useEffect(()=>{
setDisplayed(products)

setQuery(getInitialQuery(searchParams));
  },[products])
  useEffect(()=>{
        setSearchParams(query)
        setSearch(query.search)
   let finalProducts=searchProducts(products,query.search);
   finalProducts=filterProducts(finalProducts,query.category);
   setDisplayed(finalProducts)
  },[query])
  const searchHandler=()=>{
    setQuery((query)=>createQueryObject(query,{search}))
  }
  const categoryHandler=(event)=>{
    const {tagName}=event.target;
    const category=event.target.innerText.toLocaleLowerCase();
    if (tagName!=="LI") return ;
    setQuery((query)=>createQueryObject(query,{category}))
  }
  return (
    <>
    <div>
      <input type="text" placeholder="...Search" value={search} onChange={(e)=>setSearch(e.target.value.toLocaleLowerCase().trim())}/>
      <button onClick={searchHandler}><ImSearch/></button>
    </div>
       <div className={styles.container}>
        <div className={styles.products}>
        {!displayed.length && <Loader/>}
        
        {
displayed.map((p)=><Card key={p.id} data={p}/>)
        }
       
       
      </div>
      <div>
        <div>
          <FaListUl/>
          <p>Categories</p>
        </div>
        <ul onClick={categoryHandler}>
          <li>All</li>
          <li>Electronics</li>
          <li>jewelery</li>
          <li>Men's Clothing</li>
          <li>women's Clothing</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default ProductsPage