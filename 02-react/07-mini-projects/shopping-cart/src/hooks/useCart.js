import { useContext } from "react"
import CartContext from "../contexts/cartContext"

function useCart() {
  return useContext(CartContext)
}
export default useCart
