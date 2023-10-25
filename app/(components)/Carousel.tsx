import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import useSWR from "swr";

/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */

const fetcher = (url: any) => fetch(url).then((res) => res.json());
export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/staticdata",
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

  const handleNextSlide = () => {
    let newSlide = currentSlide === data.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? data.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  // setInterval(() => {
  //   handleNextSlide();
  // }, 7000);

  return (
    <div className="carousel w-full relative">
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="select-none absolute left-[10vw] m-auto text-6xl top-40 cursor-pointer text-white z-20 2xl:left-[10vh] md:left-[5vh]"
      />
      {data.map((image: any, index: any) => {
        return (
          <div
            key={image.id}
            className="flex w-full h-[80vh] carousel-item relative ease-out duration-1000 2xl:h-[80vh] md:h-[70vh]"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <img src={image.headerCover} className="w-full" />
            <div className="absolute flex mb-4 w-full h-[80vh] overflow-hidden m-auto bg-headerCover 2xl:h-[80vh] md:h-[70vh]">
              <div className="flex w-1/2 ms-32">
                <img
                  className="flex-end select-none"
                  src={image.addHeaderCover}
                ></img>
              </div>
              <div className="flex w-1/2 items-center justify-center">
                <div className="">
                  <h1 className="italic text-default-text text-6xl font-bold 2xl:text-6xl md:text-5xl">
                    {image.title}
                  </h1>
                  <h5 className="italic text-pink-600 text-4xl font-bold 2xl:text-4xl md:text-3xl">
                    {image.subtitle}
                  </h5>
                  <p className="mt-10 text-default-text text-lg font-light me-60 2xl:mt-10 2xl:text-lg md:mt-8 md:text-sm">
                    {image.descriptionHeader}
                  </p>
                  <div className="mt-8 mb-16 select-none">
                    <button className="rounded-full text-default-text bg-pink-600 py-6 px-16 hover:bg-pink-700 me-5">
                      <h2 className="text-lg font-medium">Get Ticket</h2>
                    </button>
                    <button className="rounded-full text-default-text py-5 px-16 outline outline-2 hover:outline-4">
                      <h2 className="text-lg font-medium">Learn More</h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <AiOutlineRight
        onClick={handleNextSlide}
        className="select-none absolute right-[10vw] m-auto text-6xl top-40 cursor-pointer text-white z-20 2xl:right-[10vh] md:right-[5vh]"
      />
    </div>

    // <div className="relative">
    //   <AiOutlineLeft
    //     onClick={handlePrevSlide}
    //     className="select-none absolute left-[10vh] m-auto text-5xl top-40 cursor-pointer text-white z-20"
    //   />
    //   <div className="w-full h-[80vh] flex overflow-hidden relative m-auto">
    //     <Swipe
    //       onSwipeLeft={handleNextSlide}
    //       onSwipeRight={handlePrevSlide}
    //       className="relative z-10 w-full h-full"
    //     >
    //       {/* <div
    //         className="flex transition ease-out duration-75"
    //         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
    //       ></div> */}
    //       {data.map((image: any, index: any) => {
    //         if (index === currentSlide) {
    //           return (
    //             <div
    //               key={image.id}
    //               className="flex w-full h-[80vh]"
    //               style={{
    //                 backgroundImage: `url(${image.headerCover})`,
    //                 backgroundRepeat: "no-repeat",
    //                 backgroundSize: "100% 100%",
    //                 objectFit: "cover",
    //                 position: "absolute",
    //               }}
    //             >
    //               <div className="flex mb-4 w-full h-[80vh] overflow-hidden relative m-auto bg-headerCover">
    //                 <div className="flex w-1/2 ms-32">
    //                   <img
    //                     className="flex-end select-none"
    //                     src={image.addHeaderCover}
    //                   ></img>
    //                 </div>
    //                 <div className="flex w-1/2 items-center justify-center">
    //                   <div className="">
    //                     <h1 className="italic text-default-text text-6xl font-bold">
    //                       {image.title}
    //                     </h1>
    //                     <h5 className="italic text-pink-600 text-4xl font-bold">
    //                       {image.subtitle}
    //                     </h5>
    //                     <p className="mt-14 text-default-text text-lg font-light me-60">
    //                       {image.descriptionHeader}
    //                     </p>
    //                     <div className="mt-16 select-none">
    //                       <button className="rounded-full text-default-text bg-pink-600 py-6 px-16 hover:bg-pink-700 me-5">
    //                         <h2 className="text-lg font-medium">Get Ticket</h2>
    //                       </button>
    //                       <button className="rounded-full text-default-text py-5 px-16 outline outline-2 hover:outline-4">
    //                         <h2 className="text-lg font-medium">Learn More</h2>
    //                       </button>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               {/* <Image
    //                 key={image.id}
    //                 src={image.headerCover}
    //                 alt=""
    //                 fill
    //                 object-fit="contain"
    //                 className="animate-fadeIn"
    //               /> */}
    //             </div>
    //           );
    //         }
    //       })}
    //     </Swipe>
    //   </div>
    //   <AiOutlineRight
    //     onClick={handleNextSlide}
    //     className="select-none absolute right-[10vh] m-auto text-5xl top-40 cursor-pointer text-white z-20"
    //   />
    //   <div className="relative flex justify-center p-2">
    //     {data.map((_: any, index: any) => {
    //       return (
    //         <div
    //           className={
    //             index === currentSlide
    //               ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
    //               : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
    //           }
    //           key={index}
    //           onClick={() => {
    //             setCurrentSlide(index);
    //           }}
    //         />
    //       );
    //     })}
    //   </div>
    // </div>
  );
}
