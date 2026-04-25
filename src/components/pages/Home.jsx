import { motion } from "framer-motion";
import Courses from "../../../public/beauty.json";
import { FaSpa, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const topCourses = [...Courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="relative max-w-5xl w-full rounded-2xl overflow-hidden shadow-xl">
        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop"
          alt="beauty"
          className="w-full h-[400px] md:h-[500px] object-cover bg-pink-50"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Enhance Your Beauty
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-6"
            >
              Learn professional makeup & skincare from experts
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-pink-500 px-6 py-2 rounded-full shadow-lg"
            >
              Enroll Now
            </motion.button>
          </div>
        </div>
      </div>
      <div className="p-6 mt-5">
        <h2 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2">
          Top Beauty Courses
          <FaSpa className="text-pink-500 text-3xl" />
        </h2>
        {/* Top 6 Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {topCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white p-4 rounded-xl shadow hover:scale-105 transition"
            >
              <img
                src={course.image}
                alt={course.name}
                className="rounded-lg mb-3 h-40 w-full object-cover"
              />
              <h3 className="font-bold">{course.name}</h3>
              <p className="text-sm text-gray-500">{course.details}</p>
              <p className="mt-2 font-semibold">₹{course.price}</p>

              <p className="flex items-center  gap-1 text-yellow-500">
                <FaStar />
                {course.rating}
              </p>
              <button
                onClick={() => navigate(`/order/${course.id}`)}
                className="mt-3 w-full bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
        {/* Show All Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => navigate("courses")}
            className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
          >
            Show All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
