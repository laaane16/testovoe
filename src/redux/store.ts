"use client";

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";

import products from "./slices/productsSlice";
import favourite from "./slices/favouriteSlice";
import filters from "./slices/filtersSlice";

export const store = configureStore({
  reducer: {
    products,
    favourite,
    filters,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
