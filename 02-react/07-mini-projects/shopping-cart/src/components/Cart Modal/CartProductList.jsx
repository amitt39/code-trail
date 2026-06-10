import useCart from "../../hooks/useCart";
import "./CartProductList.css";

function CartProductCard({ item }) {
  const { dispatch } = useCart();
  return (
    <div className="cart-product-card">
      <img
        src={item.product.thumbnail}
        alt={item.product.title}
        className="cart-product-card__image"
      />

      <div className="cart-product-card__details">
        <h4 className="cart-product-card__title">{item.product.title}</h4>

        <div className="cart-product-card__summary">
          <p className="cart-product-card__price">
            ${(item.product.price * item.quantity).toFixed(2)}
          </p>
          <div className="cart-product-card__quantity-controls">
            <button
              onClick={() => {
                dispatch({
                  type: "DECREASE_QUANTITY",
                  payload: item.product.id,
                });
              }}
              className="cart-product-card__quantity-button"
            >
              -
            </button>
            <p className="cart-product-card__quantity">Qty: {item.quantity}</p>
            <button
              onClick={() => {
                dispatch({
                  type: "INCREASE_QUANTITY",
                  payload: item.product.id,
                });
              }}
              className="cart-product-card__quantity-button"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          dispatch({ type: "REMOVE_FROM_CART", payload: item.product.id });
        }}
        className="cart-product-card__remove-button"
      >
        Remove
      </button>
    </div>
  );
}

export default CartProductCard;
