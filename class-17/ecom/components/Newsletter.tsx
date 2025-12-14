'use client';

import { useState } from 'react';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Newsletter subscription:', { email, agreed });
    };

    return (
        <section className="w-full bg-[#0e1523] text-white lg:px-4">
            <div className="w-full max-w-[1737px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">

                    {/* Left: Heading + Copy */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                            Subscribe Our Newsletter
                        </h2>
                        <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0">
                            Subscribe to our newsletter to receive early discount, news, sales & promo information.
                        </p>
                    </div>

                    {/* Right: Form */}
                    <div className="w-full lg:justify-self-end lg:max-w-[720px]">
                        <form onSubmit={handleSubmit} className="w-full">
                            {/* Email + Button */}
                            <div className="flex flex-col sm:flex-row w-full items-stretch gap-3 sm:gap-4">
                                <label htmlFor="email" className="sr-only">Your E-mail</label>
                                <div className="relative flex-1">
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="h-14 sm:h-14 w-full bg-white/10 backdrop-blur-sm text-white placeholder-white/60 border-2 border-white/30 focus:border-white focus:bg-white/15 focus:outline-none focus:ring-0 rounded-lg px-5 text-base transition-all duration-300"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="h-14 sm:h-14 shrink-0 bg-white text-[#0e1523] hover:bg-gray-100 hover:shadow-xl active:scale-95 transition-all duration-300 px-8 sm:px-10 font-bold uppercase tracking-wide text-sm sm:text-base whitespace-nowrap rounded-lg"
                                >
                                    Subscribe
                                </button>
                            </div>

                            {/* Checkbox */}
                            <div className="mt-5 sm:mt-5 md:mt-6 flex items-start gap-3">
                                <input
                                    id="agree"
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                    className="h-5 w-5 mt-0.5 accent-white border-2 border-white/50 rounded cursor-pointer flex-shrink-0"
                                    required
                                />
                                <label htmlFor="agree" className="text-sm sm:text-sm md:text-base text-slate-300 leading-relaxed cursor-pointer">
                                    I agree to the{' '}
                                    <a href="#" className="text-white font-medium underline underline-offset-2 decoration-white/60 hover:decoration-white transition-all">
                                        Privacy Policy
                                    </a>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
