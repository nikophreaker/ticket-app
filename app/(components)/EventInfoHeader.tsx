import Image from "next/image";
import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { AiOutlineDown } from "react-icons/ai";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type Props = {
  eventInfo: any;
};
const EventInfoHeader: React.FC<Props> = ({ eventInfo }) => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="flex rounded-3xl shadow-lg bg-footer z-10">
      <div className="grid text-center items-center lg:mb-0 lg:grid-cols-2 lg:text-left md:grid-cols-2 md:text-left md:mb-0">
        <div
          className="group rounded-lg border border-transparent pe-20 transition-colors w-[25vw] 2xl:w-[25vw] lg:w-[30vw] lg:pe-10 md:w-[25vw] md:pe-8"
          rel="noopener noreferrer"
        >
          <Image
            src={eventInfo.eventImage}
            alt="image"
            width={5000}
            height={0}
            style={{ height: "auto" }}
            className={`rounded-s-3xl text-lg text-default-text font-normal 2xl:text-lg xl:text-lg lg:text-sm md:text-sm`}
          />
        </div>

        <div
          className="group rounded-lg border border-transparent px-20 py-12 transition-colors w-[25vw] 2xl:w-[25vw] lg:w-[30vw] lg:px-16 lg:py-8 md:w-[25vw] md:px-8 md:py-6"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-lg text-default-text font-normal 2xl:text-lg xl:text-lg lg:text-sm md:text-sm`}>
            {eventInfo.subtitle}
          </h2>
          <div className="flex menu-vertical text-center">
            <h2 className={`text-lg text-default-text font-normal 2xl:text-lg xl:text-lg lg:text-sm md:text-sm`}>
              {eventInfo.eventDate}
            </h2>
            <h2 className={`text-lg text-default-text font-normal 2xl:text-lg xl:text-lg lg:text-sm md:text-sm`}>
              {eventInfo.eventVenue}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInfoHeader;
