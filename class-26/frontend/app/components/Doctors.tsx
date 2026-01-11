// app/components/Doctors.tsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaUserMd,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaRegClock,
} from "react-icons/fa";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/doctors")
      .then((res) => res.json())
      .then((data) => {
        console.log("doctors", data);
        setDoctors(data.data);
      });
  }, []);
  return (
    <section id="doctors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Expert Doctors
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Meet our team of highly qualified and experienced healthcare
            professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors && doctors.length > 0 ? (
            doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=60"
                    alt="doctor"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    {doctor.name}
                  </h3>
                  <p className="text-blue-600 mb-4">{doctor.specialty}</p>

                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <FaUserMd className="mr-3 text-blue-500" />
                      <span>{doctor.experience} experience</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaMapMarkerAlt className="mr-3 text-blue-500" />
                      <span>{doctor.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaCalendarAlt className="mr-3 text-blue-500" />
                      <span>{doctor.available}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaRegClock className="mr-3 text-blue-500" />
                      <span>{doctor.time}</span>
                    </div>
                  </div>

                  <Link
                    href={`/appointment/${doctor._id}`}
                    className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 inline-block text-center"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div>Loading ...</div>
          )}
        </div>
      </div>
    </section>
  );
}
