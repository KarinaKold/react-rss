import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const searchState = {
  searchValue: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: searchState,
  reducers: {
    changeSearchText: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { changeSearchText } = searchSlice.actions;
export default searchSlice.reducer;
