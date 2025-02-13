import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Carta from './Carta';
import Flor from "./Flor";

function Home() {
    const [isOpening, setIsOpening] = useState(false); // Controla si la carta se está abriendo
    const navigate = useNavigate(); // Navegación programática

    const handleCartaClick = () => {
        setIsOpening(true); // Activa la animación de apertura
        setTimeout(() => {
            navigate('/carta'); // Redirige a la página de la carta después de la animación
        }, 1000); // Duración de la animación en ms
    };

    const renderHearts = () => {
        const hearts = [];
        for (let i = 0; i < 20; i++) {
            const left = Math.random() * 100; // Posición horizontal aleatoria
            const delay = Math.random() * 5; // Retraso aleatorio
            const duration = 4 + Math.random() * 3; // Duración aleatoria
            hearts.push(
                <div
                    key={i}
                    className="heart"
                    style={{
                        left: `${left}%`,
                        animationDelay: `${delay}s`,
                        animationDuration: `${duration}s`,
                    }}
                />
            );
        }
        return hearts;
    };

    return (
        <div className="App">
            <div className="hearts-container">{renderHearts()}</div>
            <div className="background">
                <img src="corazones_fondo.png" alt="Fondo corazones" className="background-image" />
            </div>
            <h1 className="valentine-text">Hoy es 14 de Febrero !!</h1>
            <div className="content">
                <img src="capi-carta.PNG" alt="Capis corazón" className="capis-corazon" />
                <p className="above-letter-text">Esta carta es para ti 📩, ábrela!</p>
                <div
                    className={`carta-container ${isOpening ? 'opening' : ''}`}
                    onClick={handleCartaClick}
                >
                    <img src="carta.png" alt="Carta" className="carta" />
                </div>
            </div>
            <audio src="/background.mp3" autoPlay loop />
        </div>
    );
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carta" element={<Carta />} />
            <Route path="/flor" element={<Flor />} />
        </Routes>

    );
}



export default App;