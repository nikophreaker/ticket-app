import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  event: (e: any) => void;
};
const EventCard: React.FC<Props> = ({ event }) => {
  const eventData = event as any
  return (
    <div
      className={
        "max-w-lg rounded-2xl overflow-hidden shadow-lg m-5 bg-card hover:m-4"
      }
    >
      <Link href={`/event/${eventData.slug}`}>
        <Image
          src="/images/eventCover.png"
          alt="Event Cover"
          width={350}
          height={200}
          className="w-full"
        />
        <div className="flex px-6 py-6 2xl:p-6 xl:p-6 lg:p-3 md:p-3 sm:p-2 xs:p-2">
          <div className="mt-2 me-5 text-center">
            <h2 className="text-blue-700 font-semibold text-sm 2xl:text-sm xl:text-sm lg:text-xs md:text-xs sm:text-xs xs:text-xs">APR</h2>
            <h2 className="text-3xl font-bold 2xl:text-3xl xl:text-2xl lg:text-lg md:text-sm sm:text-sm xs:text-xs">14</h2>
          </div>
          <div className="">
            <div className="font-bold text-xl mb-2 italic 2xl:text-xl xl:text-lg lg:text-lg md:text-sm sm:text-xs xs:text-xs">
              #PEKAN5 BRI LIGA 1 PERSIJA VS PERSIB
            </div>
            <p className="text-gray-700 text-xl font-semibold 2xl:text-xl xl:text-sm lg:text-sm md:text-xs sm:text-xs xs:text-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        {/* <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #indonesia
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #liga1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #football
        </span>
      </div> */}
      </Link>
    </div>
  );
};

export default EventCard;
