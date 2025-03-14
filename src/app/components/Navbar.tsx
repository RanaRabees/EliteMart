"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="bg-green-500 text-white p-4 shadow-[0_0_20px_rgba(34,197,94,0.8)] drop-shadow-md">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <Link href="/" className="text-4xl font-bold">
                        EliteMart
                    </Link>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                    <ul className={`md:flex space-x-6 hidden`}>
                        <li>
                            <button className="px-4 py-3 bg-green-400 text-white text-[16px] font-semibold rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.8)] drop-shadow-md hover:bg-[#84b19680] transition">
                                <Link href="/">Home</Link>
                            </button>
                        </li>
                        <li>
                            <button className="px-4 py-3 bg-green-400 text-white text-[16px] font-semibold rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.8)] drop-shadow-md hover:bg-[#84b19680] transition">
                                <Link href="#">About</Link>
                            </button>
                        </li>
                        <li>
                            <button className="px-4 py-3 bg-green-400 text-white text-[16px] font-semibold rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.8)] drop-shadow-md hover:bg-[#84b19680] transition">
                                <Link href="#">Contact</Link>
                            </button>
                        </li>
                        <li>
                            <button className="px-4 py-3 bg-green-400 text-white text-[16px] font-semibold rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.8)] drop-shadow-md hover:bg-[#84b19680] transition">
                                <Link href="#">Products</Link>
                            </button>
                        </li>
                    </ul>
                </div>
                {isOpen && (
                    <div className="md:hidden mt-[30px]">
                        <ul className="flex flex-col space-y-8 text-center">
                            <li><Link href="/" className="px-[20px] py-3 text-[18px] rounded-2xl bg-green-700">Home</Link></li>
                            <li><Link href="/about" className=" px-[26px] py-3 text-[18px] rounded-2xl bg-green-700 ">About</Link></li>
                            <li><Link href="/contact" className=" px-[30px] py-3 text-[18px] rounded-2xl bg-green-700 ">Contact</Link></li>
                            <li><Link href="/products" className=" px-[35px] py-3 text-[18px] rounded-2xl bg-green-700 ">Products</Link></li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
}
