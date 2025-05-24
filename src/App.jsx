import { useState } from "react";
import Login from "./components/Login";
import Render from "./components/Render";

const App = () => {
  const [employs, setemploys] = useState([]);

  // Return
  return (
    <div className="p-4">
      <Login employs={employs} setemploys={setemploys} />
      <Render employs={employs} setemploys={setemploys} />
    </div>
  );
};

export default App;
