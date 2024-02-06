import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <ul className="my-3 flex justify-start items-center">
      <li className="h-[40px] w-[40px] text-white bg-gray-950 flex justify-center items-center hover:bg-blue-600 transition-all">
        <a href="#">
          <FaFacebookF />
        </a>
      </li>
      <li className="h-[40px] w-[40px] text-white bg-gray-950 flex justify-center items-center hover:bg-blue-600 transition-all">
        <a href="#">
          <FaTwitter />
        </a>
      </li>
      <li className="h-[40px] w-[40px] text-white bg-gray-950 flex justify-center items-center hover:bg-blue-600 transition-all">
        <a href="#">
          <FaYoutube />
        </a>
      </li>
      <li className="h-[40px] w-[40px] text-white bg-gray-950 flex justify-center items-center hover:bg-blue-600 transition-all">
        <a href="#">
          <FaInstagram />
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
