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
      <div className="grid text-center items-center lg:mb-0 lg:grid-cols-2 lg:text-left md:grid-cols-2 md:text-left md:mb-0 sm:grid-cols-2 xs:grid-cols-2">
        <div
          className="group rounded-lg border border-transparent pe-0 transition-colors w-[25vw] 2xl:w-[25vw] lg:w-[30vw] lg:pe-0 md:w-[25vw] md:pe-0"
          rel="noopener noreferrer"
        >
          <Image
            src={eventInfo.eventImage}
            alt="image"
            width={0}
            height={0}
            sizes="1000vw"
            style={{ height: "auto", width: "auto" }}
            className={`rounded-s-3xl text-lg text-default-text font-normal 2xl:text-lg xl:text-lg lg:text-sm md:text-sm`}
          />
        </div>

        <div
          className="group rounded-lg border border-transparent text-center px-0 py-0 transition-colors w-[25vw] 2xl:w-[25vw] lg:w-[30vw] lg:px-0 lg:py-0 md:w-[25vw] md:px-0 md:py-0"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center items-center mb-5 xl:mb-2 lg:mb-2 md:mb-0 sm:mb-0 xs:mb-0">
            <Image
              src={eventInfo.homeImage}
              alt="image"
              width={0}
              height={0}
              sizes="250vw"
              className={`h-auto w-auto`}
            />
            <span className="text-white text-xl px-5">X</span>
            <Image
              src={eventInfo.awayImage}
              alt="image"
              width={0}
              height={0}
              sizes="250vw"
              className={`h-auto w-auto`}
            />
          </div>
          <h2 className={`mb-3 text-2xl text-default-text font-bold 2xl:text-2xl xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs`}>
            {eventInfo.subtitle}
          </h2>
          <div className="flex menu-vertical text-lg text-default-text font-semibold 2xl:text-xl xl:text-xl lg:text-lg md:text-sm sm:text-sm xs:text-xs">
            <h2>
              {eventInfo.eventDate}
            </h2>
            <h2>
              {eventInfo.eventVenue}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInfoHeader;
