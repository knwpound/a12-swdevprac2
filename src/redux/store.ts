import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { bookSlice } from "./features/bookSlice";
import { UseSelector, TypedUseSelectorHook, useSelector } from "react-redux";
import { persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,REGISTER, PURGE } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { WebStorage } from "redux-persist/lib/types";

function createPersistStorage(): WebStorage {
  const isServer = typeof window === "undefined";
  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }
  return createWebStorage('local');
}

const storage = createPersistStorage()

const persistConfig = {
  key: "rootPersist",
  storage
}

const rootReducer = combineReducers({bookSlice: bookSlice.reducer})
const reduxPersistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
  reducer: reduxPersistedReducer,
  middleware:(getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck:{
      ignoredActions:[FLUSH,REGISTER,REHYDRATE,PAUSE,PERSIST,PURGE],
    }
  })
});

export type RootState = ReturnType<typeof store.getState>
export type Appdispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector