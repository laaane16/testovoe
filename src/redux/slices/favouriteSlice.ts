import { IProduct } from "@/@types/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit/react"

interface InitialState{
    items: IProduct[]
}

const initialState: InitialState = {
    items: []
}

const favouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers:{
        addItem: (state, action: PayloadAction<IProduct>) => {
            state.items.push(action.payload)
        },
        removeItem: (state,action: PayloadAction<IProduct>) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id)
        }
    }
})

export default favouriteSlice.reducer;
export const {addItem, removeItem} = favouriteSlice.actions;