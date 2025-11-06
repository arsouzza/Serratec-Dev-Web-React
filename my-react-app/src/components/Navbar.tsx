import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-white shadow">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <h1 className="text-xl font-bold">Meu App</h1>
                <div className="flex gap-4">
                    <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                    <Link to="/create" className="text-gray-700 hover:text-blue-600">Cadastrar</Link>
                </div>
            </div>
        </nav>
    );
}