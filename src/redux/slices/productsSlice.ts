'use client';

import { IProduct } from "@/@types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";

interface InitialState{
    products: IProduct[]
}

const initialState: InitialState = {
    products: [],
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<IProduct[]>) => {
            state.products = action.payload
        }
    }
})

export const {setProducts} = productsSlice.actions

export default productsSlice.reducer;