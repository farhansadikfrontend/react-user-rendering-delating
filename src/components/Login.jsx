import { nanoid } from "nanoid";
import { useState } from "react";

const Login = (props) => {
  const users = props.users;
  const setUsers = props.setUsers;
  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState("");

  const chaneNameHandeler = (e) => {
    setFullname(e.target.value);
  };
  const chaneAgeHandeler = (e) => {
    setAge(e.target.value);
  };
  const SubmitHandeler = (e) => {
    e.preventDefault();
    const newUser = {
      fullname: fullname,
      age: age,
      id: nanoid(),
    };
    const copyUsers = [...users];
    copyUsers.push(newUser);
    setUsers(copyUsers);
    setFullname("");
    setAge("");
  };

  return (
    <form
      onSubmit={SubmitHandeler}
      className="w-[100%] flex items-center justify-center"
    >
      <div className="w-[95%] md:w-[70%] lg:w-[50%] p-6 flex gap-2 flex-col">
        <h2 className="text-[clamp(25px,5vw,30px)] text-green-600 text-center mb-6">
          Creating Employ Details
        </h2>{" "}
        <label htmlFor="fullname">Fullname</label>
        <input
          className="border-b pb-2 outline-0 w-[100%] mb-4"
          required
          id="fullname"
          onChange={chaneNameHandeler}
          value={fullname}
          type="text"
          placeholder="enter your full name"
        />
        <label htmlFor="age">Age</label>
        <input
          className="border-b pb-2 outline-0 w-[100%] mb-4"
          required
          id="age"
          onChange={chaneAgeHandeler}
          value={age}
          type="number"
          placeholder="enter your age"
        />
        <button className="border py-1 px-4 rounded cursor-pointer active:scale-[0.98] bg-green-600 text-white w-[100px]">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
