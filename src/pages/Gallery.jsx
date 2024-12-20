import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import manycoffee from '../imgs/many-coffee.png';
import coffee from '../imgs/top-coffee.png';
import tech4 from '../imgs/tech-4.png';
import tech3 from '../imgs/tech-3.png';

const galleryImages = [
    { id: 1, title: 'Кава з магією', imageUrl: manycoffee, description: 'Кава, яка надихає!' },
    { id: 2, title: 'Чайний рай', imageUrl: tech3, description: 'Свіжість у кожній чашці.' },
    { id: 3, title: 'Солодкі миті', imageUrl: tech4, description: 'Чудові десерти для вас.' },
    { id: 4, title: 'Нічна кава', imageUrl: coffee, description: 'Тільки найкраща нічна кава.' },

];

const Gallery = () => {
    return (
        <div className="p-8 bg-gradient-to-b from-gray-900 via-purple-800 to-pink-700 min-h-screen text-white">
            <h2 className="text-4xl font-bold mb-6 text-center">Галерея</h2>


            <div className="text-center mb-8">
                <Link
                    to="/menu"
                    className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-lg hover:bg-gradient-to-l hover:scale-105 transition-all duration-300"
                >
                    <FontAwesomeIcon icon={faCameraRetro} className="mr-2 text-lg" />
                    Повернутися до меню
                </Link>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {galleryImages.map((image) => (
                    <div
                        key={image.id}
                        className="relative bg-gradient-to-b from-purple-600 via-pink-500 to-brown-600 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
                    >
                        <img
                            src={image.imageUrl}
                            alt={image.title}
                            className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 rounded-lg flex justify-center items-center p-4">
                            <div className="text-center text-white">
                                <h3 className="text-2xl font-semibold mb-2">{image.title}</h3>
                                <p className="text-lg">{image.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;

