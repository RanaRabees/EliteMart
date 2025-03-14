"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { TiStarFullOutline } from "react-icons/ti";
import { FiSearch } from "react-icons/fi";

interface Product {
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    thumbnail: string;
    tags?: string[];
    brand?: string;
    rating: number;
}

export default function All_Products() {
    const [products, setProducts] = useState<Product[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get(`https://dummyjson.com/products?limit=100`);
                if (res.status === 200) {
                    const filteredProducts = res.data.products.filter((product: Product) =>
                        product.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        product.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        (product.tags && product.tags.some(tag => tag?.toLowerCase().includes(searchTerm.toLowerCase())))
                    );
                    setProducts(filteredProducts.slice((page - 1) * 6, page * 6));
                    setTotalPages(Math.ceil(filteredProducts.length / 6));
                }
            } catch (error) {
                console.error("Error fetching products.", error);
            }
        };
        fetchProducts();
    }, [page, searchTerm]);

    const renderStars = (rating: number) => (
        <div className="flex items-center space-x-1 text-green-500">
            {[...Array(Math.floor(rating))].map((_, i) => (
                <TiStarFullOutline key={i} size={20} />
            ))}
        </div>
    );

    const capitalizeTags = (tags?: string[]) =>
        tags ? tags.map(tag => tag.replace(/\b\w/g, c => c.toUpperCase())).join(", ") : "N/A";

    return (
        <>
            <header className="container mx-auto px-6">
                <h1 className="text-4xl font-serif mb-10 font-bold text-gray-800">Explore Our Exclusive Products</h1>
                <div className="relative w-2/3 mx-auto">
                    <input
                        type="text"
                        placeholder="Search products by name, brand, or tags..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-3 pl-10 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                </div>
            </header>
            <div className="p-6 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {products.map(product => (
                        <Link key={product.id} href={`/products/${product.id}`}>
                            <div className="border p-4 rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.8)] drop-shadow-md hover:drop-shadow-lg transition transform hover:-translate-y-1 cursor-pointer bg-green-100">
                                <img src={product.thumbnail} alt={product.title} className="w-70 h-60 object-cover rounded-md" />
                                <h2 className="text-xl font-semibold text-gray-800 mt-2">{product.title}</h2>
                                <p className="text-sm text-gray-600">Brand: {product.brand || "Unknown"}</p>
                                <div className="flex justify-between items-center mt-1">
                                    <p className="text-sm text-gray-600">Tags: {capitalizeTags(product.tags)}</p>
                                    {renderStars(product.rating)}
                                </div>
                                <p className="text-lg font-bold text-gray-800 mt-1 inline-block">${product.price}</p>
                                {product.discountPercentage > 0 && (
                                    <span className="bg-red-200 text-red-800 px-2 py-1 rounded-full text-sm ml-2">
                                        {product.discountPercentage}% OFF
                                    </span>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="flex justify-center mt-6 space-x-4 text-center">
                    <button className={`px-4 py-2 bg-green-600 text-lg font-semibold shadow-[0_0_20px_rgba(34,197,94,0.8)] drop-shadow-md hover:bg-green-700 transition text-white rounded-lg ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} onClick={() => setPage(page - 1)} disabled={page === 1}>
                        Previous
                    </button>
                    <span className="text-lg font-semibold">
                        Page <br className="block sm:hidden" /> {page} of {totalPages}
                    </span>
                    <button className={`px-4 py-2 bg-green-600 text-lg font-semibold shadow-[0_0_20px_rgba(34,197,94,0.8)] drop-shadow-md hover:bg-green-700 transition text-white rounded-lg ${page === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} onClick={() => setPage(page + 1)} disabled={page === totalPages}>
                        Next
                    </button>
                </div>
            </div>
        </>
    );
}
