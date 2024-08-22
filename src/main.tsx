import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./Config/AppRouter.tsx";
import { BaseApi } from "./Config/BaseApi.ts";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiProvider api={BaseApi}>
      <RouterProvider router={AppRouter} />
    </ApiProvider>
  </StrictMode>,
);
