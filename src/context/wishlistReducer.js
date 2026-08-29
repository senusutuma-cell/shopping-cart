export const initialWishlistState = {
  items: [], 
};

function wishlistReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST": {
      const product = action.payload;
      const alreadyExists = state.items.some((item) => item.id === product.id);

      if (alreadyExists) {
        return state; 
      }

      return {
        ...state,
        items: [...state.items, product],
      };
    }

    case "REMOVE_FROM_WISHLIST": {
      const idToRemove = action.payload;
      return {
        ...state,
        items: state.items.filter((item) => item.id !== idToRemove),
      };
    }

    case "SET_WISHLIST": {
      return {
        ...state,
        items: action.payload,
      };
    }

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

export default wishlistReducer;