import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BaseApi } from "./Config/BaseApi.ts";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiProvider api={BaseApi}>
      <App />
    </ApiProvider>
  </StrictMode>,
);
