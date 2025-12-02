import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import BestDeals from "@/components/BestDeals";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />

        <div className="space-y-[50px] md:space-y-[80px] lg:space-y-[120px] mt-[50px] md:mt-[80px] lg:mt-[120px]">
          <Categories />
          <BestDeals />
        </div>
      </main>
      <Footer />
    </div>
  );
}
