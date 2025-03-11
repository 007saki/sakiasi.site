
'use client'
// pages/index.tsx
import { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
        const formData = new FormData();
        formData.append('file', file);
        console.log(formData)
        const response = await axios.post('/api/mark', formData);
        const data = response.data
        const test = response.statusText
        console.log(data)
        console.log(test)
    } catch {
      setMessage('Error uploading file.');
    }
  };

  return (
    <div>
      <h1>File Upload</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Home;