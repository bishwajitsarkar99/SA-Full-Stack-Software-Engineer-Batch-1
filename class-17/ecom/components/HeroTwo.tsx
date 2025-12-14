import Image from 'next/image';

export default function HeroTwo() {
    return (
        <section className="w-full lg:px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto h-[752px]">
                {/* LEFT PANEL - Hero Image */}
                <div className="relative w-full">
                    <Image
                        src="/assets/image/hero/hero-2.png"
                        alt="Premium cap collection"
                        fill
                        className="object-cover w-full"
                    />
                </div>

                {/* RIGHT PANEL - Content */}
                <div className="px-6 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-16 xl:px-24 my-12 flex flex-col justify-center order-2 md:order-2 bg-[#1a1f2e] text-white">
                    <div className="max-w-xl w-full">
                        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                            Your Trusted Building<br />
                            Material Supplier
                        </h2>

                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8 max-w-md">
                            These shoes offer incredible comfort and style. These shoes offer
                            incredible comfort and style. Perfect for every occasion. These shoes
                            offer incredible comfort and style.
                        </p>

                        <div>
                            <button className="bg-white text-gray-900 px-8 py-3 text-sm font-bold uppercase tracking-wider hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
