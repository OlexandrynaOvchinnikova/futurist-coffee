import React from 'react';

const Contact = () => {
    return (
        <div className="p-8 bg-gradient-to-b from-gray-900 via-purple-800 to-pink-700 min-h-screen text-white">
            {/* Заголовок */}
            <h2 className="text-4xl font-bold mb-6 text-center">Контакти</h2>
            <p className="text-xl text-center mb-12">
                Зв'яжіться з нами, щоб дізнатися більше або зробити замовлення. Ми завжди на зв’язку!
            </p>

            {/* Контактна інформація */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Адреса */}
                <div className="bg-purple-700 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition duration-300">
                    <h3 className="text-2xl font-semibold text-pink-300 mb-4">Адреса</h3>
                    <p>м. Київ, вул. Футуристична, 21</p>
                    <p className="mt-2">Поруч зі станцією метро "Майбутнє"</p>
                </div>

                {/* Графік роботи */}
                <div className="bg-purple-700 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition duration-300">
                    <h3 className="text-2xl font-semibold text-pink-300 mb-4">Графік роботи</h3>
                    <p>Понеділок - П’ятниця: 8:00 - 22:00</p>
                    <p>Субота - Неділя: 9:00 - 23:00</p>
                </div>

                {/* Електронна пошта */}
                <div className="bg-purple-700 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition duration-300">
                    <h3 className="text-2xl font-semibold text-pink-300 mb-4">Електронна пошта</h3>
                    <p>info@futuristcafe.com</p>
                    <p className="mt-2">Зв’яжіться з нами для питань і пропозицій</p>
                </div>

                {/* Телефон */}
                <div className="bg-purple-700 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition duration-300">
                    <h3 className="text-2xl font-semibold text-pink-300 mb-4">Телефон</h3>
                    <p>+380 (98) 123-45-67</p>
                    <p className="mt-2">Завжди раді вам допомогти!</p>
                </div>
            </div>

            {/* Карта */}
            <div className="mt-12">
                <h3 className="text-3xl font-semibold text-center text-pink-300 mb-6">Як нас знайти?</h3>
                <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509407!2d-122.42102538468152!3d37.7749292797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064df9c7d65%3A0x7b8c9e865b7ae251!2sFuturistic%20Cafe!5e0!3m2!1sen!2sua!4v1605583946400!5m2!1sen!2sua"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{border: 0}}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        title="Карта розташування Futuristic Cafe"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
