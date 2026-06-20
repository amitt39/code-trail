import useFetchProducts from "../../hooks/useFetchProducts";
import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList() {
  const products = useFetchProducts();

  return (
    <>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductList;
