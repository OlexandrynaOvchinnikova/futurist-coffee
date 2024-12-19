import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Імпорт useNavigate
import MainText from "../components/MainText";
import interior4 from '../imgs/interior-4.png';
import coffee from '../imgs/a-lot-of-coffe.png';
import tech1 from '../imgs/tech-1.png';

const advantages = [
    {
        title: "Найсучасніший інтер'єр",
        description: "Наші футуристичні дизайни поєднують передові технології...",
        image: interior4,
    },
    {
        title: "Преміальна якість кави",
        description: "Ми ретельно обираємо лише найкращі сорти кавових зерен...",
        image: coffee,
    },
    {
        title: "Інноваційні технології",
        description: "Ми використовуємо автоматизовані системи з точним налаштуванням параметрів...",
        image: tech1,
    },
];

const Home = () => {
    const lowerSectionRef = useRef(null);
    const [selectedAdvantage, setSelectedAdvantage] = useState(advantages[0]);
    const navigate = useNavigate(); // Ініціалізація navigate

    const scrollToLowerSection = () => {
        if (lowerSectionRef.current) {
            lowerSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <MainText onMoreClick={scrollToLowerSection} />
            <div ref={lowerSectionRef} className="p-8 bg-gray-100 min-h-screen flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                    <h2 className="text-2xl font-bold mb-4">Переваги Вашого вибору</h2>
                    <ul className="space-y-4">
                        {advantages.map((advantage, index) => (
                            <li
                                key={index}
                                className={`cursor-pointer p-4 border rounded-lg ${
                                    selectedAdvantage.title === advantage.title
                                        ? "bg-purple-500 text-white"
                                        : "bg-white text-black hover:bg-gray-200"
                                }`}
                                onClick={() => setSelectedAdvantage(advantage)}
                            >
                                {advantage.title}
                            </li>
                        ))}
                    </ul>
                    <div className="text-center mt-8">
                        <button
                            className="mt-8 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition duration-300 animate-scalePulse"
                            onClick={() => navigate('/menu')}
                        >
                            Обрати напій
                        </button>
                    </div>
                </div>

                <div className="md:w-2/3 flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
                    <img
                        src={selectedAdvantage.image}
                        alt={selectedAdvantage.title}
                        className="w-full max-h-96 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">{selectedAdvantage.title}</h3>
                    <p className="text-gray-600">{selectedAdvantage.description}</p>
                </div>
            </div>
        </>
    );
};

export default Home;
