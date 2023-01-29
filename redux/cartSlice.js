import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  carts: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newFood = action.payload
      const foodIndex = state.carts.findIndex((menu) => menu.id === newFood.id)
      if (foodIndex !== -1) {
        const food = state.carts[foodIndex]
        food.quantity = food.quantity + 1
        const carts = [...state.carts]
        carts[foodIndex] = food
        state.carts = carts
      } else {
        const carts = [...state.carts, newFood]
        state.carts = carts
      }
    },
    removeToCart: (state, action) => {
      const newFood = action.payload
      const foodIndex = state.carts.findIndex((menu) => menu.id === newFood.id)
      if (foodIndex !== -1) {
        const food = state.carts[foodIndex]
        const newQuantity = food.quantity - 1
        if (newQuantity > 0) {
          food.quantity = newQuantity
          const carts = [...state.carts]
          carts[foodIndex] = food
          state.carts = carts
        }

        if (newQuantity === 0) {
          const carts = [...state.carts]
          carts.splice(foodIndex, 1)
          state.carts = carts
        }
      }
    },
    deleteItem: (state, action) => {
      const food = action.payload
      const newCart = [...state.carts]
      const foodIndex = newCart.findIndex((cart) => cart.id === food.id)
      newCart.splice(foodIndex, 1)
      state.carts = newCart
    },
  },
})

export const { addToCart, removeToCart, deleteItem } = cartSlice.actions

export default cartSlice.reducer
