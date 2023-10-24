import React from "react";

const Brands = () => {
  return (
    <div className="flex flex-col w-full m-10 justify-center items-center text-center">
      <div className="w-4/12">
        <h1 className="text-blue-950 font-bold text-4xl mt-6">
          Join these brands
        </h1>
        <p className="font-medium text-lg mt-3">
          We've had the pleasure of working with industry-defining brands. These
          are just some of them.
        </p>
      </div>
      <div className="flex flex-row justify-center items-center w-9/12 mt-10 select-none">
        <img className="mx-5" src="/images/spotify.png"></img>
        <img className="mx-5" src="/images/google.png"></img>
        <img className="mx-5" src="/images/stripe.png"></img>
        <img className="mx-5" src="/images/youtube.png"></img>
        <img className="mx-5" src="/images/microsoft.png"></img>
      </div>
      <div className="flex flex-row justify-center items-center w-9/12 mt-10 select-none">
        <img className="mx-5" src="/images/medium.png"></img>
        <img className="mx-5" src="/images/zoom.png"></img>
        <img className="mx-5" src="/images/uber.png"></img>
        <img className="mx-5" src="/images/grab.png"></img>
      </div>
    </div>
  );
};

export default Brands;
