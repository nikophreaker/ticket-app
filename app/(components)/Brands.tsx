import React from "react";
import Image from "next/image";

const Brands = () => {
  return (
    <div className="flex flex-col w-full m-10 justify-center items-center text-center">
      <div className="w-4/12">
        <h1 className="text-blue-950 font-bold text-4xl mt-6">
          Join these brands
        </h1>
        <p className="font-medium text-lg mt-3">
          We&apos;ve had the pleasure of working with industry-defining brands. These
          are just some of them.
        </p>
      </div>
      <div className="flex flex-row justify-center items-center w-9/12 mt-10 select-none">
        <Image
          src="/images/spotify.png"
          alt="Spotify"
          width={150}
          height={200}
          className="mx-5"
        />
        <Image
          src="/images/google.png"
          alt="Google"
          width={150}
          height={200}
          className="mx-5"
        />
        <Image
          src="/images/stripe.png"
          alt="Stripe"
          width={150}
          height={200}
          className="mx-5"
        />
        <Image
          src="/images/youtube.png"
          alt="Youtube"
          width={150}
          height={200}
          className="mx-5"
        />
        <Image
          src="/images/microsoft.png"
          alt="Microsoft"
          width={150}
          height={200}
          className="mx-5"
        />
      </div>
      <div className="flex flex-row justify-center items-center w-9/12 mt-10 select-none">
        <Image
          src="/images/medium.png"
          alt="Medium"
          width={150}
          height={200}
          className="mx-5"
        />
        <Image
          src="/images/zoom.png"
          alt="Zoom"
          width={150}
          height={200}
          className="mx-5"
        />
        <Image
          src="/images/uber.png"
          alt="Uber"
          width={150}
          height={200}
          className="mx-5"
        />
        <Image
          src="/images/grab.png"
          alt="Grab"
          width={150}
          height={200}
          className="mx-5"
        />
      </div>
    </div>
  );
};

export default Brands;
