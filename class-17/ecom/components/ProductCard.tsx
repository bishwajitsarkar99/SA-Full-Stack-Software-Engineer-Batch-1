import Image from 'next/image';
import { Product } from '@/types/product';

interface ProductCardProps {
    product: Product;
    variant?: 'grid' | 'best-deals';
}

export default function ProductCard({ product, variant = 'grid' }: ProductCardProps) {
    if (variant === 'best-deals') {
        return (
            <div className="group bg-white overflow-visible shadow-md transition-shadow duration-300">
                <div className="relative overflow-hidden">
                    {product.badge && (
                        <div className="absolute top-3 left-3 bg-black text-white px-2 py-1 text-xs font-bold rounded-full z-10">
                            {product.badge}
                        </div>
                    )}

                    <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-auto object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                        <button className="bg-white text-gray-900 px-6 py-3 flex items-center space-x-2 hover:bg-gray-100 transition-colors text-base font-semibold shadow-2xl transform group-hover:scale-105 duration-300">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                            <span>ADD TO CART</span>
                        </button>
                    </div>
                </div>

                {/* Product Details Card */}
                <div className="p-4 pt-3 w-[90%] bg-white rounded-md shadow-sm" style={{ marginTop: '-84px', position: 'relative', zIndex: 10 }}>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 truncate">{product.name}</h3>
                    <div className="flex items-baseline space-x-2">
                        <p className="text-lg font-bold text-gray-900">৳{product.price}</p>
                        {product.originalPrice && (
                            <>
                                <p className="text-sm text-gray-500 line-through">৳{product.originalPrice}</p>
                                {product.discount && (
                                    <span className="bg-gray-800 text-teal-400 text-xs font-bold px-2 py-1 rounded">
                                        <i className="fas fa-tag fa-xs mr-1"></i>{product.discount}% OFF
                                    </span>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="group">
            <div className="relative overflow-hidden rounded-lg">
                {product.badge && (
                    <span className="absolute top-3 left-3 bg-black/80 text-white text-xs font-semibold px-3 py-1.5 tracking-wider z-10">
                        {product.badge}
                    </span>
                )}

                <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-black px-5 py-2.5 sm:px-6 sm:py-3 flex items-center space-x-2 hover:bg-gray-100 transition-colors text-sm sm:text-base font-semibold shadow-lg">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <span>ADD TO CART</span>
                    </button>
                </div>
            </div>

            <div className="mt-4">
                <h3 className="text-sm font-bold text-gray-900">{product.name}</h3>
                <div className="flex items-baseline space-x-2 mt-1">
                    <p className="text-base font-bold text-gray-900">৳{product.price}</p>
                    {product.originalPrice && (
                        <>
                            <p className="text-sm text-gray-500 line-through">৳{product.originalPrice}</p>
                            {product.discount && (
                                <span className="bg-gray-800 text-teal-400 text-xs font-bold px-2 py-1 rounded">
                                    <i className="fas fa-tag fa-xs mr-1"></i>{product.discount}% OFF
                                </span>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
