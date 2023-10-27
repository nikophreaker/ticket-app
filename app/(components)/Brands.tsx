import React from "react";
import Image from "next/image";

const maps = [
  { image: "/images/spotify.png" },
  { image: "/images/google.png" },
  { image: "/images/stripe.png" },
  { image: "/images/youtube.png" },
  { image: "/images/microsoft.png" },
  { image: "/images/medium.png" },
  { image: "/images/zoom.png" },
  { image: "/images/uber.png" },
  { image: "/images/grab.png" },
]

const listIndex: any = []

const limitList = 5;

maps.forEach((data, index) => {
  if (index % limitList == 0) {
    listIndex.push(
      index
    )
  }
})

const Brands = () => {
  return (
    <div className="flex flex-col w-full m-10 justify-center items-center text-center">
      <div className="w-4/12">
        <h1 className="text-blue-950 font-bold text-4xl mt-6 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-xl">
          Join these brands
        </h1>
        <p className="font-medium text-lg mt-3 2xl:text-lg xl:text-lg lg:text-lg md:text-sm sm:text-xs xs:text-xs">
          We&apos;ve had the pleasure of working with industry-defining brands. These
          are just some of them.
        </p>
      </div>
      {listIndex.map((indexLength: any) => {
        return <div key={indexLength} className="flex flex-row justify-center items-center w-9/12 mt-10 select-none">
          {maps.map((data: any, index: any) => {
            if (index < (indexLength + limitList) && index >= indexLength) {
              return (
                <Image
                  key={index}
                  src={data.image}
                  alt="Spotify"
                  width={150}
                  height={200}
                  className="mx-5"
                  priority
                  style={{ width: "auto", height: "auto" }}
                />
              );
            }
          })}
        </div>
      })}
    </div >
  );
};

export default Brands;
