import { ControllerRenderProps } from "react-hook-form";
import { SelectPropSelect, SelectorProp } from "../../../typed/type";

const SelcetBox = ({
  field,
}: {
  field: ControllerRenderProps<SelectPropSelect, "select">;
}) => {
  //data
  const data: Array<SelectorProp> = ["React Js", "Node Js", "Will Talk"];

  // setRes("React Js");

  return (
    <div className="relative w-full">
      <label
        htmlFor="select"
        className="text-gray-600 text-sm font-semibold block"
      >
        Select Room
      </label>
      <div className="relative mt-2">
        <select
          id="select"
          name="select"
          className="block appearance-none w-full bg-white border border-gray-300 text-gray-800 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:ring focus:border-indigo-300 transition duration-300"
          onChange={(e) => {
            field.onChange(e.target.value);
          }}
          value={field.value}
        >
          {data.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SelcetBox;
