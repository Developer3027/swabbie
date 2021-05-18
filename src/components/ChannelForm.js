import React, { useState } from 'react';
import PortImgUpld from './PortImgUpld';
import { projectFirestore } from '../firebase/config';

import styled from 'styled-components';

function ChannelForm() {
  const [channelInfo, setChannelInfo] = useState({
    bannerImg: '',
    backgroundImg: '',
    portfolioImg: '',
    logoImg: '',
    channelName: '',
    about: '',
    siteUrl: '',
    facebook: '',
    instagram: '',
    twitter: '',
    patreon: '',
    behance: '',
    github: ''
  });

  const addChannelData = (e) => {
    e.preventDefault();
    projectFirestore.collection('Channel').add({
      bannerImg: channelInfo.bannerImg,
      backgroundImg: channelInfo.backgroundImg,
      portfolioImg: channelInfo.portfolioImg,
      logoImg: channelInfo.logoImg,
      channelName: channelInfo.channelName,
      about: channelInfo.about,
      siteUrl: channelInfo.siteUrl,
      facebook: channelInfo.facebook,
      instagram: channelInfo.instagram,
      twitter: channelInfo.twitter,
      patreon: channelInfo.patreon,
      behance: channelInfo.behance,
      github: channelInfo.github
    });
  };

  return (
    <Container>
      <form onSubmit={addChannelData}>
        <Wrapper>
          <LeftSection>
            <LeftColumn>
              <h3>Images</h3>
              <PortImgUpld
                channelInfo={channelInfo}
                setChannelInfo={setChannelInfo}
              />

              <img src='/images/bgImg.png' alt='background at 2160 by 1350' />
            </LeftColumn>
            <RightColumn>
              <div>
                <img
                  src='/images/Ellipse60.png'
                  alt='logo p n g at 200 pix by 200 pix'
                />
                <div>
                  <span>Logo Image</span>
                  <span>200px x 200px</span>
                </div>
              </div>
              <div>
                <img
                  src='/images/bnrImg.png'
                  alt='banner p n g at 1440 pix by 368 pix'
                />
              </div>
            </RightColumn>
          </LeftSection>
          <DisplayWrap></DisplayWrap>
        </Wrapper>
      </form>
    </Container>
  );
}

export default ChannelForm;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  grid-template-columns: 70% 30%;
`;

const DisplayWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 370px;
  color: #333;
  padding: 10px;

  img {
    padding: 0 5px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr;
  width: 570px;
  color: #333;
`;

const LeftColumn = styled.div`
  text-align: left;
  background-color: #fff;
  padding: 10px;
`;

const RightColumn = styled.div`
  background-color: #fff;
  padding: 10px;
`;
