'use client';

import { useState } from 'react';

export default function Sidebar() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <aside
      className={` ${
        mobileSidebarOpen ? 'translate-x-0 opacity-100 z-20' : 'translate-x-[200px] opacity-0 z-[-1]'
      } md:hidden bg-white p-4 text-center absolute top-[65px] right-0 w-full sm:w-[50%] rounded-md transition-all duration-300`}
    >
      <div className="relative mb-5">
        <input className="py-1.5 pr-4 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-[#3B9DF8]" placeholder="Search..." />
        <IoIosSearch className="absolute top-[8px] left-3 text-gray-500 text-[1.3rem]" />
      </div>
      <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
        <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
          home
        </li>

        <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
          features
        </li>

        <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
          blogs
        </li>

        <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
          shop
        </li>
      </ul>
    </aside>
  );
}
