import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BaseQuery = fetchBaseQuery({
  baseUrl: "https://jsonplaceholder.typicode.com",
});

export const BaseApi = createApi({
  baseQuery: BaseQuery,
  endpoints: () => ({}),
});
