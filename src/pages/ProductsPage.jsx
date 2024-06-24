import { useProducts } from "../context/ProductContext";
import styles from "../pages/ProductsPage.module.css"
import Card from "../components/Card";
import Loader from "../components/Loader"
import { ImSearch } from "react-icons/im";
import { useState } from "react";

function ProductsPage() {
  const products=useProducts();
  console.log(products)
  const [search,setSearch]=useState("");
  const searchHandler=()=>{
    console.log("first")
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
      <div>sidebar</div>
    </div>
    </>
  )
}

export default ProductsPage