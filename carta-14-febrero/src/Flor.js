import React from 'react';
import './Flor.css';

function Flor() {
    return (
        <div className="flor-container">
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

            <button onClick={() => window.history.back()} className="back-button-flor">
                Volver a la carta ❤️
            </button>
        </div>
    );
}

export default Flor;