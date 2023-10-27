'use client'
import Link from "next/link";
import React, { useState } from "react";

const NavHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6 md:mr-72">
        {/* <img src={locofy} className="w-100 h-10 mr-2" alt="Logo" /> */}
      </div>
      <div className="block md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow md:flex md:items-center md:w-auto ${isOpen ? "block" : "hidden"}`}
      >
        <div className="flex justify-end text-md space-x-20 pe-20 lg:space-x-10 lg:pe-16 lg:text-sm md:space-x-10 md:pe-10 md:text-xs md:flex-grow">
          <Link className="block mt-4 md:inline-block md:mt-0 text-white-200 mr-4" href="/">Schedule</Link>
          <Link className="block mt-4 md:inline-block md:mt-0 text-white-200 mr-4" href="/">Ticket</Link>
          <Link className="block mt-4 md:inline-block md:mt-0 text-white-200 mr-4" href="/">Contact</Link>
          <Link className="block mt-8 md:inline-block md:mt-0 text-white-200 mr-4" href="/">
            <button className="rounded-full outline outline-offset-8 outline-2 px-6 hover:outline-4">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

// const NavHeader = () => {
//   return (
//     <div className="flex justify-end">
//       <nav className="p-6 pe-40 2xl:pe-40 2xl:p-6 xl:pe-36 xl:p-6 lg:pe-32 lg:p-5 md:pe-10 md:p-5 sm:pe-6 sm:p-0 2xl:block xl:block lg:block md:block sm:hidden xs:hidden">
//         <div className="flex items-center space-x-20 text-lg 2xl:text-lg xl:text-lg lg:text-sm lg:space-x-18 md:text-sm md:space-x-14 ">
//           <Link href="/">Schedule</Link>
//           <Link href="/">Ticket</Link>
//           <Link href="/">Contact</Link>
//           <Link href="/">
//             <button className="rounded-full outline outline-offset-8 outline-2 px-6 hover:outline-4">
//               Login
//             </button>
//           </Link>
//         </div>
//       </nav>
//       <div className="navbar block 2xl:hidden xl:hidden lg:hidden md:hidden sm:block xs:block">
//         <div className="navbar-start">
//           <a className="btn btn-ghost normal-case text-xl">Eventick</a>
//         </div>
//         <div className="navbar-center">
//         </div>
//         <div className="navbar-end">
//           <div className="dropdown">
//             <label tabIndex={0} className="btn btn-ghost btn-circle">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
//             </label>
//             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-header rounded-box w-52">
//               <li><Link href="/">Schedule</Link></li>
//               <li><Link href="/">Ticket</Link></li>
//               <li><Link href="/">Contact</Link></li>
//               <li><Link href="/">
//                 <button className="rounded-full outline outline-offset-8 outline-2 px-6 hover:outline-4">
//                   Login
//                 </button>
//               </Link></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default NavHeader;
