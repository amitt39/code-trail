import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./App.css";
import CartModal from "./components/Cart Modal/CartModal";
import ProductList from "./components/ProductList/ProductList";
import CartContext from "./contexts/cartContext";
import cartReducer from "./reducers/cartReducer";

const COUPON_CODES = {
  FIRSTORDER: { discount: 2 },
  FIRST100: { discount: 10 },
};

function App() {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const [state, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    if (isCartModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isCartModalOpen]);

  const totalQty = useMemo(() => {
    return state.reduce((total, item) => total + item.quantity, 0);
  }, [state]);

  const validateCode = useCallback((code) => {
    const matched = COUPON_CODES[code];
    if (!matched) {
      return 0;
    }
    return matched.discount;
  }, []);

  return (
    <>
      <CartContext.Provider value={{ cart: state, dispatch, validateCode }}>
        <h1>Shopping Cart</h1>
        <div
          className="cart-trigger"
          onClick={() => {
            setIsCartModalOpen(true);
          }}
        >
          <FaShoppingCart size={30} />
          <div className="cart-badge">{totalQty}</div>
        </div>
        {isCartModalOpen && (
          <div
            className="cart-overlay"
            onClick={() => {
              setIsCartModalOpen(false);
            }}
          >
            <CartModal setIsCartModalOpen={setIsCartModalOpen} />
          </div>
        )}
        <ProductList />
      </CartContext.Provider>
    </>
  );
}

export default App;
