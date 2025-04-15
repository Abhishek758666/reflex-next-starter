import {
  Action,
  Store,
  ThunkDispatch,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { PERSIST_KEY, PERSIST_VERSION } from "@/lib/config";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";

import authReducer from "./slice/auth.slice";
import systemReducer from "./slice/system.slice";

const persistConfig = {
  key: PERSIST_KEY,
  version: PERSIST_VERSION,
  storage,
  whitelist: ["system", "loginState"],
};

const rootReducer = combineReducers({
  system: systemReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunkDispatch = ThunkDispatch<RootState, any, Action>;
export type AppStore = Omit<Store<RootState, Action>, "dispatch"> & {
  dispatch: AppThunkDispatch;
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: AppStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PURGE, PAUSE, PERSIST, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
