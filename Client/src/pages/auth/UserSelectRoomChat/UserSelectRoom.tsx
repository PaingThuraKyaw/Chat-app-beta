import { Controller, useForm } from "react-hook-form";
import SelcetBox from "./UserSelectBox";
import { SelectPropSelect } from "../../../typed/type";
import { useNavigate } from "react-router-dom";
import { connect } from "socket.io-client";
import useChatStore from "../../../store/chat/client";
const UserSelectRoom = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SelectPropSelect>({
    defaultValues: {
      select: "React Js",
    },
  });

  const { setSocket } = useChatStore();

  const navigate = useNavigate();

  const handler = (value: SelectPropSelect) => {
    const socket = connect("http://localhost:3000");
    setSocket(socket);
    navigate("/room", {
      state: value,
    });
  };

  return (
    <div className=" h-screen flex items-center justify-center">
      <div>
        <h3 className=" text-2xl font-semibold mb-2">Select Your Room</h3>
        <form
          className=" space-y-5 w-[350px] border px-6 py-4"
          onSubmit={handleSubmit((value) => handler(value))}
        >
          {/* username */}
          <div>
            <label htmlFor="username" className=" mb-1 block">
              Username
            </label>
            <input
              type="text"
              id="username"
              className=" w-[300px] outline-none py-2 px-3 rounded-md focus:ring-1 focus:ring-blue-100 duration-300 transition border-2 focus:border-[#ace6f6] border-zinc-500/90"
              placeholder="Username"
              {...register("username")}
            />
            <p className=" fontsem text-sm text-red-500 mt-1">
              {errors.username?.message}
            </p>
          </div>

          {/* select */}
          <Controller
            name="select"
            control={control}
            render={({ field }) => <SelcetBox field={field} />}
          />
          <button className=" rounded-md active:scale-95 transition-all duration-300 w-full bg-black py-2 text-white/90">
            Join Room
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserSelectRoom;
