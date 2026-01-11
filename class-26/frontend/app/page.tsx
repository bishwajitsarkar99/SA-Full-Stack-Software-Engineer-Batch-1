// app/page.tsx
import Hero from "./components/Hero";
import Doctors from "./components/Doctors";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Doctors />
      <Testimonials />
    </>
  );
}
