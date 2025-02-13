import './App.css';

function App() {
    const renderHearts = () => {
        const hearts = [];
        for (let i = 0; i < 20; i++) {
            const left = Math.random() * 100; // Posición aleatoria horizontal
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
                <img src="capis-corazon.png" alt="Capis corazón" className="capis-corazon" />
                <p className="above-letter-text">Esta carta es para ti 📩, ábrela!</p>
                <img src="carta.png" alt="Carta" className="carta" />
            </div>
        </div>
    );
}

export default App;
