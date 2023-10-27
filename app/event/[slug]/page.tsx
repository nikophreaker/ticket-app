'use client'

import Brands from '@/app/(components)/Brands'
import Carousel from '@/app/(components)/Carousel'
import EventInfoHeader from '@/app/(components)/EventInfoHeader'
import SearchEvent from '@/app/(components)/SearchEvent'
import Image from 'next/image'
import React from 'react'
import useSWR from 'swr'

const fetcher = (url: any) => fetch(url).then((res) => res.json());
const Page = () => {
    const { data, error, isLoading } = useSWR(
        "api/staticdata",
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
        <main className="w-full">
            <div
                className="flex w-full h-[80vh] carousel-item relative ease-out duration-1000 2xl:h-[80vh] xl:h-[70vh]"
            >
                <Image
                    src={data[0].headerCover}
                    alt="Header Cover"
                    fill
                    className="w-full select-none"
                    priority
                />
                <div className="absolute flex justify-center items-center mb-4 w-full h-[80vh] overflow-hidden m-auto 2xl:h-[80vh] xl:h-[70vh]">
                    <h1 className="italic text-default-text text-6xl font-bold 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl">
                        {data[0].eventName}
                    </h1>
                </div>
            </div>
            <div className="flex justify-center -mt-36 2xl:-mt-28 xl:-mt-28 lg:-mt-24 md:-mt-20">
                <EventInfoHeader eventInfo={data[0]} />
            </div>
            <div className="mt-28 m-36 2xl:m-56 xl:m-36 lg:m-24 md:m-20 sm:m-16 xs:m-14">
                <div className="flex justify-end mb-10">

                </div>
                <div className="border-b-2 border-black mb-5">

                </div>
                <div>
                </div>
                <div className="w-full flex justify-center mt-20">
                    <button className="flex rounded-full text-pink-600 py-4 px-7 outline-2 outline hover:text-pink-700 items-center">
                        <h2 className="text-lg font-medium 2xl:text-lg xl:text-lg lg:text-lg md:text-sm sm:text-xs xs:text-xs">Load More</h2>
                    </button>
                </div>
            </div>
            <div className="flex w-full h-[13vw] bg-footer items-end 2xl:h-[16vw] xl:h-[15vw] md:h-[18vw] justify-center">
                <Image
                    src="/images/newEvent.png"
                    alt="Event Picture"
                    width={420}
                    height={500}
                    priority
                    className="w-[35vw]"
                // style={{ width: "auto", height: "auto" }}
                />
                <div className="p-10 w-3/12 2xl:p-10 xl:p-10 lg:p-6 md:p-4">
                    <h1 className="text-default-text font-semibold text-2xl 2xl:text-lg xl:text-lg lg:text-lg md:text-xs sm:text-xs xs:text-xs">
                        BUAT ACARA SENDIRI
                    </h1>
                    <p className="text-default-text font-medium text-lg mt-3 2xl:text-lg xl:text-sm lg:text-sm md:text-xs sm:text-xs xs:text-xs">
                        Loerm ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <button className="rounded-full text-default-text bg-pink-600 py-3 px-16 hover:bg-pink-700 mt-6 2xl:px-16 xl:px-14 lg:px-6 md:px-4">
                        <h2 className="text-lg font-medium 2xl:text-lg xl:text-lg lg:text-sm md:text-xs sm:text-xs xs:text-xs">Create To Email</h2>
                    </button>
                </div>
            </div>
            <Brands />
            <div className=""></div>
        </main>
    )
}

export default Page