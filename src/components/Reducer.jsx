export const reducer = (state, action) => {
  //!--------Remove single item Method--------------
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      item: state.item.filter(val => {
        return val.id !== action.payload;
      }),
    };
  }
  //!--------------Remove All item Method--------------
  if (action.type === "REMOVE_ALL_ITEM") {
    return {
      ...state,
      item: [],
    };
  }
  //!--------Increment item  value Method--------------
  if (action.type === "INCREMENT") {
    let UpdatedItemCart = state.item.map(val => {
      if (val.id === action.payload) {
        return { ...val, quantity: val.quantity + 1 };
      }
      return val;
    });
    return { ...state, item: UpdatedItemCart };
  }
  //!--------Decrement item  value Method--------------
  if (action.type === "DECREMENT") {
    let UpdatedItemCart = state.item
      .map(val => {
        if (val.id === action.payload) {
          return { ...val, quantity: val.quantity - 1 };
        }
        return val;
      })
      .filter(val => val.quantity !== 0); //! it is decrement come to 0 then item will delete from cart.
    return { ...state, item: UpdatedItemCart };
  }
  //!--------Get total items and total price of items Method--------------
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
