import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Context } from "../context/Wrapper";

const Login = () => {
  const [employs, setemploys] = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const SubmitHandeler = (data) => {
    data.id = nanoid();

    const copyemploys = [...employs];
    copyemploys.push(data);
    setemploys(copyemploys);

    toast.success("New emoloy created");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(SubmitHandeler)}
      className="w-[100%] flex items-center justify-center"
    >
      <div className="w-[95%] md:w-[70%] lg:w-[50%] px-6 flex gap-0 flex-col">
        <h2 className="text-2xl md:text-4xl text-orange-400 text-center my-2">
          Create Employ
        </h2>{" "}
        <label className="pt-4" htmlFor="fullname">
          Fullname
        </label>
        <input
          required
          {...register("fullname", { required: "Fullname can not be empty" })}
          className="border-b pb-1 outline-0 w-[100%]"
          id="fullname"
          type="text"
          placeholder="enter employs fullname"
        />
        <small className="text-red-500">{errors?.fullname?.message}</small>
        <label className="pt-4" htmlFor="age">
          Age
        </label>
        <input
          required
          {...register("age")}
          className="border-b pb-1 outline-0 w-[100%]"
          id="age"
          type="number"
          placeholder="enter employs age"
        />
        <label className="pt-4" htmlFor="salary">
          Salary
        </label>
        <input
          required
          {...register("salary")}
          className="border-b pb-1 outline-0 w-[100%]"
          id="salary"
          type="number"
          placeholder="enter employs salary"
        />
        <button className="border mt-4 py-1 px-4 rounded cursor-pointer active:scale-[0.98] bg-orange-400 text-white w-[100px]">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
