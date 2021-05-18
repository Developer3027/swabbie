<input
          id='bannerImg'
          type='text'
          value={channelInfo.bannerImg}
          onChange={(e) =>
            setChannelInfo({ ...channelInfo, bannerImg: e.target.value })
          }
        />
        <input
          id='backgroundImg'
          type='text'
          value={channelInfo.backgroundImg}
          onChange={(e) =>
            setChannelInfo({ ...channelInfo, backgroundImg: e.target.value })
          }
        />
        <input
          id='portfolioImg'
          type='text'
          value={channelInfo.portfolioImg}
          onChange={(e) =>
            setChannelInfo({ ...channelInfo, portfolioImg: e.target.value })
          }
        />
        <input
          id='logoImg'
          type='text'
          value={channelInfo.logoImg}
          onChange={(e) =>
            setChannelInfo({ ...channelInfo, logoImg: e.target.value })
          }
        />
        <input
          id='channelName'
          type='text'
          value={channelInfo.channelName}
          onChange={(e) =>
            setChannelInfo({ ...channelInfo, channelName: e.target.value })
          }
        />
        <input
          id='about'
          type='text'
          value={channelInfo.about}
          onChange={(e) =>
            setChannelInfo({ ...channelInfo, about: e.target.value })
          }
        />
        <input
          id='siteUrl'
          type='text'
          value={channelInfo.siteUrl}
          onChange={(e) =>
            setChannelInfo({ ...channelInfo, siteUrl: e.target.value })
          }
        />
        <input
          id='facebook'
          type='text'
          value={channelInfo.facebook}
          onChange={(e) =>
            setChannelInfo({ ...channelInfo, facebook: e.target.value })
          }
        />
        <input
          id='instagram'
          type='text'
          value={channelInfo.instagram}
          onChange={(e) =>
            setChannelInfo({ ...channelInfo, instagram: e.target.value })
          }
        />
        <input
          id='patreon'
          type='text'
          value={channelInfo.patreon}
          onChange={(e) =>
            setChannelInfo({ ...channelInfo, patreon: e.target.value })
          }
        />
        <input
          id='behance'
          type='text'
          value={channelInfo.behance}
          onChange={(e) =>
            setChannelInfo({ ...channelInfo, behance: e.target.value })
          }
        />
        <input
          id='github'
          type='text'
          value={channelInfo.github}
          onChange={(e) =>
            setChannelInfo({ ...channelInfo, github: e.target.value })
          }
        />
        <button type='submit'>submit</button>