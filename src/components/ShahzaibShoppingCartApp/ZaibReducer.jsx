export const reducer = (state, action) => {
  if (action.type === "Remove_Item") {
    return {
      ...state,
      item: state.item.filter(val => {
        return val.id !== action.payload;
      }),
    };
  }

  if (action.type === "Increment") {
    let Update = state.item.map(val => {
      if (val.id === action.payload) {
        return {
          ...val,
          quantity: val.quantity + 1,
        };
      }
      return val;
    });
    return { ...state, item: Update };
  }

  if (action.type === "Decrement") {
    let Update = state.item.map(val => {
      if (val.id === action.payload) {
        return {
          ...val,
          quantity: val.quantity - 1,
        };
      }
      return val;
    })
    .filter(val => val.quantity!== 0);
    return { ...state, item: Update };
  }

  if (action.type === "GET_TOTAL") {
    let { totalItem, totalAmount } = state.item.reduce(
      (acc, val) => {
        let { quantity, price } = val;
        acc.totalAmount += price * quantity;
        acc.totalItem += quantity;
        return acc;
      },
      { totalItem: 0, totalAmount: 0 }
    );

    return { ...state, totalItem, totalAmount };
  }

  return state;
};
