import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import Carta from './Carta';
import Flor from "./Flor";
import Abrazo from "./Abrazo";
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
// Íconos de música

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
        </div>
    );
}

function App() {
    const [isMuted, setIsMuted] = useState(true); // Estado para controlar si el audio está silenciado
    const audioRef = useRef(null); // Referencia para el elemento de audio

    const toggleMusic = () => {
        if (audioRef.current) {
            if (isMuted) {
                audioRef.current.muted = false; // Desactiva el silencio
                audioRef.current.play().catch(error => {
                    console.error("Error al intentar reproducir el audio:", error);
                });
            } else {
                audioRef.current.pause();
            }
            setIsMuted(!isMuted); // Cambia el estado de silencio
        }
    };


    return (
        <>
            {/* Elemento de audio */}
            <audio ref={audioRef} src="/instrumental.mp3" loop muted={isMuted} />

            {/* Botón de música */}
            <button
                onClick={toggleMusic}
                style={{
                    position: 'fixed',
                    top: '10px',
                    right: '10px',
                    zIndex: 1000,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '24px',
                    color: '#df436d', // Color del ícono
                }}
            >
                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />} {/* Ícono de música */}
            </button>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/carta" element={<Carta />} />
                <Route path="/flor" element={<Flor />} />
                <Route path="/abrazo" element={<Abrazo />} /> {/* Nueva ruta */}
            </Routes>
        </>
    );
}

export default App;