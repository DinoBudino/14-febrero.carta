import React, { useState } from 'react';
import './Carta.css';
import { useNavigate } from 'react-router-dom';

function Carta() {
    const [page, setPage] = useState(0); // Controla la página actual
    const navigate = useNavigate(); // Navegación programática

    // Contenido de cada página
    const pages = [
        {
            title: '¡Bienvenida a tu carta especial! 💌',
            text: 'Esta carta es especial porque es para una persona muy importante, mi amorcito, la cual amo de aquí hasta la luna.',
            image: 'navidad.png',
        },
        {
            title: 'Página 2',
            text: 'Gracias por amarme aunque me encuentre en el filo de la noche donde no puedo salir por mi cuenta. Siempre tengo sonrisas en donde sea que estés tú, porque alegras mi alma.',
            image: 'nomada.png',
        },
        {
            title: 'Página 3',
            text: 'Estas son las flores que hice para ti con mucho esfuerzo.',
            image: null, // No necesitamos una imagen en esta página
        },
        {
            title: 'Página 4',
            text: 'Gracias por ser parte de mi vida. ❤️',
            image: 'navidad.png',
        },
        {
            title: 'Mi amor',
            text: 'Mi amor este es otro pequeño detalle por nuestro 14 de febrero que aunque no estamos cerca... tan cerca como siempre, nunca te fallaría en un día tan importante ni te dejaría de demostrar lo mucho que te amo. Te extraño demasiado ❤️',
            image: 'navidad.png',
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
            <div className="carta-page">
                <h1>{pages[page].title}</h1>
                <p>{pages[page].text}</p>

                {/* Mostrar flores si es la página 3, de lo contrario mostrar la imagen */}
                {page === 2 ? (
                    <div className="flowers-container">
                        <button onClick={() => navigate('/flor')} className="next-button">
                            🌸 Ver mis flores animadas para ti 🌸
                        </button>
                    </div>
                )   : (
                    pages[page].image && (
                        <img
                            src={pages[page].image}
                            alt={`Imagen página ${page + 1}`}
                            className="carta-image"
                        />
                    )
                )}

                <div className="page-counter">Página {page + 1} de {pages.length}</div>
                <div className="buttons-container">
                    {page > 0 && (
                        <button onClick={prevPage} className="prev-button">Anterior</button>
                    )}
                    {page < pages.length - 1 && (
                        <button onClick={nextPage} className="next-button">Siguiente</button>
                    )}

                </div>
                <button onClick={() => window.history.back()} className="back-button">Volver</button>
            </div>

        </div>
    );
}

export default Carta;