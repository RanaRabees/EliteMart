"use client";
import toast, { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { TiStarFullOutline } from "react-icons/ti";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

interface Product {
  images?: string[];
  title?: string;
  description?: string;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  category?: string;
  stock?: number;
  tags?: string[];
  brand?: string;
  sku?: string;
  weight?: number;
  dimensions?: { width: number; height: number; depth: number };
  shippingInformation?: string;
  availabilityStatus?: string;
  warrantyInformation: string;
  reviews?: { reviewerName?: string; comment?: string; rating?: number; date?: string; reviewerEmail?: string }[];
}

export default function Products_Details() {
  const [Info, setInfo] = useState<Product | null>(null);
  const pathname = usePathname();
  const id = pathname?.split("/")[2];

  useEffect(() => {
    const Fetch_Items_Details = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        if (res?.status === 200 && res?.data) {
          setInfo(res.data);
          toast.success("Product details loaded!");
        }
      } catch (error) {
        console.error("Error fetching product details:", error); // ✅ Logs the error for debugging
        toast.error("Failed to fetch product details");
      }
    };

    if (id) Fetch_Items_Details();
  }, [id]);

  const renderRating = (rating = 0) => {
    const wholeStars = Math.floor(rating);
    const decimalPart = rating - wholeStars;
    return (
      <div className="flex items-center space-x-1">
        {[...Array(wholeStars)].map((_, i) => (
          <TiStarFullOutline key={i} color="#28a745" size={25} />
        ))}
        {decimalPart > 0 && (
          <span className="flex items-center">
            <span className="text-gray-600 text-lg">•</span>
            <TiStarFullOutline color="#28a745" size={15} className="ml-1" />
          </span>
        )}
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="md:pt-10 w-4/5 mx-auto p-6 max-w-5xl">
        {Info && (
          <div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex justify-center w-full md:w-1/2">
                {Info.images?.length ? (
                  <Image
                    src={Info.images[0]}
                    width={300}
                    height={300}
                    alt="Product Image"
                    className="shadow-[0_0_20px_rgba(34,197,94,0.8)] drop-shadow-md rounded-lg hover:drop-shadow-lg transition-all object-cover"
                  />
                ) : null}
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {Info.title || "No title available"}
                </h2>
                <p className="text-gray-600 text-lg">{Info.description || "No description available"}</p>
                <div className="flex items-center mt-3">
                  <span className="text-lg font-bold text-gray-800">
                    ${Info.price || "N/A"}
                  </span>
                  {Info.discountPercentage ? (
                    <span className="ml-3 bg-green-300 text-green-800 px-3 py-1 rounded-full">
                      {Info.discountPercentage}% OFF
                    </span>
                  ) : null}
                </div>
                <p className="text-gray-700 mt-2"><strong>Rating:</strong> {Info.rating || "N/A"}</p>
                <p className="text-gray-700 mt-2"><strong>Category:</strong> {Info.category || "N/A"}</p>
                <p className="text-gray-700 mt-2"><strong>Stock:</strong> {Info.stock || "N/A"}</p>
                <p className="text-gray-700 mt-2"><strong>Tags:</strong> {Info.tags?.join(", ") || "N/A"}</p>
                <p className="text-gray-700 mt-2"><strong>Brand:</strong> {Info.brand || "N/A"}</p>
                <p className="text-gray-700 mt-2"><strong>Stock keeping unit:</strong> {Info.sku || "N/A"}</p>
                <p className="text-gray-700 mt-2"><strong>Weight:</strong> {Info.weight || "N/A"}g</p>
                <p className="text-gray-700 mt-2"><strong>Shipping Info:</strong> {Info.shippingInformation || "N/A"}</p>
                <p className="text-gray-700 mt-2"><strong>Availability:</strong> {Info.availabilityStatus || "N/A"}</p>
                <p className="text-gray-700 mt-1"><strong>Warranty:</strong> {Info?.warrantyInformation || "N/A"}</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">Reviews</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Info.reviews?.length ? (
                  Info.reviews.slice(0, 3).map((review, index) => (
                    <div key={index} className="bg-green-100 p-4 shadow-[0_0_20px_rgba(34,197,94,0.8)] drop-shadow-md rounded-lg hover:drop-shadow-lg transition-all">
                      <h4 className="font-semibold text-gray-800">{review.reviewerName || "Anonymous"}</h4>
                      <p className="text-gray-600 text-sm">{review.comment || "No comment provided"}</p>
                      <div className="mt-2">{renderRating(review.rating)}</div>
                      <p className="text-gray-500 text-xs mt-1">{review.date || "No date available"}</p>
                      <p className="text-gray-500 text-xs mt-1">{review.reviewerEmail || "No Email available"}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No reviews available</p>
                )}
              </div>
            </div>
          </div>
        )}
        <Toaster />
      </div>
      <Footer />
    </>
  );
}
