import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import BestDeals from '@/components/BestDeals';
import HeroTwo from '@/components/HeroTwo';
import JustForYou from '@/components/JustForYou';
import Newsletter from '@/components/Newsletter';
import TrendingNow from '@/components/TrendingNow';
import ServiceHighlights from '@/components/ServiceHighlights';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <div className="space-y-[50px] md:space-y-[80px] lg:space-y-[120px] mt-[50px] md:mt-[80px] lg:mt-[120px]">
          <Categories />
          <BestDeals />
        </div>

        <div className="mt-[50px] md:mt-[80px] lg:mt-[120px]">
          <HeroTwo />
        </div>

        <div className="space-y-[50px] md:space-y-[80px] lg:space-y-[120px] mt-[50px] md:mt-[80px] lg:mt-[120px]">
          <JustForYou />
          <Newsletter />
          <TrendingNow />
          <ServiceHighlights />
        </div>
      </main>

      <Footer />
    </>
  );
}
