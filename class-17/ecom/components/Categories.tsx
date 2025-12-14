import prisma from "@/lib/prisma";

export default async function Categories() {
    const categories = await prisma.category.findMany();

    return (
        <section className="w-full max-w-[1737px] mx-auto px-4 sm:px-6 lg:px-4 py-8 md:py-12">
            {/* Categories Grid */}
            <div className="headwear-row grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 md:gap-8">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="group flex flex-col items-center text-center space-y-3 sm:space-y-4 cursor-pointer transition-transform duration-300 hover:scale-105"
                    >
                        <div className="headwear-icon w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center bg-gray-100 group-hover:bg-gray-200 transition-colors duration-300 rounded-full">

                        </div>
                        <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                            {category.name}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
