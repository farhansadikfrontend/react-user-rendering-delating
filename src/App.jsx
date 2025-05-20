import { useState } from "react";
import Login from "./components/Login";
import Render from "./components/Render";

const App = () => {
  const [users, setUsers] = useState([]);

  // Return
  return (
    <div className="p-4">
      <Login users={users} setUsers={setUsers} />
      <Render users={users} setUsers={setUsers} />
    </div>
  );
};

export default App;
