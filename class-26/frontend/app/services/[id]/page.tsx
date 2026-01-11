// app/services/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { services, doctors } from "@/app/data/services";
import { FaMapMarkerAlt, FaUserMd, FaClock } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function ServiceDetails() {
  const { id } = useParams();
  const service = services.find((s) => s.id === Number(id));
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  if (!service) {
    return <div>Service not found</div>;
  }

  const serviceDoctors = doctors.filter((doctor) =>
    service.doctors.includes(doctor.id)
  );

  const availableTimeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  const handleBookAppointment = () => {
    if (selectedDoctor && selectedDate && selectedTime) {
      // Handle appointment booking logic here
      alert(
        `Appointment booked with ${
          doctors.find((d) => d.id === selectedDoctor)?.name
        } on ${selectedDate.toDateString()} at ${selectedTime}`
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Service Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {service.title}
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {service.detailedDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Doctors List */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Available Doctors
            </h2>

            {serviceDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className={`bg-white rounded-xl p-6 shadow-md cursor-pointer transition-all duration-300 ${
                  selectedDoctor === doctor.id
                    ? "ring-2 ring-blue-500"
                    : "hover:shadow-lg"
                }`}
                onClick={() => setSelectedDoctor(doctor.id)}
              >
                <div className="flex items-start space-x-6">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {doctor.name}
                    </h3>
                    <p className="text-blue-600 mb-2">{doctor.specialty}</p>
                    <p className="text-gray-600 mb-3">{doctor.bio}</p>

                    <div className="flex items-center text-gray-600 mb-1">
                      <FaMapMarkerAlt className="mr-2 text-blue-500" />
                      <span>{doctor.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaClock className="mr-2 text-blue-500" />
                      <span>Available: {doctor.available}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Appointment Booking */}
          <div className="bg-white rounded-xl p-6 shadow-md h-fit sticky top-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Book Appointment
            </h2>

            {!selectedDoctor ? (
              <div className="text-center py-8 text-gray-500">
                <FaUserMd className="mx-auto text-4xl mb-4 text-gray-300" />
                <p>Please select a doctor to see available time slots</p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-2">
                    Selected Doctor
                  </h3>
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                      <Image
                        src={
                          doctors.find((d) => d.id === selectedDoctor)?.image ||
                          ""
                        }
                        alt="Doctor"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">
                        {doctors.find((d) => d.id === selectedDoctor)?.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {
                          doctors.find((d) => d.id === selectedDoctor)
                            ?.specialty
                        }
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-3">
                    Select Date
                  </h3>
                  <Calendar
                    onChange={(value) =>
                      setSelectedDate(Array.isArray(value) ? value[0] : value)
                    }
                    value={selectedDate}
                    minDate={new Date()}
                    className="border rounded-lg p-2 w-full"
                  />
                </div>

                {selectedDate && (
                  <div className="mb-6">
                    <h3 className="font-medium text-gray-700 mb-3">
                      Available Time Slots
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                      {availableTimeSlots.map((time, index) => (
                        <button
                          key={index}
                          className={`py-2 px-3 rounded-md text-sm font-medium ${
                            selectedTime === time
                              ? "bg-blue-600 text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={handleBookAppointment}
                  disabled={!selectedDate || !selectedTime}
                  className={`w-full py-3 px-4 rounded-lg font-medium ${
                    selectedDate && selectedTime
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Book Appointment
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
