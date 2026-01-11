// app/components/Hero.tsx
import Image from "next/image";
import { FaUserMd, FaCalendarAlt, FaStethoscope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-blue-50 to-cyan-50 py-20"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Your Health is Our{" "}
            <span className="text-blue-600">Top Priority</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Book appointments with the best doctors in your area. Quality
            healthcare at your convenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 font-medium">
              Book Appointment
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition duration-300 font-medium">
              Learn More
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaUserMd className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">100+</h3>
                <p className="text-sm text-gray-600">Expert Doctors</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-3 rounded-full">
                <FaStethoscope className="text-green-600 text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">50+</h3>
                <p className="text-sm text-gray-600">Specialties</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-purple-100 p-3 rounded-full">
                <FaCalendarAlt className="text-purple-600 text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">24/7</h3>
                <p className="text-sm text-gray-600">Available</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 relative">
          <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
              alt="Doctor with patient"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaUserMd className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Doctor Available</p>
                <h4 className="font-bold">Dr. Sarah Johnson</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
