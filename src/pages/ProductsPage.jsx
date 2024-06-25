import { useProducts } from "../context/ProductContext";
import styles from "../pages/ProductsPage.module.css"
import Card from "../components/Card";
import Loader from "../components/Loader"
import { ImSearch } from "react-icons/im";
import { useState } from "react";
import { FaListUl } from "react-icons/fa6";

function ProductsPage() {
  const products=useProducts();
  console.log(products)
  const [search,setSearch]=useState("");
  const searchHandler=()=>{
    console.log("first")
  }
  const categoryHandler=(event)=>{
    const {tagName}=event.target;
    const category=event.target.innerText.toLocaleLowerCase();
    if (tagName!=="LI") return ;
    console.log(category)
  }
  return (
    <>
    <div>
      <input type="text" placeholder="...Search" value={search} onChange={(e)=>setSearch(e.target.value.toLocaleLowerCase().trim())}/>
      <button onClick={searchHandler}><ImSearch/></button>
    </div>
       <div className={styles.container}>
        <div className={styles.products}>
        {!products.length && <Loader/>}
        
        {
products.map((p)=><Card key={p.id} data={p}/>)
        }
       
       
      </div>
      <div>
        <div>
          <FaListUl/>
          <p>Categories</p>
        </div>
        <ul onClick={categoryHandler}>
          <li>All</li>
          <li>Elecrtonics</li>
          <li>jewelry</li>
          <li>Men's Clothing</li>
          <li>women's Clothing</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default ProductsPage