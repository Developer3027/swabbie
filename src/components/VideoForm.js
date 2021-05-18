import React, { useState } from 'react';
import { projectFirestore } from '../firebase/config';

function VideoForm() {
  const [videoMeta, setVideoMeta] = useState({
    backgroundImg: '',
    cardImg: '',
    title: '',
    titleImg: '',
    subTitle: '',
    desc: '',
    videoId: '', //number to locate the video
    trailerId: '', //number to locate trailer
    type: '', //ie: educational, entertainment
    category: '', //ie: frontend, backend, design
    channelName: '', //associate with banner
    fav: false
  });

  const addVideoMeta = (e) => {
    e.preventDefault();
    projectFirestore.collection('video').add({
      title: videoMeta.title,
      subtitle: videoMeta.subTitle
    });
  };

  return (
    <div>
      <form onSubmit={addVideoMeta}>
        <input
          id='backgroundImg'
          type='text'
          value={videoMeta.backgroundImg}
          onChange={(e) =>
            setVideoMeta({ ...videoMeta, backgroundImg: e.target.value })
          }
        />
        <input
          id='cardImg'
          type='text'
          value={videoMeta.cardImg}
          onChange={(e) =>
            setVideoMeta({ ...videoMeta, cardImg: e.target.value })
          }
        />
        <input
          id='title'
          type='text'
          value={videoMeta.title}
          onChange={(e) =>
            setVideoMeta({ ...videoMeta, title: e.target.value })
          }
        />
        <input
          id='titleImg'
          type='text'
          value={videoMeta.titleImg}
          onChange={(e) =>
            setVideoMeta({ ...videoMeta, titleImg: e.target.value })
          }
        />
        <input
          id='subTitle'
          type='text'
          value={videoMeta.subTitle}
          onChange={(e) =>
            setVideoMeta({ ...videoMeta, subTitle: e.target.value })
          }
        />
        <input
          id='desc'
          type='text'
          value={videoMeta.desc}
          onChange={(e) => setVideoMeta({ ...videoMeta, desc: e.target.value })}
        />
        <input
          id='videoId'
          type='text'
          value={videoMeta.videoId}
          onChange={(e) =>
            setVideoMeta({ ...videoMeta, videoId: e.target.value })
          }
        />
        <input
          id='trailerId'
          type='text'
          value={videoMeta.trailerId}
          onChange={(e) =>
            setVideoMeta({ ...videoMeta, trailerId: e.target.value })
          }
        />
        <input
          id='channelName'
          type='text'
          value={videoMeta.channelName}
          onChange={(e) =>
            setVideoMeta({ ...videoMeta, channelName: e.target.value })
          }
        />
        <button type='submit'>submit</button>
      </form>
    </div>
  );
}

export default VideoForm;
