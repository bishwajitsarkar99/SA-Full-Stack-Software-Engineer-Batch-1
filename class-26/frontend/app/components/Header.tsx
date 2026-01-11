import Link from "next/link";
import { FaHospital, FaPhoneAlt } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <FaHospital className="text-blue-600 text-3xl" />
          <span className="text-2xl font-bold text-blue-600">MediCare+</span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link
            href="#home"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Home
          </Link>
          <Link
            href="#services"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Services
          </Link>
          <Link
            href="#doctors"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Doctors
          </Link>
          <Link
            href="#testimonials"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Testimonials
          </Link>
        </nav>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 flex items-center space-x-2">
          <FaPhoneAlt />
          <span>Book Appointment</span>
        </button>
      </div>
    </header>
  );
}
