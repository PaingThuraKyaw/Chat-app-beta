import Container from "../../components/Container";
import { AiFillWechat } from "react-icons/ai";
import "./Auth.css";
import { useForm } from "react-hook-form";
import { LoginProp } from "../../typed/type";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller } from "react-hook-form";
import SelcetBox from "./Login.selcetBox";
import { Link } from "react-router-dom";

const Login = () => {
  const schema = yup.object({
    email: yup.string().email().required("email is required"),
    password: yup.string().min(4).required("password must be greater than 4"),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginProp>({
    resolver: yupResolver(schema),
    defaultValues: {
      selector: "React Js",
    },
  });

  return (
    <Container>
      <div className=" flex items-center space-x-1 mt-2 fixed">
        <h2 className="text-3xl cursor-pointer font-bold  text-gradient">
          Room
        </h2>
        <AiFillWechat className=" text-2xl text-gray-700" />
      </div>

      <div className=" flex items-center  h-screen justify-center">
        <div>
          <h2 className=" text-2xl font-semibold text-center">Login</h2>
          <form
            onSubmit={handleSubmit((value) => {
              console.log(value);
            })}
            action=""
            className=" shadow-lg  rounded-md 0px 7px 29px 0px] space-y-3 mt-2 border px-7 py-5"
          >
            {/* email */}
            <div>
              <label htmlFor="Email" className=" mb-1 block">
                Email
              </label>
              <input
                type="email"
                id="Email"
                className=" w-[300px] outline-none py-2 px-3 rounded-md focus:ring-1 focus:ring-blue-100 duration-300 transition border-2 focus:border-[#ace6f6] border-zinc-500/90"
                placeholder="Email"
                {...register("email")}
              />
              <p className=" text-sm text-red-500 mt-2">
                {errors.email?.message}
              </p>
            </div>

            {/* password */}
            <div>
              <label htmlFor="Password" className=" mb-1 block">
                Password
              </label>
              <input
                type="password"
                id="Password"
                className=" w-[300px] outline-none py-2 px-3 rounded-md focus:ring-1 focus:ring-blue-100 duration-300 transition border-2 focus:border-[#ace6f6] border-zinc-500/90"
                placeholder="Password"
                {...register("password")}
              />
              <p className=" text-sm text-red-500 mt-1">
                {errors.password?.message}
              </p>
            </div>

            {/* select */}
            <Controller
              name="selector"
              control={control}
              render={({ field }) => <SelcetBox field={field} />}
            />

            <button
              type="submit"
              className="py-2 px-4 bg-black active:scale-95 duration-300 transition text-white rounded-md"
            >
              Login
            </button>
          </form>
          <div className=" justify-end mt-2 flex items-center space-x-1">
            <p className=" text-sm">Don't have an account?</p>
            <Link
              to={"/signUp"}
              className=" text-sm font-semibold underline underline-offset-2 hover:text-blue-500 duration-300 transition"
            >
              Singup
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
