import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export default searchSlice.reducer;
export const { cacheResults } = searchSlice.actions;

/**
 * Cache:
 * time complexity to search in array = O(n)
 * time complexity to search in object = O(1)
 *
 * [i, ip, iph, iphone]
 * {
 * i:
 * ip:
 * iph:
 * iphone:
 * }
 *
 * new Map(): This is even more optimized than object
 *
 */
