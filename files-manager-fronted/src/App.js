import axios from 'axios';
import React from 'react';
import './assets/App.css';

function App() {

  const name = localStorage.getItem('name');

  const handleLogout = () => {
    localStorage.clear();
    window.location = '/';
  }

  const getFiles = async() => {
    await axios.get('http://localhost:5000/files', { headers: {'X-Token': localStorage.getItem('token')} })
      .then((res) => {
        res.data.map((item) => {
          return <div>res.data[item].toArray()</div>;
        })
      });
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
      <div className='files' id='files'>
        <ul><button onClick={getFiles}>get files</button></ul>
      </div>
    </div>
  );
}

export default App;
