'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 shadow-lg">
            {/* Top Bar */}
            <div className="top-bar-gradient text-white text-xs sm:text-sm h-9 sm:h-10 flex items-center justify-between px-3 sm:px-4 md:px-12 lg:px-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>

                {/* Store Location */}
                <div className="flex items-center space-x-1 sm:space-x-1.5 md:space-x-2 relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 md:w-4 md:h-4 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span className="font-medium">Store Location</span>
                </div>

                {/* Promo */}
                <div className="hidden sm:block text-center flex-1 relative z-10">
                    <p className="font-normal leading-6 tracking-wide">
                        <span className="inline-block animate-pulse mr-1">🎉</span>
                        Get <span className="font-bold text-yellow-400">20% Off</span> the new summer collection
                        <span className="inline-block animate-pulse ml-1">✨</span>
                    </p>
                </div>

                {/* Login/Register */}
                <div className="text-right relative z-10">
                    <Link href="#" className="hover:text-indigo-300 font-medium transition-colors duration-200 flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 md:w-4 md:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span className="hidden sm:inline">Login/ Register</span>
                    </Link>
                </div>
            </div>

            {/* Main Bar */}
            <div className="header-glass h-14 sm:h-16 md:h-20 lg:h-24 flex items-center justify-between px-3 sm:px-4 md:px-8 lg:px-12 xl:px-24 border-b border-gray-200/50 relative">
                {/* Mobile Logo */}
                <div className="lg:hidden flex items-center z-20">
                    <Link href="/" className="group">
                        <div className="logo-container relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                            <Image src="/assets/image/logo/Logo.png" alt="Logo" width={80} height={40} className="h-8 sm:h-10 w-auto relative z-10 transition-transform duration-300 group-hover:scale-110" />
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center flex-1 justify-start z-20">
                    <nav className="flex space-x-6 xl:space-x-10 text-base xl:text-lg font-bold uppercase tracking-tight">
                        <Link href="#" className="nav-link-animated text-gray-900">Home</Link>
                        <Link href="#" className="nav-link-animated text-gray-900">Shop</Link>

                        {/* Category Dropdown */}
                        <div className="relative dropdown">
                            <button className="nav-link-animated flex items-center text-gray-900 group">
                                Category
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <div className="dropdown-menu absolute w-56 bg-white/95 backdrop-blur-lg border border-gray-200 shadow-2xl mt-3 py-2 z-20 overflow-hidden">
                                <Link href="#" className="block px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 transition-all duration-200 border-l-2 border-transparent hover:border-indigo-500">
                                    <span className="flex items-center"><span className="mr-2">👕</span> Shirts</span>
                                </Link>
                                <Link href="#" className="block px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 transition-all duration-200 border-l-2 border-transparent hover:border-indigo-500">
                                    <span className="flex items-center"><span className="mr-2">👖</span> Pants</span>
                                </Link>
                                <Link href="#" className="block px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 transition-all duration-200 border-l-2 border-transparent hover:border-indigo-500">
                                    <span className="flex items-center"><span className="mr-2">👟</span> Shoes</span>
                                </Link>
                            </div>
                        </div>

                        <Link href="#" className="nav-link-animated text-gray-900">Contact</Link>
                    </nav>
                </div>

                {/* Desktop Center Logo */}
                <Link href="/" className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-auto group">
                    <div className="logo-container relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                        <Image src="/assets/image/logo/Logo.png" alt="Logo" width={120} height={60} className="h-10 lg:h-14 xl:h-16 w-auto relative z-10 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                </Link>

                {/* Action Icons */}
                <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 z-20">
                    {/* Search */}
                    <button className="icon-bounce p-1.5 sm:p-2 lg:p-2.5 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 relative group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 group-hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>

                    {/* Compare */}
                    <button className="icon-bounce p-1.5 sm:p-2 lg:p-2.5 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 relative group">
                        <svg className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 group-hover:text-indigo-600 transition-colors" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.2 15.089V13.3L19.95 16.15L15.2 19V17.014C12.2763 16.5963 9.73874 14.6855 8.55276 11.918L8.55 11.9117L8.54725 11.918C7.19998 15.0617 4.10883 17.1 0.688588 17.1H0V15.2H0.688588C3.34878 15.2 5.753 13.6146 6.80091 11.1695L7.51643 9.5L6.80091 7.83047C5.753 5.38534 3.34878 3.8 0.688588 3.8H0V1.9H0.688588C4.10883 1.9 7.19998 3.93829 8.54725 7.08199L8.55 7.08834L8.55276 7.08199C9.73874 4.31452 12.2763 2.40371 15.2 1.98598V0L19.95 2.85L15.2 5.7V3.911C13.0403 4.31075 11.185 5.76337 10.2991 7.83047L9.5836 9.5L10.2991 11.1695C11.185 13.2366 13.0403 14.6893 15.2 15.089Z" fill="currentColor" />
                        </svg>
                        <div className="badge-pulse absolute -top-0.5 -right-0.5 w-4 h-4 lg:w-5 lg:h-5 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-[10px] lg:text-xs font-bold ring-2 ring-white shadow-lg">5</div>
                    </button>

                    {/* Cart */}
                    <button className="icon-bounce p-1.5 sm:p-2 lg:p-2.5 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 relative group">
                        <svg className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 group-hover:text-indigo-600 transition-colors" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.97909 4.38443L0 1.33148L1.29927 0L4.27835 3.05295H18.2813C18.7887 3.05295 19.2 3.47447 19.2 3.99445C19.2 4.08607 19.187 4.17722 19.1613 4.26499L16.9564 11.797C16.8398 12.1952 16.482 12.468 16.0763 12.468H4.81653V14.351H14.9225V16.234H3.89781C3.39041 16.234 2.97909 15.8124 2.97909 15.2925V4.38443ZM4.81653 4.93595V10.585H15.3928L17.0465 4.93595H4.81653ZM4.35717 20C3.59607 20 2.97909 19.3677 2.97909 18.5877C2.97909 17.8077 3.59607 17.1755 4.35717 17.1755C5.11827 17.1755 5.73526 17.8077 5.73526 18.5877C5.73526 19.3677 5.11827 20 4.35717 20ZM15.3819 20C14.6207 20 14.0038 19.3677 14.0038 18.5877C14.0038 17.8077 14.6207 17.1755 15.3819 17.1755C16.143 17.1755 16.76 17.8077 16.76 18.5877C16.76 19.3677 16.143 20 15.3819 20Z" fill="currentColor" />
                        </svg>
                        <div className="badge-pulse absolute -top-0.5 -right-0.5 w-4 h-4 lg:w-5 lg:h-5 bg-gradient-to-br from-pink-600 to-rose-600 rounded-full flex items-center justify-center text-white text-[10px] lg:text-xs font-bold ring-2 ring-white shadow-lg">3</div>
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-1.5 sm:p-2 ml-1 sm:ml-2 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-900 group-hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden absolute w-full bg-white/95 backdrop-blur-lg shadow-2xl z-40 border-b border-gray-200/50 transition-all duration-300 ease-out ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <nav className="flex flex-col space-y-0.5 px-3 sm:px-4 py-4 sm:py-5 text-sm sm:text-base font-bold">
                    <Link href="#" className="text-gray-700 hover:text-indigo-600 transition-all duration-200 p-2.5 sm:p-3 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 flex items-center space-x-2.5 sm:space-x-3 border-l-4 border-transparent hover:border-indigo-500">
                        <span className="text-lg sm:text-xl">🏠</span><span>HOME</span>
                    </Link>
                    <Link href="#" className="text-gray-700 hover:text-indigo-600 transition-all duration-200 p-2.5 sm:p-3 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 flex items-center space-x-2.5 sm:space-x-3 border-l-4 border-transparent hover:border-indigo-500">
                        <span className="text-lg sm:text-xl">🛍️</span><span>SHOP</span>
                    </Link>

                    {/* Mobile Category Dropdown */}
                    <div>
                        <button
                            onClick={() => setCategoryOpen(!categoryOpen)}
                            className="w-full text-gray-700 hover:text-indigo-600 transition-all duration-200 p-2.5 sm:p-3 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 flex items-center justify-between border-l-4 border-transparent hover:border-indigo-500"
                        >
                            <div className="flex items-center space-x-2.5 sm:space-x-3">
                                <span className="text-lg sm:text-xl">📦</span><span>CATEGORY</span>
                            </div>
                            <svg className={`w-5 h-5 transition-transform ${categoryOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {categoryOpen && (
                            <div className="pl-6 sm:pl-8 pr-3 sm:pr-4 py-1.5 sm:py-2 space-y-0.5 sm:space-y-1">
                                <Link href="#" className="block p-2 text-xs sm:text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">
                                    <span className="mr-2">👕</span> Shirts
                                </Link>
                                <Link href="#" className="block p-2 text-xs sm:text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">
                                    <span className="mr-2">👖</span> Pants
                                </Link>
                                <Link href="#" className="block p-2 text-xs sm:text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">
                                    <span className="mr-2">👟</span> Shoes
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link href="#" className="text-gray-700 hover:text-indigo-600 transition-all duration-200 p-2.5 sm:p-3 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 flex items-center space-x-2.5 sm:space-x-3 border-l-4 border-transparent hover:border-indigo-500">
                        <span className="text-lg sm:text-xl">📞</span><span>CONTACT</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
}
