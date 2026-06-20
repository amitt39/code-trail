import { useMemo, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import useCart from "../../hooks/useCart";
import "./CartModal.css";
import CartProductList from "./CartProductList";

function CartModal({ setIsCartModalOpen }) {
  const inputRef = useRef("");
  const [discount, setDiscount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [couponStatus, setCouponStatus] = useState("idle");
  const { cart, validateCode } = useCart();

  const subTotal = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );
  }, [cart]);

  return (
    <>
      <div
        className="cart-modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2 className="cart-modal__title">Cart</h2>
        <IoClose
          onClick={() => {
            setIsCartModalOpen(false);
          }}
          size={30}
          className="cart-modal__close"
        />
        {cart.length === 0 && "No products added yet!"}
        {cart.length > 0 && (
          <div>
            <div>
              {cart.map((item) => (
                <CartProductList key={item.product.id} item={item} />
              ))}
            </div>
            <div>
              <p>Coupon Discount:</p>
              <input ref={inputRef} type="text" placeholder="Enter Code" />
              <button
                onClick={() => {
                  const code = inputRef.current.value;
                  const discountAmt = validateCode(code);
                  // in the Apply button onClick:
                  if (discountAmt === 0) {
                    setCouponStatus("invalid");
                  } else {
                    setAppliedCoupon(code);
                    setCouponStatus("valid");
                  }
                  console.log(discountAmt);
                  setDiscount(discountAmt);
                }}
              >
                Apply
              </button>
              {couponStatus === "invalid" && "Invalid coupon code!"}
              {couponStatus === "valid" && (
                <div>
                  <p>{appliedCoupon}</p>
                  <p>You got ${discount} discount</p>
                </div>
              )}
            </div>
            <div>
              <h3>Cart Summary</h3>
              <p>Subtotal: ${subTotal.toFixed(2)}</p>
              {couponStatus === "valid" && <p>Coupon Disount: {discount}</p>}
              <p>Total: {(subTotal - discount).toFixed(2)}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CartModal;
