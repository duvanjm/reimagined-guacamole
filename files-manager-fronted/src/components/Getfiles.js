import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Showfiles from './Showfiles';

function Getfiles() {

  const [file, getfiles] = useState('');

  const files = () => {
    axios.get('http://localhost:5000/files', { headers: {'X-Token': localStorage.getItem('token')} })
      .then((res) => {
        const allFiles = res.data;
        getfiles(allFiles);
      })
      .catch(error => console.error(`Error ${error}`));
  }

  useEffect(() => {
    files();
  }, []);

  return (
    <Showfiles files={file}/>
  );
}

export default Getfiles;
