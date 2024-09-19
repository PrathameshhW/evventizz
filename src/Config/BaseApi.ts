import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./httpConfig";

const BaseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});

export const BaseApi = createApi({
  baseQuery: BaseQuery,
  endpoints: () => ({}),
});
