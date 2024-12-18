import React from 'react';

const MainText = () => {
    return (
        <div className="h-screen bg-gradient-to-r from-purple-700 to-gray-900 text-white flex flex-col justify-center items-center text-center">
            <h1 className="text-6xl font-bold">Відчуй майбутнє кави</h1>
            <p className="mt-4 text-xl">Кава, яка надихає на нові ідеї</p>
            <button className="mt-8 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-700 transition duration-300">
                Дізнатися більше
            </button>
        </div>
    );
};

export default MainText;

