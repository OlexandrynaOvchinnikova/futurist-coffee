import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faLeaf, faCookieBite } from '@fortawesome/free-solid-svg-icons';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const menuSections = {
    coffee: [
        { name: 'Еспресо', description: 'Насичений і міцний кавовий напій.', price: '50₴', icon: faCoffee },
        { name: 'Капучино', description: 'Класичний напій з ніжною молочною пінкою.', price: '70₴', icon: faCoffee },
        { name: 'Лате', description: 'М\'який кавовий напій з молоком.', price: '80₴', icon: faCoffee },
        { name: 'Американо', description: 'Легка кава з додаванням води.', price: '60₴', icon: faCoffee },
        { name: 'Флет Вайт', description: 'Насичена кава з молоком.', price: '85₴', icon: faCoffee },
    ],
    tea: [
        { name: 'Чорний чай', description: 'Класичний чорний чай з багатим смаком.', price: '40₴', icon: faLeaf },
        { name: 'Зелений чай', description: 'Свіжий та освіжаючий напій.', price: '45₴', icon: faLeaf },
        { name: 'Трав\'яний чай', description: 'Заспокійливий чай з травами.', price: '50₴', icon: faLeaf },
        { name: 'Чай з лимоном', description: 'Чай з нотками цитрусу.', price: '50₴', icon: faLeaf },
    ],
    pastries: [
        { name: 'Круасан', description: 'Ніжний хрусткий круасан.', price: '50₴', icon: faCookieBite },
        { name: 'Маффін', description: 'Солодкий маффін з шоколадом або ягодами.', price: '45₴', icon: faCookieBite },
        { name: 'Чізкейк', description: 'Класичний кремовий десерт.', price: '70₴', icon: faCookieBite },
        { name: 'Тірамісу', description: 'Легендарний італійський десерт.', price: '80₴', icon: faCookieBite },
    ],
};

const Menu = () => {
    return (
        <div className="p-8 bg-gradient-to-b from-gray-900 via-purple-800 to-pink-700 min-h-screen text-white">
            <h2 className="text-4xl font-bold mb-6 text-center">Меню</h2>
            {Object.entries(menuSections).map(([section, items]) => (
                <div key={section} className="mb-8">
                    <h3
                        className={`text-3xl font-semibold mb-4 border-b-2 pb-2 ${
                            section === 'coffee'
                                ? 'text-brown-300 border-brown-500'
                                : section === 'tea'
                                    ? 'text-green-300 border-green-500'
                                    : 'text-pink-300 border-pink-500'
                        }`}
                    >
                        {section === 'coffee' ? 'Кава' : section === 'tea' ? 'Чай' : 'Кондитерські вироби'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="p-4 border border-pink-300 bg-purple-700 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="text-4xl">
                                        <FontAwesomeIcon icon={item.icon}/>
                                    </div>
                                    <h4 className="text-2xl font-semibold">{item.name}</h4>
                                </div>
                                <p className="text-gray-200">{item.description}</p>
                                <p className="text-lg font-bold mt-2">{item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            {/* Перехід до галереї */}
            <div className="mt-12 text-center py-8">
                <p className="text-2xl font-semibold text-white mb-4">Бажаєте побачити більше?</p>
                <p className="text-xl font-bold text-white mb-6">Завітайте у нашу галерею і насолоджуйтеся найкращими
                    роботами!</p>
                <Link
                    to="/gallery"
                    className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-lg hover:bg-gradient-to-l hover:scale-105 transition-all duration-300"
                >
                    <FontAwesomeIcon icon={faWandMagicSparkles} className="mr-2 text-lg"/>
                    Перейти до галереї
                </Link>
            </div>

        </div>
    );
};

export default Menu;
