import React from 'react';
import './Abrazo.css';

function Abrazo() {
    // Función para renderizar corazones en el fondo
    const renderLoveHearts = () => {
        const hearts = [];
        for (let i = 0; i < 20; i++) {
            hearts.push(<div key={i} className="love-heart"></div>);
        }
        return hearts;
    };

    return (
        <div className="abrazo-container">
            <div className="abrazo-background">{renderLoveHearts()}</div>
            <h1 className="abrazo-title">¡Un abrazo cálido para ti! 🤗</h1>
            <p className="abrazo-text">
                Aunque la distancia nos separe, siempre sentirás mis abrazos que te envuelven con amor y cariño. ❤️
            </p>
            <img
                src="/abrazo.png"
                alt="Abrazo cálido"
                className="abrazo-image"
            />
            <button
                onClick={() => window.history.back()}
                className="abrazo-back-button"
            >
                Volver a la carta ❤️
            </button>
            {/* Añadimos la firma */}
            <p className="abrazo-signature">Feliz 14 de febrero, mi amorcito ❤️</p>
        </div>
    );
}

export default Abrazo;
