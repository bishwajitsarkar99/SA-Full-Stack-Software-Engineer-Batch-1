// app/components/Services.tsx
"use client";

import Link from "next/link";
import {
  FaHeartbeat,
  FaTeeth,
  FaBrain,
  FaEye,
  FaBaby,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Cardiology",
    description:
      "Comprehensive heart care with advanced diagnostic tools and treatments for all cardiac conditions.",
    icon: <FaHeartbeat className="text-4xl text-blue-600" />,
    detailedDescription:
      "Our cardiology department provides comprehensive heart care services including diagnostic testing, preventive cardiology, interventional procedures, and cardiac rehabilitation. Our team of board-certified cardiologists use the latest technology to diagnose and treat all types of heart conditions.",
    doctors: [1, 2],
  },
  {
    id: 2,
    title: "Dentistry",
    description:
      "Complete dental care services including cleaning, whitening, and cosmetic dentistry.",
    icon: <FaTeeth className="text-4xl text-blue-600" />,
    detailedDescription:
      "Our dentistry department provides comprehensive dental care services including preventive care, restorative treatments, cosmetic dentistry, and advanced procedures. Our team of experienced dentists and hygienists use the latest technology to ensure your smile stays healthy and beautiful.",
    doctors: [3, 4],
  },
  {
    id: 3,
    title: "Neurology",
    description:
      "Expert care for disorders of the nervous system with cutting-edge treatment options.",
    icon: <FaBrain className="text-4xl text-blue-600" />,
    detailedDescription:
      "Our neurology department provides comprehensive care for disorders of the brain, spinal cord, and nervous system. Our team of board-certified neurologists uses advanced diagnostic tools and treatments to manage conditions such as stroke, epilepsy, Parkinson's disease, and multiple sclerosis.",
    doctors: [5, 6],
  },
  {
    id: 4,
    title: "Ophthalmology",
    description:
      "Vision care services including eye exams, glasses, and advanced surgical procedures.",
    icon: <FaEye className="text-4xl text-blue-600" />,
    detailedDescription:
      "Our ophthalmology department provides comprehensive eye care services including routine eye exams, contact lens fittings, and advanced surgical procedures such as cataract surgery, LASIK, and glaucoma treatment. Our team of experienced ophthalmologists and optometrists ensure your vision stays sharp and healthy.",
    doctors: [7, 8],
  },
  {
    id: 5,
    title: "Pediatrics",
    description:
      "Compassionate healthcare for infants, children, and adolescents in a child-friendly environment.",
    icon: <FaBaby className="text-4xl text-blue-600" />,
    detailedDescription:
      "Our pediatrics department provides comprehensive healthcare for infants, children, and adolescents. Our team of pediatricians and specialists create a child-friendly environment where your little ones can feel comfortable and safe. We offer preventive care, vaccinations, and treatment for common childhood illnesses.",
    doctors: [9, 10],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            We offer a wide range of medical services to meet all your
            healthcare needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              href={`/services/${service.id}`}
              key={service.id}
              className="block"
            >
              <div className="p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl border-2 border-transparent hover:border-blue-600 h-full">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="flex items-center text-blue-600 font-medium">
                  Learn More <FaArrowRight className="ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
