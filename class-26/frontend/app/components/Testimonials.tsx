// app/components/Testimonials.tsx
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Robert Johnson",
    role: "Patient",
    content:
      "The care I received was exceptional. The doctors were knowledgeable and took the time to explain everything clearly.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Maria Garcia",
    role: "Patient",
    content:
      "I've been coming here for years and always have a great experience. The staff is friendly and professional.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Patient",
    content:
      "The facilities are modern and clean. The doctors are top-notch and truly care about their patients.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Patients Say
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Hear from our patients about their experiences with our healthcare
            services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-8 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="mb-4 text-yellow-400 flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>

              <div className="relative">
                <FaQuoteLeft className="text-blue-100 text-4xl absolute -top-4 -left-2" />
                <p className="text-gray-600 relative z-10">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
