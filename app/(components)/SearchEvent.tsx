import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { AiOutlineDown } from "react-icons/ai";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const SearchEvent = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="flex rounded-3xl shadow-lg bg-footer z-10">
      <div className="grid text-center items-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        <div
          className="group rounded-lg border border-transparent px-20 py-12 transition-colors w-[25vw]"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-lg text-default-text font-normal`}>
            Search Event
          </h2>
          <div className="border-b-2 border-gray-500">
            <input
              className="appearance-none italic bg-transparent border-none w-full text-default-text text-2xl font-semibold mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-default-text"
              type="text"
              placeholder="BRI LIGA 1"
              aria-label="Event Search"
            />
          </div>
        </div>

        <div
          className="group rounded-lg border border-transparent px-20 py-12 transition-colors w-[25vw]"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-lg text-default-text font-normal`}>
            Place
          </h2>
          <div className="border-b-2 border-gray-500">
            <input
              className="appearance-none italic bg-transparent border-none w-full text-default-text text-2xl font-semibold mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-default-text"
              type="text"
              placeholder="INDONESIA"
              aria-label="Event Place"
            />
          </div>
        </div>

        <div
          className="group rounded-lg border border-transparent px-20 py-12 transition-colors w-[25vw]"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-lg text-default-text font-normal`}>Time</h2>
          <div className="border-b-2 border-gray-500 flex">
            <input
              className="appearance-none italic bg-transparent border-none w-full text-default-text text-2xl font-semibold mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-default-text"
              type="text"
              placeholder="ANY DATE"
              aria-label="Event Date"
            />
            <AiOutlineDown className="select-none m-auto text-2xl cursor-pointer text-white" />
            {/* <DateTimePicker
              className="appearance-none italic border-none w-full text-default-text text-2xl font-semibold mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-default-text"
              onChange={onChange}
              value={value}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchEvent;
