import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  addresses: [
    {
      id: 1,
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345',
    },
  ],
  count: 1,
}

export const counterSlice = createSlice({
  name: 'addressSlice',
  initialState,
  reducers: {
    addAddress: (state, action) => {
      state.addresses.push(action.payload)
    },
    removeAddress: (state, action) => {
      state.addresses = state.addresses.filter((address) => address.id !== action.payload)
    },
    increment: (state) => {
      state.count += 1
    },
  },
})

export const { addAddress, removeAddress, increment } = counterSlice.actions

export default counterSlice.reducer
