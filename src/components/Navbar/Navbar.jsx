import React, { useState } from "react";
import Logo from "../../assets/website/logo.png";
import { FaBars, FaCaretDown, FaCartPlus } from "react-icons/fa"; // Updated import
import DarkMode from "./DarkMode";
import Sidebar from "../Sidebar/Sidebar";

const Menu = [
  {
    id: 1,
    name: "홈",
    link: "/#",
  },
  {
    id: 2,
    name: "베스트셀러",
    link: "/#services",
  },
];

const DropdownLinks = [
  {
    name: "유행하는 책들",
    link: "/#",
  },
  {
    name: "좋은 책들",
    link: "/#",
  },
  {
    name: "작가들",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 navbar">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="Logo" className="w-10" />
                북스
              </a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <button
                onClick={toggleSidebar}
                className="sm:hidden text-2xl"
              >
                <FaBars />
              </button>
              <div>
                <DarkMode />
              </div>
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-primary duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
                { }
                <li className="group relative cursor-pointer">
                  <a
                    href="/#home"
                    className="flex h-[72px] items-center gap-[2px]"
                  >
                    빠른 링크들{" "}
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block  ">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
              <button
                onClick={() => handleOrderPopup()}
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
              >
                주문
                <FaCartPlus className="text-xl text-white drop-shadow-sm cursor-pointer" /> {/* Updated icon */}
              </button>
              <button
                onClick={toggleSidebar}
                className="text-2xl"
              >
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Navbar;
