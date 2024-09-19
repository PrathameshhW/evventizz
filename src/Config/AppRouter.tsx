import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../screens/Home/HomeScreen";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
    errorElement: <div>Page Not Found</div>,
  },
]);
