import { BaseApi } from "../../Config/BaseApi";

const UsersApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<any, any>({
      query: () => ({
        url: "users",
      }),
    }),
  }),
});

export const { useLazyGetAllUsersQuery } = UsersApi;
