import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const emptySplitApi = createApi({
  reducerPath: "AIDAApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5023", // Base API URL
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: () => ({}),
});
