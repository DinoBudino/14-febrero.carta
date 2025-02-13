import React, { useState } from 'react';
import './Carta.css';
import { useNavigate } from 'react-router-dom';

function Carta() {
    const [page, setPage] = useState(0); // Controla la página actual
    const [showConfirm, setShowConfirm] = useState(false); // Controla el modal de confirmación
    const navigate = useNavigate(); // Navegación programática

    // Contenido de cada página
    const pages = [
        {
            title: '¡Bienvenida a tu carta especial! 💌',
            text: 'Esta carta es especial porque es para una persona muy importante, mi amorcito, la cual amo de aquí hasta la luna.',
            images: ['navidad.png', 'luna.PNG'],
        },
        {
            title: 'Eres maravillosa',
            text: 'Gracias por amarme aunque a veces me encuentre en el filo de la noche donde no puedo salir por mi cuenta. Siempre tengo sonrisas en donde sea que estés tú, porque alegras mi alma.',
            image: 'nomada.png',
        },
        {
            title: 'Alto!!, no puede faltar esto',
            text: 'Esta flor la hice para ti, presiona el botón. Espero te guste',
            image: null, // No necesitamos una imagen en esta página
        },
        {
            title: 'Siempre te estaré agradecido',
            text: 'Por haber llegado a mi vida y hacerla mucho mas brillante, un lugar mas bonito sin duda. ❤️ Siempre tendrás besitos y abachos de capibara conmigo y nunca te harán falta porque te los mereces',
            image: 'capybara-heart.gif',
        },
        {
            title: 'Mi amor',
            text: 'Este es otro pequeño detalle por nuestro 14 de febrero que aunque no estamos cerca... tan cerca como siempre, nunca te fallaría en un día tan importante ni te dejaría de demostrar lo mucho que te amo. Te extraño demasiado ❤️ siempre estaré contigo en las buenas y las malas aunque exista distancia hay cosas que perduran como estas cartas y también lo es nuestro amor',
            image: 'capis-corazon.png',
            signature: "Con mucho amor,\nDe: Zahir\nPara: Genevieve (Amochito ❤️)"
        },
    ];

    // Función para ir a la siguiente página
    const nextPage = () => {
        if (page < pages.length - 1) {
            setPage(page + 1);
        }
    };

    // Función para ir a la página anterior
    const prevPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };

    return (
        <div>
            <div className="carta-background"></div>
            <div key={page}  className="carta-page">
                <h1>{pages[page].title}</h1>
                <p>{pages[page].text}</p>

                {/* Mostrar flores si es la página 3, de lo contrario mostrar imagen o imágenes */}
                {page === pages.length - 1 && pages[page].signature && (
                    <p className="signature">{pages[page].signature}</p>
                )}
                {page === 2 ? (
                    <div className="flowers-container">
                        <div className="flowers-images">
                            <img
                                src="capi-valentine.PNG"
                                alt="capi-valentine"
                                className="carta-image"
                            />
                            <img
                                src="corazones.PNG"
                                alt="corazones"
                                className="carta-image"
                            />
                        </div>
                        <button onClick={() => navigate('/flor')} className="next-button-flor">
                            🌸 Ver flor 🌸
                        </button>
                    </div>
                ) : (
                    pages[page].images ? (
                        <div className="carta-images-container">
                            {pages[page].images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Imagen ${index + 1} página ${page + 1}`}
                                    className="carta-image"
                                />
                            ))}
                        </div>
                    ) : (
                        pages[page].image && (
                            <img
                                src={pages[page].image}
                                alt={`Imagen página ${page + 1}`}
                                className="carta-image"
                            />
                        )
                    )
                )}

                <div className="page-counter">Página {page + 1} de {pages.length}</div>
                <div className="buttons-container">
                    {page > 0 && (
                        <button onClick={prevPage} className="prev-button">←</button>
                    )}
                    {page < pages.length - 1 && (
                        <button onClick={nextPage} className="next-button">→</button>
                    )}
                </div>
                <button onClick={() => setShowConfirm(true)} className="back-button">
                    Volver al inicio
                </button>
            </div>

            {/* Modal de confirmación */}
            {showConfirm && (
                <div className="confirm-modal">
                    <div className="confirm-content">
                        <p>¿Estás segura?</p>
                        <div className="confirm-buttons">
                            <button onClick={() => navigate("/")} className="confirm-yes">Sí</button>
                            <button onClick={() => setShowConfirm(false)} className="confirm-no">No</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Carta;
