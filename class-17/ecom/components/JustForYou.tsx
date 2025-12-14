'use client';

import { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/types/product';

export default function JustForYou() {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'New Arrivals', 'Best Sellers', 'Featured'];

    const products: Product[] = [
        {
            id: 1,
            name: 'Classic Baseball Cap',
            price: 3500,
            originalPrice: 5000,
            discount: 30,
            image: '/assets/image/just-for-you/Rectangle 19333.png',
            category: 'Best Sellers',
        },
        {
            id: 2,
            name: 'Vintage Trucker Hat',
            price: 4000,
            originalPrice: 5500,
            discount: 27,
            image: '/assets/image/just-for-you/Rectangle 19333 (1).png',
            category: 'New Arrivals',
        },
        {
            id: 3,
            name: 'Premium Snapback',
            price: 4500,
            originalPrice: 6000,
            discount: 25,
            image: '/assets/image/just-for-you/Rectangle 19333 (2).png',
            category: 'Featured',
        },
        {
            id: 4,
            name: 'Urban Street Cap',
            price: 3800,
            originalPrice: 5200,
            discount: 27,
            image: '/assets/image/just-for-you/Rectangle 19333 (3).png',
            category: 'Best Sellers',
        },
        {
            id: 5,
            name: 'Sport Performance Cap',
            price: 4200,
            originalPrice: 5800,
            discount: 28,
            image: '/assets/image/just-for-you/Rectangle 19333 (4).png',
            category: 'New Arrivals',
        },
        {
            id: 6,
            name: 'Retro Dad Hat',
            price: 3600,
            originalPrice: 4800,
            discount: 25,
            image: '/assets/image/just-for-you/Rectangle 19333 (5).png',
            category: 'Featured',
        },
        {
            id: 7,
            name: 'Designer Bucket Hat',
            price: 5000,
            originalPrice: 7000,
            discount: 29,
            image: '/assets/image/just-for-you/Rectangle 19333 (6).png',
            category: 'Best Sellers',
        },
        {
            id: 8,
            name: 'Classic Beanie',
            price: 2500,
            originalPrice: 3500,
            discount: 29,
            image: '/assets/image/just-for-you/Rectangle 19333 (7).png',
            category: 'New Arrivals',
        },
    ];

    return (
        <section className="w-full max-w-[1737px] mx-auto px-4 sm:px-6 lg:px-4">
            {/* Section Header */}
            <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                    Just For You
                </h2>
                <a
                    href="#"
                    className="text-xs sm:text-sm font-extrabold tracking-wide uppercase text-gray-500 hover:text-gray-900 transition-colors duration-200 inline-flex items-center gap-1.5 group"
                >
                    See all product
                    <span
                        aria-hidden="true"
                        className="text-sm transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                    >
                        ↗
                    </span>
                </a>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 ${activeCategory === category
                            ? 'bg-gray-900 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* See All Button */}
            <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 flex items-center justify-center">
                <button className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white text-sm sm:text-base font-semibold px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 shadow-md hover:shadow-lg transition-all duration-200 uppercase tracking-wide">
                    SEE ALL PRODUCT
                </button>
            </div>
        </section>
    );
}
