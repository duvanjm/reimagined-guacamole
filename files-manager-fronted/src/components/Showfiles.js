import React from "react";
import { Card } from 'react-bootstrap';

function Showfiles(props) {

  const displayFiles = () => {

    const { files } = props;

    if (files.length > 0) {
      return (
        files.map((file, index) => {
          let str = file.data;
          if (str === undefined) {
            str = 'Unnamed';
          }
          return (
            <div className="files" key={index}>
              <Card.Title>{file.name}</Card.Title>
              <Card>{str}</Card>
            </div>
          );
        })
      )
    } else {
      return (<h3>You don't have any file</h3>)
    }
  }

  return (
    <>
      { displayFiles(props) }
    </>
  );
}

export default Showfiles;
