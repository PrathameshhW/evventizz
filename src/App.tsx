import { useEffect } from "react";
import { useLazyGetAllUsersQuery } from "./screens/Users/UsersApi";

function App() {
  const [getAllUsers] = useLazyGetAllUsersQuery({});

  useEffect(() => {
    getAllUsers({});
  }, []);

  return <></>;
}

export default App;
