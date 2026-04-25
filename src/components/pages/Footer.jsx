import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaSpa,
  FaTwitter,
  FaVoicemail,
} from "react-icons/fa";
import { FaSpaceAwesome } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-pink-50 text-white mt-5 mb-0">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-pink-400 flex gap-2">
            BeautyCourse <FaSpa className="text-pink-500 text-3xl" />
          </h2>
          <p className="text-gray-400">
            Learn professional beauty & makeup courses from experts and build
            your career.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-pink-400">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-pink-400 cursor-pointer">Home</li>
            <li className="hover:text-pink-400 cursor-pointer">Courses</li>
            <li className="hover:text-pink-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-pink-400">Contact</h3>
          <p className="text-gray-400 flex gap-2">
            <FaPhone className="text-pink-400 text-2xl" /> +91 9876543210
          </p>
          <p className="text-gray-400 flex gap-2">
            <FaVoicemail className="text-pink-400 text-2xl" />
            beauty@email.com
          </p>

          <div className="flex gap-4 mt-4 text-xl">
            <FaFacebook className="text-pink-400 hover:text-pink-600 cursor-pointer" />
            <FaInstagram className=" text-pink-400 hover:text-pink-600 cursor-pointer" />
            <FaTwitter className=" text-pink-400 hover:text-pink-600 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center border-t border-gray-700 py-4 text-gray-400">
        © 2026 BeautyCourse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
