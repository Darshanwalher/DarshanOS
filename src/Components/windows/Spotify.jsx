import React from 'react'
import MacWindow from './MacWindow'
import './spotify.scss'

const Spotify = ({ windowName, setWindowsState }) => {
  // Replace this URL with your actual Spotify Playlist/Album Embed URL
  const spotifyEmbedUrl = "https://open.spotify.com/embed/playlist/37i9dQZF1DX14CbVHtvHRB?utm_source=generator";

  return (
    <MacWindow  windowName={windowName} setWindowsState={setWindowsState}>
      <div className="spotify-window">
        <iframe
          src={spotifyEmbedUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Player"
        ></iframe>
      </div>
    </MacWindow>
  )
}

export default Spotify



// <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX14CbVHtvHRB?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>