import { useProducts } from "../context/ProductContext";
import styles from "../pages/ProductsPage.module.css"
import Card from "../components/Card";

function ProductsPage() {
  const products=useProducts();
  console.log(products)
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <p>...Loading!</p>}
        <ul>
        {
products.map((p)=><Card key={p.id} data={p}/>)
        }
        </ul>
       
      </div>
      <div>sidebar</div>
    </div>
  )
}

export default ProductsPage