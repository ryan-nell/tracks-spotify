import React, { Component } from 'react'
import Tracks from './Tracks.js'
import '../App.css'

class TrackData extends Component {

  render() {

    const { tracklist } = this.props
    
    return(
      <div className="Tracklist-container">
            <div className="tracklist-div">
                {
                    tracklist.map(track => {
                        return <Tracks className="track" key={track.id} track={track} />
                    })
                }
            </div>
      </div>
    )
  }
}

export default TrackData
