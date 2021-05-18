import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

function ImageForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const changeHandler = (e) => {
    const types = [
      'image/svg',
      'image/png',
      'image.jpeg',
      'image/jpg',
      'audio/mpeg'
    ];

    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select a approved file type.');
    }
  };

  return (
    <form>
      <input type='file' onChange={changeHandler} />
      <div className='output'>
        {error && <div className='error'>{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
}

export default ImageForm;
