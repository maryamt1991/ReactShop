import { useProducts } from "../context/ProductContext";

function ProductsPage() {
  const products=useProducts();
  console.log(products)
  return (
    <div>
      <div>
        {

        }
      </div>
      <div>sidebar</div>
    </div>
  )
}

export default ProductsPage