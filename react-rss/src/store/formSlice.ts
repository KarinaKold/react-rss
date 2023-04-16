import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'components/Form';

const formState: IUser[] = [];

export const formSlice = createSlice({
  name: 'form',
  initialState: formState,
  reducers: {
    addToList: (state, action: PayloadAction<IUser>) => {
      state.push(action.payload);
    },
  },
});

export const { addToList } = formSlice.actions;
export default formSlice.reducer;
