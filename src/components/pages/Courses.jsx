import { FaSpa } from "react-icons/fa";
import courses from "../../../public/beauty.json";

const Courses = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-2">
        All Beauty Courses
        <FaSpa className="text-pink-500 text-3xl" />
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((course) => (
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
            <p>⭐ {course.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
