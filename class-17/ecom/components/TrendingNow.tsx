import Image from 'next/image';

export default function TrendingNow() {
    const products = [
        {
            id: 1,
            name: 'New York Yankees Essential Black Cap',
            price: 5000,
            originalPrice: 6500,
            image: '/assets/image/trending/Rectangle 19333 (1).png',
        },
        {
            id: 2,
            name: 'Los Angeles Dodgers Premium Cap',
            price: 5000,
            originalPrice: 6500,
            image: '/assets/image/trending/Rectangle 19333 (2).png',
        },
        {
            id: 3,
            name: 'Boston Red Sox Vintage Cap',
            price: 5000,
            originalPrice: 6500,
            image: '/assets/image/trending/Rectangle 19333 (3).png',
        },
        {
            id: 4,
            name: 'Chicago Cubs Classic Cap',
            price: 5000,
            originalPrice: 6500,
            image: '/assets/image/trending/Rectangle 19333 (4).png',
        },
        {
            id: 5,
            name: 'San Francisco Giants Cap',
            price: 5000,
            originalPrice: 6500,
            image: '/assets/image/trending/Rectangle 19333 (5).png',
        },
        {
            id: 6,
            name: 'Detroit Tigers Retro Cap',
            price: 5000,
            originalPrice: 6500,
            image: '/assets/image/trending/Rectangle 19333.png',
        },
    ];

    return (
        <section className="w-full max-w-[1737px] mx-auto px-4 sm:px-6 lg:px-4">
            {/* Section Header */}
            <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                    Trending Now
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

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {products.map((product) => (
                    <article
                        key={product.id}
                        className="border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 group bg-white"
                    >
                        <div className="grid grid-cols-12">
                            <figure className="col-span-12 md:col-span-5">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={400}
                                    height={400}
                                    className="h-full w-full object-cover md:min-h-[250px] xl:min-h-[280px] group-hover:scale-105 transition-transform duration-300"
                                />
                            </figure>
                            <div className="col-span-12 md:col-span-7 p-5 sm:p-6 md:p-7 xl:p-8 flex flex-col">
                                {/* 20% OFF Badge */}
                                <div className="inline-flex items-center justify-center bg-gray-900 text-white px-4 py-2 mb-4 self-start">
                                    <span className="text-lg font-bold">20% OFF</span>
                                </div>

                                <div className="mt-5 w-full text-gray-900 text-xl font-semibold font-['Inter'] leading-7">
                                    {product.name}
                                </div>

                                <div className="mt-6 inline-flex flex-col justify-start items-start">
                                    <div className="text-right justify-end">
                                        <span className="text-neutral-800 text-2xl font-normal font-['SutonnyMJ'] leading-4">৳</span>
                                        <span className="text-neutral-800 text-xl font-semibold font-['Inter'] leading-7">{product.price}</span>
                                    </div>
                                    <div className="text-right justify-start">
                                        <span className="text-zinc-500 text-2xl font-normal font-['SutonnyMJ'] line-through leading-7">৳</span>
                                        <span className="text-zinc-500 text-lg font-normal font-['Inter'] line-through leading-7">{product.originalPrice}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
