import React from 'react';
import work1 from '../imgs/workers-1.png';
import work2 from '../imgs/workers-2.png';
import work3 from '../imgs/workers-3.png';

const teamMembers = [
    {
        id: 1,
        name: 'Андрій',
        role: 'Бариста',
        imageUrl: work1,
        description: 'Майстер з приготування кави, який створює магію у кожній чашці.',
    },
    {
        id: 2,
        name: 'Ольга',
        role: 'Менеджер',
        imageUrl: work2,
        description: 'Організаторка, яка забезпечує найкращий сервіс для клієнтів.',
    },
    {
        id: 3,
        name: 'Марія',
        role: 'Кондитер',
        imageUrl: work3,
        description: 'Творець незабутніх десертів з любов’ю та креативністю.',
    },
];

const About = () => {
    return (
        <div className="p-8 bg-gradient-to-b from-gray-900 via-purple-800 to-pink-700 min-h-screen text-white">
            {/* Заголовок секції */}
            <h2 className="text-4xl font-bold mb-6 text-center">Про нас</h2>
            <p className="text-xl mb-8 text-center">
                Ми — кав'ярня майбутнього, де кожен ковток дарує нові враження! Наші фахівці створюють смаколики з турботою і креативністю.
            </p>

            {/* Блок з командою */}
            <h3 className="text-3xl font-semibold mb-6 text-center text-brown-300">Наша команда</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member) => (
                    <div
                        key={member.id}
                        className="p-6 bg-gradient-to-b from-purple-600 via-pink-500 to-brown-600 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
                    >
                        <img
                            src={member.imageUrl}
                            alt={member.name}
                            className="w-40 h-40 mx-auto rounded-full border-4 border-pink-500 mb-4"
                        />
                        <h4 className="text-2xl font-semibold text-center">{member.name}</h4>
                        <p className="text-center text-brown-300 font-medium">{member.role}</p>
                        <p className="mt-4 text-center text-gray-200">{member.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
