import React, { useEffect } from 'react';
import usePortfolioStorage from '../../hooks/usePortfolioStorage';

function ProgressBar({ file, setFile }) {
  const { url, progress } = usePortfolioStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <div className='progress-bar' style={{ width: progress + '%' }}></div>;
}

export default ProgressBar;
