import { configureStore, combineReducers } from "@reduxjs/toolkit";
import teachersReducer from "./teachers/teachersSlice.js";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import authReduser from "./auth/authReducer";
import favoriteReduser from "./favorite/favoriteSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["teachers"],
};

const rootReducer = combineReducers({
  teachers: teachersReducer,
  favorite: favoriteReduser,
  auth: authReduser,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
