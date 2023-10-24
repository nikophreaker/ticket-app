import React from "react";

type Props = {
  event: (e: any) => void;
};
const EventCard: React.FC<Props> = ({ event }) => {
  console.log(event);
  return (
    <div
      className={
        "max-w-lg rounded-2xl overflow-hidden shadow-lg m-5 bg-card hover:m-4"
      }
    >
      <img
        className="w-full"
        src="/images/eventCover.png"
        alt="Sunset in the mountains"
      />
      <div className="flex px-6 py-6">
        <div className="mt-2 me-5 text-center">
          <h2 className="text-blue-700 font-semibold text-sm">APR</h2>
          <h2 className="text-3xl font-bold">14</h2>
        </div>
        <div className="">
          <div className="font-bold text-xl mb-2 italic">
            #PEKAN5 BRI LIGA 1 PERSIJA VS PERSIB
          </div>
          <p className="text-gray-700 text-base font-semibold">
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
    </div>
  );
};

export default EventCard;
