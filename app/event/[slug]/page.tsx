'use client'

import Brands from '@/app/(components)/Brands'
import Carousel from '@/app/(components)/Carousel'
import EventInfoHeader from '@/app/(components)/EventInfoHeader'
import SearchEvent from '@/app/(components)/SearchEvent'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'

const fetcher = (url: any) => fetch(url).then((res) => res.json());
const Page = () => {
    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_BASE_URL}api/staticdata`,
        fetcher,
        { refreshInterval: 10000 }
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
                className="flex items-center w-full h-[35vw] carousel-item relative ease-out duration-500 2xl:h-[35vw] xl:h-[35vw] lg:h-[35vw] md:h-[40vw] sm:h-[40vw] xs:h-[40vw]"
            >
                <Image
                    src={data[0].headerCover}
                    alt="Header Cover"
                    fill
                    className="w-full select-none"
                    priority
                />
                <div className="absolute text-center w-full overflow-hidden m-auto">
                    <h1 className="italic text-default-text text-6xl font-bold 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl">
                        {data[0].eventName}
                    </h1>
                </div>
            </div>
            <div className="flex justify-center -mt-20 2xl:-mt-20 xl:-mt-20 lg:-mt-24 md:-mt-20 sm:-mt-14 xs:-mt-10">
                <EventInfoHeader eventInfo={data[0]} />
            </div>
            <div className="mt-28 m-36 2xl:m-56 xl:m-36 lg:m-24 md:m-20 sm:m-16 xs:m-14">
                <div className="bg-pink-600 text-pink-600 w-[15vw] rounded-tr-full select-none">
                    .
                </div>
                <div className="font-bold italic text-4xl mt-5 mb-7">
                    Deskripsi Event
                </div>
                <div className="font-normal text-xl mb-7 text-justify">
                    {data[0].descriptionEvent}
                </div>
                <div className="bg-pink-500 text-pink-500 w-[15vw] rounded-tr-full select-none">
                    .
                </div>
                <div className="font-bold italic text-4xl mt-5 mb-7">
                    Stadium Map
                </div>
                <div className="font-normal text-xl mb-36">
                    <Image
                        src={data[0].eventVenueMap}
                        alt="image"
                        width={0}
                        height={0}
                        sizes="1000vw"
                        style={{ height: "auto", width: "auto" }}
                    />
                </div>
                <div className="font-normal text-xl mb-10">
                    <Image
                        src={data[0].eventMapAddress}
                        alt="image"
                        width={0}
                        height={0}
                        sizes="1000vw"
                        style={{ height: "auto", width: "auto" }}
                    />
                </div>
                <div className="w-full flex justify-center mt-20">
                    <Link href={`${data[0].slug}/chooseticket`}>
                        <button className="flex rounded-2xl text-white py-4 px-7 bg-pink-600 hover:bg-pink-700 items-center">
                            <h2 className="text-xl font-medium italic px-5 2xl:text-xl xl:text-xl lg:text-lg md:text-sm sm:text-xs xs:text-xs">PILIH TIKET</h2>
                        </button>
                    </Link>
                </div>
            </div>
            <div className=""></div>
        </main>
    )
}

export default Page