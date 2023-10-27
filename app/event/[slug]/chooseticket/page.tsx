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
            <div className="mt-28 m-36 2xl:m-56 xl:m-36 lg:m-24 md:m-20 sm:m-16 xs:m-14">
                <div className='flex justify-center mb-5'>
                    <ul className="steps">
                        <li className="step step-secondary">Pilih tiket</li>
                        <li className="step">Selesaikan Pembayaran</li>
                        <li className="step">Dapatkan Tiket</li>
                    </ul>
                </div>
                <div className="bg-pink-600 text-pink-600 w-[15vw] rounded-tr-full select-none">
                    .
                </div>
                <div className="font-bold italic text-4xl mt-5 mb-7">
                    Pilihan Tiket
                </div>
                <div className="grid grid-cols-2 font-normal text-xl mb-7 text-justify bg-blue-200 w-full">
                    <div className='m-5'>
                        <span className='font-bold italic'>Dewasa</span>
                        <div className="grid grid-cols-2 rounded-2xl bg-blue-500">
                            <div className='m-5 w-full'>
                                <select className="select w-full max-w-xs mb-3 bg-blue-400 text-white font-bold italic text-xl">
                                    <option disabled selected>Pilih Tiket</option>
                                    <option>Ekonomi Selatan</option>
                                    <option>Ekonomi Timur</option>
                                    <option>Ekonomi Utara</option>
                                    <option>Kat 1 Barat Daya</option>
                                    <option>Ekonomi VIP Barat</option>
                                </select>
                                <span className='font-bold text-white text-xl'>IDR 000.000</span>
                                <span className='flex font-normal text-white text-sm justify-end'>Detail</span>
                            </div>
                            <div className='ms-10 mt-10'>
                                <button className="btn btn-square text-blue-500 bg-white text-2xl">
                                    -
                                </button>
                                <button className="btn btn-square mx-2 text-white bg-pink-600 text-2xl">
                                    0
                                </button>
                                <button className="btn btn-square text-blue-500 bg-white text-2xl">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='m-5'>
                        <span className='font-bold italic'>Anak-anak (Min 12th)</span>
                        <div className="grid grid-cols-2 rounded-2xl bg-blue-500">
                            <div className='m-5 w-full'>
                                <select className="select w-full max-w-xs mb-3 bg-blue-400 text-white font-bold italic text-xl">
                                    <option disabled selected>Pilih Tiket</option>
                                    <option>Ekonomi Selatan</option>
                                    <option>Ekonomi Timur</option>
                                    <option>Ekonomi Utara</option>
                                    <option>Kat 1 Barat Daya</option>
                                    <option>Ekonomi VIP Barat</option>
                                </select>
                                <span className='font-bold text-white text-xl'>IDR 000.000</span>
                                <span className='flex font-normal text-white text-sm justify-end'>Detail</span>
                            </div>
                            <div className='ms-10 mt-10'>
                                <button className="btn btn-square text-blue-500 bg-white text-2xl">
                                    -
                                </button>
                                <button className="btn btn-square mx-2 text-white bg-pink-600 text-2xl">
                                    0
                                </button>
                                <button className="btn btn-square text-blue-500 bg-white text-2xl">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 font-normal text-xl mb-7 items-center bg-blue-200 w-full">
                    <div className='m-5'>
                        <span className='flex font-normal'>Total Harga Tiket</span>
                        <span className='w-full font-bold text-pink-600 text-4xl'>IDR 000.000</span>
                    </div>
                    <div className=''>
                        <span className='flex justify-center font-normal italic'>Point bertambah</span>
                        <span className='flex justify-center font-bold text-black text-2xl'>000.000</span>
                    </div>
                    <div className='m-5 flex justify-end'>
                        <button className="flex rounded-2xl text-white py-4 px-7 bg-pink-600 hover:bg-pink-700 items-center">
                            <h2 className="text-xl font-medium italic px-5 2xl:text-xl xl:text-xl lg:text-lg md:text-sm sm:text-xs xs:text-xs">Beli Tiket</h2>
                        </button>
                    </div>
                </div>
                <div className="bg-pink-500 text-pink-500 w-[15vw] rounded-tr-full select-none">
                    .
                </div>
                <div className="font-bold italic text-4xl mt-5 mb-7">
                    Data Pemesanan
                </div>
                <div className='rounded-xl p-6 shadow-lg'>
                    <span className='italic'>Isi formulir ini dengan benar karena e-tiket akan dikirim ke alamat email sesuai data pesanan</span>
                    <div className="font-normal text-xl mb-10 grid grid-cols-2">
                        <div className='text-end m-5'>
                            <input type="text" placeholder="Nama Lengkap..." className="input w-full text-xl p-7 mb-7 bg-blue-200 placeholder:italic placeholder:text-gray-500" />
                            <input type="text" placeholder="No. KTP..." className="input w-full text-xl p-7 mb-7 bg-blue-200 placeholder:italic placeholder:text-gray-500" />
                            <input type="text" placeholder="No. Telp..." className="input w-full text-xl p-7 bg-blue-200 placeholder:italic placeholder:text-gray-500" />
                        </div>
                        <div className='m-5'>
                            <input type="text" placeholder="Email..." className="input w-full text-xl p-7 mb-7 bg-blue-200 placeholder:italic placeholder:text-gray-500" />
                            <input type="text" placeholder="Tanggal Lahir..." className="input w-full text-xl p-7 mb-7 bg-blue-200 placeholder:italic placeholder:text-gray-500" />
                            <input type="text" placeholder="Gender..." className="input w-full text-xl p-7 bg-blue-200 placeholder:italic placeholder:text-gray-500" />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <input type="checkbox" checked={false} className="checkbox checkbox-secondary" />
                        <span className='italic'>Data yang saya masukkan sudah benar dan bisa dipertanggung jawabkan</span>
                    </div>
                    <div className="w-full flex justify-center mt-10">
                        <button className="flex rounded-2xl text-pink-600 py-4 px-7 me-5 outline outline-pink-600 hover:text-white hover:bg-pink-600 items-center">
                            <h2 className="text-xl font-medium italic px-5 2xl:text-xl xl:text-xl lg:text-lg md:text-sm sm:text-xs xs:text-xs">BATAL</h2>
                        </button>
                        <button className="flex rounded-2xl text-white py-4 px-7 bg-pink-600 hover:bg-pink-700 items-center">
                            <h2 className="text-xl font-medium italic px-5 2xl:text-xl xl:text-xl lg:text-lg md:text-sm sm:text-xs xs:text-xs">BUAT PESANAN</h2>
                        </button>
                    </div>
                </div>
            </div>
            <div className=""></div>
        </main>
    )
}

export default Page