import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./features/bookSlice";
import { UseSelector, TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    bookSlice: bookSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type Appdispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector