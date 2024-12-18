import Navbar from './components/NavBar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import MainText from "./components/MainText";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => (
    <Router>
        <div className="bg-gray-100 min-h-screen"> {/* Додаємо фон до кореневого елемента */}
            <Navbar />
            {/*<MainText />*/}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    </Router>
);

export default App;
