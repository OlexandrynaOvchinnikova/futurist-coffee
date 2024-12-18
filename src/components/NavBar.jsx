import React from 'react';
import { Link } from 'react-router-dom'; // Імпортуємо Link для роутінгу

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-gray-900 text-white p-4 shadow-lg">
            <h1 className="text-3xl font-bold text-purple-500">Futurist Coffee</h1>
            <ul className="flex gap-6">
                <li><Link to="/" className="text-white hover:text-purple-500">Головна</Link></li>
                <li><Link to="/menu" className="text-white hover:text-purple-500">Меню</Link></li>
                <li><Link to="/about" className="text-white hover:text-purple-500">Про нас</Link></li>
                <li><Link to="/gallery" className="text-white hover:text-purple-500">Галерея</Link></li>
                <li><Link to="/contact" className="text-white hover:text-purple-500">Контакти</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
