export const initialCartState = {
  items: [], // each item: { id, title, price, image, quantity }
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        // if the item is already in the cart, increase its quantity
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      
      return {
        ...state,
        items: [...state.items, { ...product, quantity: 1 }],
      };
    }

    case "REMOVE_ITEM": {
      const idToRemove = action.payload;
      return {
        ...state,
        items: state.items.filter((item) => item.id !== idToRemove),
      };
    }

    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;

      if (quantity < 1) {
        // if quantity is less than 1, remove the item from the cart
        return state;
      }

      return {
        ...state,
        items: state.items.map((item) =>
          item.id === id ? { ...item, quantity } : item
        ),
      };
    }

    case "CLEAR_CART": {
      return {
        ...state,
        items: [],
      };
    }

    case "SET_CART": {
      // replace the entire cart with a new array of items
      return {
        ...state,
        items: action.payload,
      };
    }

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

export default cartReducer;