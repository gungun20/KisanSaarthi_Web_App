import { createSlice } from "@reduxjs/toolkit";

const arraySlice = createSlice({
  name: "array",
  initialState: {
    index: -1,
  },
  reducers: {
    setIndex: (state, action) => {
      state.index = action.payload;
    },
  },
});

export default arraySlice.reducer;
export const { setIndex } = arraySlice.actions;
