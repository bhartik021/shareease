import React, { useRef, useState, useEffect } from 'react'; // Import React
import { uploadFile } from './services/api';
// import logo from './logo.svg';
import './App.css';

function App() {

  const [file, setFile] = useState(''); // Add a state variable to hold the file


  const fileInputRef = useRef(); // Move the useRef inside the functional component

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  useEffect(() => {
    const getImage = async () => {
      if(file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
      }
    }
    getImage();
  }, [file])

  return (
    <div className="container">
      <div className="wrapper"> 
        <h1> ShareEase </h1>
        <p> Upload and Share the Download Link </p>
        <button onClick={() => onUploadClick()}>
          Upload
        </button>
        <input type="file" 
          ref={fileInputRef}
          style={{display: 'none'}}
          onChange={(e) => {
            setFile(e.target.files[0])
          }}
        />
      </div>
    </div>
  );
}

export default App;
