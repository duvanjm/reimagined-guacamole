import React from 'react';
import './assets/App.css';

function App() {

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location = "/login";
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
