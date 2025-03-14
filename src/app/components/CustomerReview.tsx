"use client";

import { FaStar } from "react-icons/fa";
import Image from "next/image";

export default function CustomerReview() {
    const reviews = [
        {
            name: "Elijah Marks",
            img: "https://i.pravatar.cc/150?img=12",
            text: "EliteMart is a game-changer! High-quality products and a seamless shopping experience. Highly recommended!",
            stars: 5
        },
        {
            name: "Eleanor Martin",
            img: "https://i.pravatar.cc/150?img=20",
            text: "EliteMart makes online shopping effortless! A user-friendly website, fast delivery, and amazing deals keep me coming back!",
            stars: 4
        },
        {
            name: "Ethan Marshall",
            img: "https://i.pravatar.cc/150?img=25",
            text: "Top-notch quality at budget-friendly prices! EliteMart offers a wide selection of premium products that never disappoint!",
            stars: 3
        },
        {
            name: "Eliza Martinez",
            img: "https://i.pravatar.cc/150?img=35",
            text: "Shopping at EliteMart feels like a premium experience! Incredible variety, smooth checkout, and excellent customer service!",
            stars: 5
        }
    ];

    return (
        <section className="mb-28 text-gray-800">
            <header className="container mx-auto px-6">
                <h1 className="text-4xl font-serif mt-20 mb-16 font-bold text-gray-800">
                    Why Shoppers Love EliteMart!
                </h1>
            </header>
            <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="flex flex-col max-w-sm mx-4 my-6 border shadow-[0_0_20px_rgba(34,197,94,0.8)] drop-shadow-md hover:drop-shadow-lg transition transform hover:-translate-y-1 rounded-lg overflow-hidden"
                    >
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-green-100">
                            <p className="relative px-6 py-1 text-lg italic text-center text-green-900">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    fill="currentColor"
                                    className="w-8 h-8 text-green-400"
                                >
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>
                            </p>
                            <p className="text-lg italic text-center text-green-900">
                                &quot;{review.text}&quot;
                            </p>
                            <p className="relative px-6 py-1 text-lg italic text-center text-green-900">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    fill="currentColor"
                                    className="absolute right-0 w-8 h-8 text-green-400"
                                >
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-green-400 text-green-50">
                            <Image
                                src={review.img}
                                alt={review.name}
                                width={64}
                                height={64}
                                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full"
                            />
                            <p className="text-xl font-semibold">{review.name}</p>
                            <div className="flex space-x-1 mt-1">
                                {[...Array(review.stars)].map((_, i) => (
                                    <FaStar key={i} className="text-green-600" />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
