import React, { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import styled from 'styled-components';
import ProgressBar from './progressBars/PortfolioProgress';

import useFirestore from '../hooks/useFirestore';

function PortImgUpld({ channelInfo, setChannelInfo }) {
  const { docs } = useFirestore('Channel');
  const [upload, setUpload] = useState(false);
  const [urlLink, setUrlLink] = useState(false);
  const [showDiv, setShowDiv] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const changeHandler = (e) => {
    const types = ['image/svg', 'image/png', 'image.jpeg', 'image/jpg'];

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
    <>
      <PortfolioInfoDiv>
        <PortfolioUpper>
          {!docs.length ? (
            <img
              src='/images/Ellipse60.png'
              alt='portfolio p n g at 200 pix by 200 pix'
            />
          ) : (
            <img
              src={docs[0].portfolioImg}
              alt='portfolio p n g at 200 pix by 200 pix'
            />
          )}

          <InfoTag>
            <span>Portfolio Image</span>
            <span>200px x 200px</span>
          </InfoTag>
        </PortfolioUpper>
        <PortfolioLower>
          <InputInfo>
            {!showDiv && !upload && (
              <>
                <FaPencilAlt
                  onClick={() => {
                    setUpload(true);
                    setShowDiv(true);
                  }}
                />
                &nbsp;
                <span
                  onClick={() => {
                    setUpload(true);
                    setShowDiv(true);
                  }}>
                  Upload
                </span>
              </>
            )}

            {upload && (
              <>
                <UploadBgOutput>
                  {!showDiv ? (
                    <FaPencilAlt onClick={() => setUpload(false)} />
                  ) : (
                    <></>
                  )}
                  &nbsp;
                  {docs.length >= 1 && !file ? (
                    <>
                      <h6>Complete</h6>
                      <button>Delete</button>
                    </>
                  ) : (
                    <input
                      type='file'
                      id='bgFile'
                      onChange={changeHandler}
                      aria-label='Background Image for channel page'
                    />
                  )}
                  {error && <div className='error'>{error}</div>}
                  {file && <div>{file.name}</div>}
                  {file && <ProgressBar file={file} setFile={setFile} />}
                </UploadBgOutput>
              </>
            )}
          </InputInfo>
          <InputInfo>
            {!showDiv && !urlLink && (
              <>
                <FaPencilAlt
                  onClick={() => {
                    setUrlLink(true);
                    setShowDiv(true);
                  }}
                />
                &nbsp;
                <span
                  onClick={() => {
                    setUrlLink(true);
                    setShowDiv(true);
                  }}>
                  UrlLink
                </span>
              </>
            )}
            {urlLink && (
              <>
                {!showDiv ? (
                  <FaPencilAlt onClick={() => setUrlLink(false)} />
                ) : (
                  <></>
                )}
                &nbsp;
                <label>
                  Url Link &nbsp;
                  <input
                    id='portfolioImg'
                    type='text'
                    placeholder='https://'
                    value={channelInfo.portfolioImg}
                    onChange={(e) =>
                      setChannelInfo({
                        ...channelInfo,
                        portfolioImg: e.target.value
                      })
                    }
                  />
                </label>
              </>
            )}
          </InputInfo>
        </PortfolioLower>
      </PortfolioInfoDiv>
    </>
  );
}

export default PortImgUpld;

const PortfolioInfoDiv = styled.div`
  border: 1px solid #333;
  width: 260px;
  height: 155px;
  margin-bottom: 5px;
`;

const InfoTag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 13px;
  margin-left: 5px;
`;

const InputInfo = styled.div`
  display: flex;
  align-items: center;
  //padding: 5px 0;
  cursor: pointer;
  font-size: 13px;

  span {
    font-size: 13px;
  }
`;

const PortfolioUpper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 5px;
  padding-left: 5px;

  img {
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }
`;

const PortfolioLower = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-around;
  height: 50%;
  padding: 5px 0;
`;

const UploadBgOutput = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0 3px;
  align-items: center;
`;
