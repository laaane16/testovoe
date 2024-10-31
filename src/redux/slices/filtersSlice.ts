import { IFilter, ISort } from "@/@types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";

interface InitialState{
  sort: ISort;
  categories: IFilter[];
}

const initialState: InitialState = {
  sort: {value: '', title: 'Price'},
  categories: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<ISort>) => {
      state.sort = action.payload;
    },
    setCategory: (state, action: PayloadAction<IFilter>) => {
      state.categories.push(action.payload)
    },
    removeCategory: (state, action: PayloadAction<IFilter>) =>{
      state.categories = state.categories.filter((item) => item.value !== action.payload.value)
    }
  },
});


export const {setSort, setCategory, removeCategory} = filtersSlice.actions;
export default filtersSlice.reducer;