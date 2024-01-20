import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./user";
import cart from "./cart";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  user,
  cart,
});

const persistedReducer = persistReducer(
  {
    key: "root:myApp",
    storage,
    whitelist: ["user", "cart"],
  },
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
