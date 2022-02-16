import React from 'react';
import './assets/App.css';

function App() {

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');
    if (!token) {
      window.location = "/login";
    } if (!name) {
      window.location = "/";
    }
  }, []);

  const name = localStorage.getItem('name');

  const handleLogout = () => {
    localStorage.clear();
    window.location = '/';
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h1>Hello {name}</h1>
      <button onClick={handleLogout} >Log out</button>
    </div>
  );
}

export default App;
