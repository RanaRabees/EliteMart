import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="relative overflow-hidden bg-green-200">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-green-600 sm:text-6xl">
                Fresh deals have landed at your local mart!
              </h1>
              <p className="mt-4 text-xl text-green-400">
                This season, we’re bringing you unbeatable discounts on everyday essentials, fresh produce, and household must-haves. 
                You deserve a place where quality meets affordability. Don&apos;t miss out—shop smart, save big, and stock up before the best deals disappear!
              </p>
            </div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <Image
                            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                            alt="Product 1"
                            width={176}
                            height={256}
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                            alt="Product 2"
                            width={176}
                            height={256}
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                            alt="Product 3"
                            width={176}
                            height={256}
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                            alt="Product 4"
                            width={176}
                            height={256}
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                            alt="Product 5"
                            width={176}
                            height={256}
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                            alt="Product 6"
                            width={176}
                            height={256}
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            alt="Product 7"
                            width={176}
                            height={256}
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="mt-6 px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.8)] drop-shadow-md hover:bg-green-700 transition">
                  Buy Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-[#cff7dd] py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-green-300">
            Discover the Best Products at Unbeatable Prices!
          </h1>
          <p className="mt-4 text-lg text-green-600">
            Browse our exclusive collection and find amazing deals on top-quality items.
          </p>
          <button className="mt-6 px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.8)] drop-shadow-md hover:bg-green-700 transition">
            Explore Now
          </button>
        </div>
      </div>
    </>
  );
}
