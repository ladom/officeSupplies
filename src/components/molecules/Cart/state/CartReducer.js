const immutable = (state) => JSON.parse(JSON.stringify(state));

export const ACTION_ADD_TO_CART = 'ACTION_ADD_TO_CART';
export const ACTION_SET_INITIAL_CART = 'ACTION_SET_INITIAL_CART';

const reducer = (state, action) => {
  if (action.type === ACTION_ADD_TO_CART) {
    const newState = immutable(state);
    newState.products.push(action.payload.product);
    return newState;
  }

  if (action.type === ACTION_SET_INITIAL_CART) {
    const newState = immutable(state);
    newState.products = [];
    return newState;
  }

  return state;
};

export default reducer;