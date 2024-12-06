"use client";

import { IoHome, IoDocuments } from "react-icons/io5";
import { HiDocument } from "react-icons/hi2";
import { GiSpanner } from "react-icons/gi";
import { FaAlipay } from "react-icons/fa";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function Sidebar() {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const toggleMenu = (menu: string) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    return (
      <div className="h-screen w-64 bg-gradient-to-b from-indigo-900 to-purple-800 text-white fixed top-0 left-0 flex flex-col shadow-lg">
        <div className="flex space-x-3 items-center justify-center py-4 px-6">
            <span className="text-4xl"><FaAlipay/></span>
            <h1 className="text-xl">DEMO UI PRO</h1>
        </div>
        <div
            className="w-full h-1 mt-4 bg-gradient-to-r from-transparent via-gray-400 to-transparent"
            aria-hidden="true"
        ></div>

        <nav className="flex-1 px-6">
        <ul className="space-y-4">
            <li>
            <div className="flex items-center justify-between">
                <a href="#" className="flex items-center space-x-2 text-blue-300">
                <span>
                    <IoHome />
                </span>
                <span>Dashboards</span>
                </a>
            </div>
            </li>
            <li>
            <div className="flex items-center justify-between">
                <button
                onClick={() => toggleMenu("pages")}
                className="flex items-center space-x-2 w-full text-left"
                >
                <span>
                    <HiDocument />
                </span>
                <span>Pages</span>
                </button>
                {openMenu === "pages" ? <FiChevronUp /> : <FiChevronDown />}
            </div>
            {openMenu === "pages" && (
                <ul className="pl-6 mt-2 space-y-2 list-disc">
                <li>
                    <a href="#">Submenu 1</a>
                </li>
                <li>
                    <a href="#">Submenu 2</a>
                </li>
                </ul>
            )}
            </li>
            <li>
            <div className="flex items-center justify-between">
                <button
                onClick={() => toggleMenu("applications")}
                className="flex items-center space-x-2 w-full text-left"
                >
                <span>
                    <GiSpanner />
                </span>
                <span>Applications</span>
                </button>
                {openMenu === "applications" ? <FiChevronUp /> : <FiChevronDown />}
            </div>
            {openMenu === "applications" && (
                <ul className="pl-6 mt-2 space-y-2 list-disc">
                <li>
                    <a href="#">Submenu 1</a>
                </li>
                <li>
                    <a href="#">Submenu 2</a>
                </li>
                </ul>
            )}
            </li>
            <li>
            <div className="flex items-center justify-between">
                <button
                onClick={() => toggleMenu("ecommerce")}
                className="flex items-center space-x-2 w-full text-left"
                >
                <span>
                    <GiSpanner />
                </span>
                <span>Ecommerce</span>
                </button>
                {openMenu === "ecommerce" ? <FiChevronUp /> : <FiChevronDown />}
            </div>
            {openMenu === "ecommerce" && (
                <ul className="pl-6 mt-2 space-y-2 list-disc">
                <li>
                    <a href="#">Submenu 1</a>
                </li>
                <li>
                    <a href="#">Submenu 2</a>
                </li>
                </ul>
            )}
            </li>
            <li>
            <div className="flex items-center justify-between">
                <button
                onClick={() => toggleMenu("authentication")}
                className="flex items-center space-x-2 w-full text-left"
                >
                <span>
                    <IoDocuments />
                </span>
                <span>Authentication</span>
                </button>
                {openMenu === "authentication" ? <FiChevronUp /> : <FiChevronDown />}
            </div>
            {openMenu === "authentication" && (
                <ul className="pl-6 mt-2 space-y-2 list-disc">
                <li>
                    <a href="#">Submenu 1</a>
                </li>
                <li>
                    <a href="#">Submenu 2</a>
                </li>
                </ul>
            )}
            </li>
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
  