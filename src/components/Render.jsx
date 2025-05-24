import { useContext } from "react";
import { toast } from "react-toastify";
import { Context } from "../context/Wrapper";

const Render = () => {
  const [employs, setemploys] = useContext(Context);

  const renderingElem = employs.map((user) => {
    return (
      <li
        key={user.id}
        className="border shrink-0 w-[350px] h-fit bg-orange-100 pb-3 px-6 flex justify-between items-baseline"
      >
        <div>
          <h2 className="text-xl"> Name: {user.fullname}</h2>
          <p> Age: {user.age} </p>
          <p>
            {" "}
            Salary: {user.salary}
            {user.salary != "" ? "$" : ""}
          </p>
          <p> Id: {user.id}</p>
        </div>
        <button
          onClick={() => delateUser(user.id)}
          className="rounded-full cursor-pointer active:scale-[0.95] text-red-600 text-3xl"
        >
          &times;
        </button>
      </li>
    );
  });

  const delateUser = (id) => {
    const filtered = employs.filter((user) => user.id != id);
    setemploys(filtered);
    toast.error("Employ deleted");
  };

  return (
    <div className="py-6 relative">
      <h1 className="text-center md:text-start text-2xl md:text-4xl text-orange-500 mb-8">
        Employs List.
      </h1>
      <p
        className={`text-red-500 text-xl md:text-2xl absolute ${
          renderingElem.length !== 0 ? "hidden" : "block"
        } top-50 md:top-40 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        No Employ Yet!
      </p>

      <ol className="flex flex-col md:flex-row items-center gap-4  overflow-y-auto md:overflow-x-auto h-[50vh] md:h-auto">
        {renderingElem}
      </ol>
    </div>
  );
};

export default Render;
