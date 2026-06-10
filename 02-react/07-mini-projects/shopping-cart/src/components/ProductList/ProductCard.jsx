import useCart from "../../hooks/useCart";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { dispatch } = useCart();
  return (
    <>
      <div className="product-card">
        <img
          src={product.thumbnail}
          width={300}
          className="product-card__image"
        />
        <h2 className="product-card__title">{product.title}</h2>
        <p className="product-card__price">{product.price}</p>
        <p className="product-card__category">{product.category}</p>
        <hr />
        <button
          onClick={() => {
            dispatch({ type: "ADD_TO_CART", payload: product });
          }}
          className="product-card__button"
        >
          Add to cart
        </button>{" "}
      </div>
    </>
  );
}

export default ProductCard;
