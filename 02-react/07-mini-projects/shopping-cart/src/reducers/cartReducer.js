
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = action.payload
      const found = state.some(item => item.product.id === product.id)
      if (found) {
        const updatedCart = state.map(item => {
          if (item.product.id === product.id) {
            return { ...item, quantity: item.quantity + 1 }
          }
          return item;
        })
        return updatedCart
      }
      return [...state, { product, quantity: 1 }]
    }

    case "REMOVE_FROM_CART": {
      const id = action.payload;
      const updatedCart = state.filter(item => item.product.id !== id)
      return updatedCart
    }

    case "DECREASE_QUANTITY": {
      const id = action.payload
      const updatedQty = state.map(item => {
        if (item.product.id === id) {
          return { ...item, quantity: item.quantity - 1 }
        }
        return item
      }).filter(item => item.quantity > 0)
      return updatedQty
    }

    case "INCREASE_QUANTITY": {
      const id = action.payload
      const updatedQty = state.map((item) => {
        if (item.product.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      return updatedQty
    }

    default:
      return state
  }
}
export default cartReducer
