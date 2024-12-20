import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="bg-gradient-to-r from-purple-800 via-gray-900 to-pink-700 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">

                    <div className="mb-6 md:mb-0">
                        <h3 className="text-2xl font-semibold mb-4">
                            <FontAwesomeIcon icon={faEnvelope} className="text-3xl hover:text-pink-500 transition duration-300" /> Контакти</h3>
                        <p className="text-lg mb-2">Email: <a href="mailto:contact@futuristcoffee.com" className="text-pink-500">contact@futuristcoffee.com</a></p>
                        <p className="text-lg">Телефон: <a href="tel:+123456789" className="text-pink-500">+123 456 789</a></p>
                    </div>


                    <div className="mb-6 md:mb-0">
                        <h3 className="text-2xl font-semibold mb-4">Соціальні мережі</h3>
                        <div className="flex gap-6 justify-center md:justify-start">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} className="text-3xl hover:text-pink-500 transition duration-300" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} className="text-3xl hover:text-pink-500 transition duration-300" />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} className="text-3xl hover:text-pink-500 transition duration-300" />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className="text-3xl hover:text-pink-500 transition duration-300" />
                            </a>
                        </div>
                    </div>


                    <div className="mb-6 md:mb-0">
                        <h3 className="text-2xl font-semibold mb-4">Корисні посилання</h3>
                        <div className="flex flex-col gap-4">
                            <button
                                className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-lg transition duration-300"
                                onClick={() => navigate('/about')}>
                                Про нас
                            </button>
                            <button
                                className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded-lg transition duration-300"
                                onClick={() => navigate('/contact')}>
                                Контакти
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
