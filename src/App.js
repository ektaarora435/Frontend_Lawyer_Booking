import React from 'react';
import './App.css';
import gavelImage from './gavel-image.jpg'; // Correct import for React image handling

<img src={gavelImage} alt="Law and Justice" />


function App() {
    return (
        <div className="container">
            <header className="navbar">
                <div className="logo">JurisHire</div>
                <nav>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                    <a href="#login" className="login">Login</a>
                </nav>
            </header>

            <div className="hero-section">
                <div className="content">
                    <h1>A Law Firm <br /> With A Passion For Success.</h1>
                    <p>
                        Are you in need of professional legal assistance? Look no further than JurisHire,
                        the ultimate app designed to connect users with qualified
                        lawyers for all their legal needs. With JurisHire, finding the right
                        lawyer is now faster, easier, and more convenient than ever before.
                    </p>
                    <div className="buttons">
                        <button className="primary-btn">Book An Appointment</button>
                        <button className="secondary-btn">Meet Our Lawyers</button>
                    </div>
                </div>

                <div className="image">
                    <img 
                        src="/gavel-image.jpg" 
                        alt="Law and Justice" 
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
