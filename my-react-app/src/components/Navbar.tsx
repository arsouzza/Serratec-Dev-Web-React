import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 text-gray-100 p-4 shadow-lg border-b border-gray-800">
      <ul className="flex justify-center gap-10 text-lg font-medium">
        <li>
          <Link to="/" className="hover:text-blue-400 transition-colors duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/create" className="hover:text-blue-400 transition-colors duration-200">
            Cadastrar
          </Link>
        </li>
      </ul>
    </nav>
  );
}
