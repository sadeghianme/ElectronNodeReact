import React from 'react';
import './app.css';
function App() {
    const handleClick = () => {
        window.electron.doSomething();
    };

    return (
        <div className="App">
            <header className="App-header">
                Header
            </header>
            <main className="App-Main">
                <h1>Hello from ElectronNodeReact App !!!!</h1>
            </main>
            <footer className="App-footer">
                Footer
            </footer>
        </div>
    );
}

export default App;
