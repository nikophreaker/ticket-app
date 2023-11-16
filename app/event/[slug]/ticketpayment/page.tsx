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
            <div className="m-36 2xl:m-36 xl:m-36 lg:m-24 md:m-20 sm:m-16 xs:m-14">
                <div className='flex justify-center mb-5'>
                    <ul className="steps">
                        <li className="step step-secondary">Pilih tiket</li>
                        <li className="step step-secondary">Selesaikan Pembayaran</li>
                        <li className="step">Dapatkan Tiket</li>
                    </ul>
                </div>
                <div className="bg-pink-600 text-pink-600 w-[15vw] rounded-tr-full select-none">
                    .
                </div>
                <div className="font-bold italic text-4xl mt-5 mb-7">
                    Selesaikan Pembayaran
                </div>
                <span className='flex bg-blue-200 text-2xl justify-center py-2 my-6'>Selesaikan sebelum 00:00:00</span>
                <div className='grid grid-cols-2'>
                    <div className='m-5'>
                        <span className='text-blue-600 text-xl'>Pilih Metode Pembayaran</span>
                        <div className="font-normal text-xl mb-10">
                            <div className='text-start w-full'>
                                <div className='flex p-4 mb-4 bg-blue-200 rounded-full items-center'>
                                    <input type="radio" name="radio-1" className="radio radio-secondary me-5 bg-white w-10 h-10" checked />
                                    <span className='text-xl'>BANK TRANSFER</span>
                                </div>
                                <div className='flex p-4 mb-4 bg-blue-200 rounded-full items-center'>
                                    <input type="radio" name="radio-1" className="radio radio-secondary me-5 bg-white w-10 h-10" />
                                    <span className='text-xl'>BANK TRANSFER</span>
                                </div>
                                <div className='flex p-4 mb-4 bg-blue-200 rounded-full items-center'>
                                    <input type="radio" name="radio-1" className="radio radio-secondary me-5 bg-white w-10 h-10" />
                                    <span className='text-xl'>BANK TRANSFER</span>
                                </div>
                                <div className='flex p-4 mb-4 bg-blue-200 rounded-full items-center'>
                                    <input type="radio" name="radio-1" className="radio radio-secondary me-5 bg-white w-10 h-10" />
                                    <span className='text-xl'>OVO</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-xl p-6 shadow-lg'>
                        <div className='bg-blue-200 h-28 rounded-xl mb-1'></div>
                        <span className='text-blue-600 text-sm flex justify-end mb-1'>Lihat Detail Pesanan &gt;</span>
                        <div className='border-b-2 border-b-black border-dashed mb-7'></div>
                        <span className='text-xl flex'>Masukkan Kode Voucher</span>
                        <input type="text" placeholder="" className="input input-bordered w-full max-w-xs bg-white border-blue-200 mb-3" />
                        <span className='text-xl flex italic'>Masukkan Poin</span>
                        <input type="text" placeholder="" className="input input-bordered w-full max-w-xs bg-white border-blue-200" />
                        <button className="btn btn-primary bg-blue-500 border-transparent w-full text-xl font-normal mt-3 rounded-2xl">BAYAR</button>
                    </div>
                </div>
            </div>
            <div className=""></div>
        </main >
    )
}

export default Page