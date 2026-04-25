import { useParams } from "react-router-dom";
import courses from "../../../public/beauty.json";

const Order = () => {
  const { id } = useParams();

  const course = courses.find((c) => c.id === parseInt(id));

  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Order Course</h2>

      <img src={course.image} className="mx-auto rounded-lg w-64" />

      <h3 className="text-xl mt-4">{course.name}</h3>
      <p>{course.details}</p>
      <p className="font-bold mt-2">₹{course.price}</p>

      <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded">
        Confirm Order
      </button>
    </div>
  );
};

export default Order;
