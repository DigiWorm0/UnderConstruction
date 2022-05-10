import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img
                    src={"/logo128.png"}
                    className="App-logo"
                    alt="logo" />

                <h3 className="App-text">
                    We are working on LevelImposter v2!
                </h3>

                <h6 className="App-text">
                    Come check our progress on our <a
                        className="App-link"
                        href="https://discord.gg/9jJEBQ4qJs"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Discord
                    </a> server.
                </h6>

            </header>
        </div>
    );
}

export default App;
