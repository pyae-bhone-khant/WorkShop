"use client"

import { useState } from "react";

export default function Menulist() {
    const food = [
        {
            tag: "TRENDING NOW",
            title: "Grilled Summer Vegetable Skewers",
            author: "By David Chen",
            imgurl: "/img/food1.jpg",
        },
        {
            tag: "TRENDING NOW",
            title: "Classic Italian Seafood Pasta",
            author: "By Kevin Josh",
            imgurl: "/img/food2.jpg",
        },
        {
            tag: "TRENDING NOW",
            title: "Spicy Chicken Skewers",
            author: "By Anna Smith",
            imgurl: "/img/food3.jpg",
        },
    ];

    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((prev) => (prev + 1) % food.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + food.length) % food.length);
    };

    return (
        <div className="max-w-6xl mt-20 mx-auto px-4">
            <div
                className="relative h-60 rounded-2xl overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${food[index].imgurl})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-center px-10 text-white max-w-xl">
                    <p className="text-sm tracking-widest mb-3">
                        {food[index].tag}
                    </p>
                    <h1 className="text-5xl font-bold leading-tight mb-4">
                        {food[index].title}
                    </h1>
                    <span className="text-sm opacity-90">
                        {food[index].author}
                    </span>
                </div>

                {/* Buttons */}
                <div className="absolute bottom-6 right-6 z-20 flex gap-3">
                    <button
                        onClick={prev}
                        className="w-20  text-2xl font-bold h-10 rounded-full border border-orange-600 text-white flex items-center justify-center hover:bg-orange-600   transition"
                    >
                         {"<"}
                    </button>

                                        <button
                        onClick={next}
                        className="w-20 h-10  text-2xl font-bold rounded-full border border-orange-600 text-white flex items-center justify-center hover:bg-orange-600   transition"
                    >
                         {">"}
                    </button>
                  
                </div>
            </div>
        </div>
    );
}
