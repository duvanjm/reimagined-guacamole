import React from 'react';
import Getfiles from './components/Getfiles';
import './assets/App.css';

function App() {

  const name = localStorage.getItem('name');

  const handleLogout = () => {
    localStorage.clear();
    window.location = '/';
  }

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');
    if (!token) {
      window.location = "/login";
    } if (!name) {
      window.location = "/login";
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h1>Hello {name}</h1>
      <button onClick={handleLogout} >Log out</button>
      <h3>Your Files</h3>
      <Getfiles/>
    </div>
  );
}

export default App;
