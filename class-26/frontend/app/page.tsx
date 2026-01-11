// app/page.tsx
import Hero from "./components/Hero";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Doctors />
      <Testimonials />
    </>
  );
}
