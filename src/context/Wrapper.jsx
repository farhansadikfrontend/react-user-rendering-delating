import { createContext, useState } from "react";

export const Context = createContext(null);

const Wrapper = (props) => {
  const [employs, setemploys] = useState([]);

  return (
    <Context.Provider value={[employs, setemploys]}>
      {props.children}
    </Context.Provider>
  );
};

export default Wrapper;
