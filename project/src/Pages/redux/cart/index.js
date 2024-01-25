import { createSlice, current } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      console.log("addtocart", state, action);

      const newcart = [...current(state)];
      const found = newcart.findIndex((item) => item.id === action.payload.id);
      console.log("found", found);
      if (found === -1) {
        // will add item only if not exist already
        newcart.push(action.payload);
        toast.success("Item add to cart");
      } else {
         // Item already exists in the cart, update the quantity
         //create a new object for entire cart quantity
         //newcart[found].quantity += action.payload.quantity;
       // toast.info("Item is already in cart");

      //  newcart[found] = {
      //   ...newcart[found],
      //   quantity: newcart[found].quantity += action.payload.quantity,

        newcart[found] = {
          ...newcart[found],
          quantity: newcart[found].quantity +1,
      };
      // newcart.push(action.payload);
       toast.info("Item quantity updated in cart");
      }
      return newcart;
    },
    removeFromCart(state, action) {
      const newcart = [...current(state)];
      console.log("newcart", current(state));
      const filter = newcart.filter((item) => item.id !== action.payload);
      console.log("filter", filter);
      toast.info("Item is removed from cart");
      return filter;
    },
    emptyCart(state, action) {
      toast.info("All items are removed from cart");
      return [];
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
