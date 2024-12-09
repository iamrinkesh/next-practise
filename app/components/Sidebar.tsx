"use client";

import { IoHome, IoDocuments } from "react-icons/io5";
import { HiDocument } from "react-icons/hi2";
import { GiSpanner } from "react-icons/gi";
import { FaAlipay } from "react-icons/fa";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

type MenuKey = "dashboard" | "pages" | "applications" | "ecommerce" | "authentication";

export default function Sidebar() {
    const [openMenu, setOpenMenu] = useState<MenuKey | "">("");
    const [activeMenu, setActiveMenu] = useState<MenuKey | "">("");

    const toggleMenu = (menu: MenuKey) => {
        setOpenMenu(openMenu === menu ? "" : menu);
        setActiveMenu(menu);
    };

    const isActive = (menu: MenuKey) => activeMenu === menu;

    return (
      <div className="h-screen w-64 bg-[#090C27] text-white fixed top-0 left-0 flex flex-col shadow-lg">
        <div className="flex space-x-3 items-center justify-center py-4 px-6">
            <span className="text-4xl"><FaAlipay/></span>
            <h1 className="text-xl">DEMO UI PRO</h1>
        </div>
        <div
            className="w-[70%] h-[0.5px] mb-8 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"
            aria-hidden="true"
        ></div>


    <nav className="flex-1 px-6">
        <ul className="space-y-4">
            <li>
            <div
                className={`flex items-center justify-between px-4 py-2 rounded-xl ${
                isActive("dashboard") ? "bg-[#1A1F37]" : ""
                }`}
            >
                <a
                href="#"
                className={`flex items-center space-x-2 ${
                    isActive("dashboard") ? "font-bold" : "text-gray-700"
                }`}
                onClick={() => setActiveMenu("dashboard")}
                >
                <span
                    className={`p-2 rounded-xl ${
                    isActive("dashboard") ? "bg-[#4318FF] text-white" : "bg-gray-200"
                    }`}
                >
                    <IoHome />
                </span>
                <span className="text-white">Dashboards</span>
                </a>
            </div>
            </li>

            {[
            { key: "pages", label: "Pages", icon: <HiDocument /> },
            { key: "applications", label: "Applications", icon: <GiSpanner /> },
            { key: "ecommerce", label: "Ecommerce", icon: <GiSpanner /> },
            { key: "authentication", label: "Authentication", icon: <IoDocuments /> },
            ].map((menu) => (
            <li key={menu.key}>
                <div
                className={`flex items-center justify-between px-4 py-2 rounded-xl ${
                    isActive(menu.key) ? "bg-[#1A1F37]" : ""
                }`}
                >
                <button
                    onClick={() => toggleMenu(menu.key)}
                    className={`flex items-center space-x-2 w-full text-left ${
                    isActive(menu.key) ? "font-bold" : "text-gray-700"
                    }`}
                >
                    <span
                    className={`p-2 rounded-xl ${
                        isActive(menu.key) ? "bg-[#4318FF] text-white" : "bg-gray-200"
                    }`}
                    >
                    {menu.icon}
                    </span>
                    <span className="text-white">{menu.label}</span>
                </button>
                {/* {openMenu === menu.key ? <FiChevronUp /> : <FiChevronDown />} */}
                </div>
                {/* {openMenu === menu.key && (
                <ul className="pl-6 mt-2 space-y-2 list-disc">
                    <li>
                    <a href="#">Submenu 1</a>
                    </li>
                    <li>
                    <a href="#">Submenu 2</a>
                    </li>
                </ul>
                )} */}
            </li>
            ))}
        </ul>
        </nav>
        <div className="p-6">
          <div className="bg-blue-700 text-center rounded-lg py-4 px-3">
            <p>Need help?</p>
            <a
              href="#"
              className="text-white underline font-semibold hover:text-blue-300"
            >
              Documentation
            </a>
          </div>
        </div>
      </div>
    );
}
  