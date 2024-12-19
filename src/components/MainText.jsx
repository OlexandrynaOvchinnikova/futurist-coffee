import React from 'react';
import place1 from '../imgs/place-1.png';
import place2 from '../imgs/place-2.png';
import interior3 from '../imgs/interior-3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const MainText = ({ onMoreClick }) => {
    return (
        <div
            className="h-[100vh] md:h-[70vh] lg:h-[90vh] bg-gradient-to-r from-purple-800 via-gray-900 to-pink-900 text-white flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-6xl font-bold tracking-wide drop-shadow-md animate-pulse flex items-center gap-4">
                Відчуй майбутнє з кавою
                <FontAwesomeIcon icon={faCoffee} className="text-pink-500 w-12 h-12" />
            </h1>
            <p className="mt-4 text-2xl text-purple-300 max-w-2xl leading-relaxed tracking-wider bg-gradient-to-r from-pink-500 via-purple-700 to-yellow-400 bg-clip-text text-transparent animate-text shadow-lg">
                Запрошуємо вас у світ кави, де смак і технології створюють унікальний досвід.
                <br />
                Насолоджуйтеся атмосферою, що надихає на нові ідеї.
            </p>
            <button
                onClick={onMoreClick}
                className="mt-8 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:bg-purple-700 transition duration-300">
                Дізнатися більше
            </button>
            <div className="mt-12 flex flex-wrap justify-center gap-8">
                <div
                    className="w-80 h-60 bg-cover bg-center rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                    style={{ backgroundImage: `url(${place1})` }}>
                </div>
                <div
                    className="w-80 h-60 bg-cover bg-center rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                    style={{ backgroundImage: `url(${place2})` }}>
                </div>
                <div
                    className="w-80 h-60 bg-cover bg-center rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                    style={{ backgroundImage: `url(${interior3})` }}>
                </div>
            </div>
        </div>
    );
};

export default MainText;
