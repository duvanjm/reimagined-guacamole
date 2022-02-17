import axios from 'axios';
import React from 'react';
import $ from 'jquery';
import { Card } from 'react-bootstrap';
import './assets/App.css';

const initialState = {
  result: [],
  value: "",
  showResult: true,
  cardValue: [],
};

function App() {

  const [state, setFiles] = React.useState(initialState);

  const name = localStorage.getItem('name');

  const handleLogout = () => {
    localStorage.clear();
    window.location = '/';
  }

  const getFiles = async() => {
    await axios.get('http://localhost:5000/files', { headers: {'X-Token': localStorage.getItem('token')} })
      .then((res) => {
        $("#files").html("");
        setFiles({
          ...state,
          value: res.data.name,
          showResult: true,
          cardValue: res.data,
        }, console.log('getfiles state', state.cardValue));
        console.log('state', state.cardValue);
    });
  }

  const handleKepress = () => {
    getFiles();
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
      <button onClick={handleKepress}>search files</button>
      <div className='files' hidden={state.showResult}>
        {$.isEmptyObject(state.cardValue[0])
          ? "You don't have any file"
          : state.CardValue.map((data, index) => (
            <Card key={index}>
              <Card.Body>
                {data.type === 'folder' ? (<p>Folder</p>)
                : data.type === 'image' ? (<p>image</p>) 
                : (<p>file</p>)
                }
                <Card.Title>{data.name}</Card.Title>
              </Card.Body>
            </Card>
          ))
        }
      </div>
    </div>
  );
}

export default App;
