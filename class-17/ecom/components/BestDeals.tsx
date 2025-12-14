import prisma from '@/lib/prisma';
import ProductCard from './ProductCard';

export default async function BestDeals() {
    const products = await prisma.product.findMany();

    return (
        <section className="w-full max-w-[1737px] mx-auto px-4 sm:px-6 lg:px-4">
            {/* Section Header */}
            <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                    Today&apos;s Best Deals
                </h2>
                <a
                    href="#"
                    className="text-xs sm:text-sm font-extrabold tracking-wide uppercase text-gray-500 hover:text-gray-900 transition-colors duration-200 inline-flex items-center gap-1.5 group"
                >
                    See all deals
                    <span
                        aria-hidden="true"
                        className="text-sm transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                    >
                        ↗
                    </span>
                </a>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} variant="best-deals" />
                ))}
            </div>

            {/* Navigation Arrows (Optional for carousel effect) */}
            <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
                <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-200 hover:bg-gray-900 text-gray-900 hover:text-white transition-all duration-300 group">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-200 hover:bg-gray-900 text-gray-900 hover:text-white transition-all duration-300 group">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </section>
    );
}
