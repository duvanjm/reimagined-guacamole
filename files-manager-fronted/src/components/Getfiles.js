import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import { Card } from 'react-bootstrap';

const initialState = {
  result: [],
  value: "",
  showResult: true,
  cardValue: [],
};

function Getfiles() {

  const [state, setFiles] = React.useState(initialState);

  const getFile = async () => {
    await axios.get('http://localhost:5000/files', { headers: { 'X-Token': localStorage.getItem('token') } })
      .then((res) => {
        $("#files").html("");
        setFiles({
          ...state,
          value: res.data.name,
          showResult: true,
          cardValue: res.data,
        }, console.log('getfiles state', state.cardValue));
      });
  }

  return (
    <div onLoad={getFile()} className='files' hidden={state.showResult}>
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
  );
}

export default Getfiles;