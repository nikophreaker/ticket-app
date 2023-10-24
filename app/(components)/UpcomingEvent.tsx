import React, { useState } from "react";
import EventCard from "./EventCard";
import useSWR from "swr";

const fetcher = (url: any) => fetch(url).then((res) => res.json());
const UpcomingEvent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/staticdata2",
    fetcher,
    { refreshInterval: 3000 }
  );

  if (error)
    return (
      <div className="flex w-full h-[80vh] relative justify-center items-center">
        <h4 className="">An Error occured</h4>
      </div>
    );

  if (isLoading)
    return (
      <div className="flex w-full h-[80vh] relative justify-center items-center">
        <div className="text-center">
          <h4 className="font-semibold text-xl">Please Wait</h4>
          <span className="loading loading-dots loading-lg"></span>
        </div>
      </div>
    );

  return (
    <div className="grid grid-cols-3 grid-rows-2">
      {data.map((data: any, index: any) => {
        return <EventCard event={data} />;
      })}
    </div>
  );
};

export default UpcomingEvent;
