import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      
      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Deep Dive</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to teach Auth
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            This application is built with education in mind. Use the toggles in the dashboard to switch between patterns and see how they differ in the network tab.
          </p>
        </div>
      </div>
    </main>
  );
}
