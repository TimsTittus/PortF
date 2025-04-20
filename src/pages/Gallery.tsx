import React from "react";

const ResponsiveImageGallery = () => {
return (
    <div className="bg-black dark:bg-gray-800 py-6 sm:py-8 lg:py-12 min-h-screen">
    <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
        <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-purple-600 lg:text-3xl dark:text-white">
            Gallery
            </h2>

            <p className="hidden max-w-screen-sm text-white dark:text-white md:block">
            A glimpse into the fragments I’ve captured—projects, moments, and visuals that speak louder than captions.
            No filters. Just the story beneath the surface.
            </p>
        </div>

        <a
            href="#"
            className="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
        >
            More
        </a>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
        <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
        >
            <img
            src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
            loading="lazy"
            alt="Photo by Minh Pham"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
            VR
            </span>
        </a>
        <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
        >
            <img
            src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
            Tech
            </span>
        </a>
        <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
        >
            <img
            src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
            loading="lazy"
            alt="Photo by Martin Sanchez"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
            Dev
            </span>
        </a>
        <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
        >
            <img
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
            loading="lazy"
            alt="Photo by Lorenzo Herrera"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
            Retro
            </span>
        </a>
        <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
            <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&q=75&fit=crop&w=600"
            loading="lazy"
            alt="Photo by John Doe"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg animate-fadeInUp">
            AI
            </span>
            </a>
        </div>
    </div>
    </div>
);
};

export default ResponsiveImageGallery;
