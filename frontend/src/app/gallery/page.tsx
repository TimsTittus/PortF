import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Gallery | Tims Tittus",
    description: "A glimpse into the fragments I’ve captured—projects, moments, and visuals.",
};

export default function GalleryPage() {
    return (
        <div className="bg-nb-cream py-12 min-h-screen">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="mb-16 text-center px-4">
                    <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-nb-black mb-6">
                        Gal<span className="text-nb-purple">lery</span>
                    </h2>

                    <p className="text-lg sm:text-xl font-bold text-nb-black/70 max-w-3xl mx-auto italic">
                        A glimpse into the fragments I’ve captured—projects, moments, and visuals that speak louder than captions.
                        No filters. Just the story beneath the surface.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 xl:gap-12 px-4 sm:px-0">
                    {[
                        { src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600", label: "VR", span: "" },
                        { src: "https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000", label: "Tech", span: "md:col-span-2" },
                        { src: "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000", label: "Dev", span: "md:col-span-2" },
                        { src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600", label: "Retro", span: "" },
                        { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&q=75&fit=crop&w=600", label: "AI", span: "" }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className={`group relative flex h-64 sm:h-80 md:h-96 items-end overflow-hidden border-4 border-nb-black shadow-nb-hard group ${item.span} hover:-translate-x-1 hover:-translate-y-1 transition-all active:shadow-none active:translate-x-1 active:translate-y-1`}
                        >
                            <img
                                src={item.src}
                                loading="lazy"
                                alt={item.label}
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-nb-black via-transparent to-transparent opacity-60"></div>

                            <div className="relative ml-6 mb-6">
                                <span className="bg-nb-yellow border-2 border-nb-black px-4 py-1 text-lg font-black uppercase text-nb-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    {item.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}