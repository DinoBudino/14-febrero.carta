import React from 'react';
import './Flor.css';

function Flor() {
    // Función para generar pétalos de fondo
    const renderPetalosFondo = () => {
        const petalos = [];
        for (let i = 0; i < 20; i++) {
            const left = Math.random() * 100; // Posición horizontal aleatoria
            const delay = Math.random() * 5; // Retraso aleatorio
            const duration = 5 + Math.random() * 5; // Duración aleatoria
            petalos.push(
                <div
                    key={i}
                    className="petalo-fondo"
                    style={{
                        left: `${left}%`,
                        animationDelay: `${delay}s`,
                        animationDuration: `${duration}s`,
                    }}
                />
            );
        }
        return petalos;
    };

    return (
        <div className="flor-container">
            {/* Cascada de pétalos de fondo */}
            <div className="petalos-fondo-container">
                {renderPetalosFondo()}
            </div>

            <div className="flower">
                <div className="stem"></div>
                {/* Hojas */}
                <div className="leaf left"></div>

                {/* Pétalos */}
                <div className="petals">
                    <div className="petal p1"></div>
                    <div className="petal p2"></div>
                    <div className="petal p3"></div>
                    <div className="petal p4"></div>
                    <div className="petal p5"></div>
                </div>

                {/* Centro de la flor */}
                <div className="flower-center"></div>
            </div>

            {/* Frase debajo de la flor */}
            <p className="flor-text">
                Mi amor por ti florece cada día y es como esta flor digital que nunca se marchitará porque sus pétalos son eternos.
            </p>

            <button onClick={() => window.history.back()} className="back-button-flor">
                Volver a la carta ❤️
            </button>
        </div>
    );
}

export default Flor;
