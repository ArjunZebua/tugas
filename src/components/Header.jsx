import { EqualApproximately } from "lucide-react";
import { CircleUser } from "lucide-react";
import { MonitorPlay } from "lucide-react";
import { House } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (

    <header className="bg-rose-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-blue-400 transition duration-300">Movies The jun</Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="hover:text-blue-400 transition duration-300"
              >
               <House />
              </Link>
            </li>
            <li>
              <Link
                to="/movies"
                className="hover:text-blue-400 transition duration-300"
              >
               <MonitorPlay />
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-400 transition duration-300"
              >
               <EqualApproximately />
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-400 transition duration-300"
              >
               <CircleUser />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
