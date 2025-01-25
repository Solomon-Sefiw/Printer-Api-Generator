// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { AIDAApi } from "../services/AIDAApi";


export const store = configureStore({
  reducer: {
    [AIDAApi.reducerPath]: AIDAApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AIDAApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
