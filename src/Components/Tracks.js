import React, { Component } from 'react'

class Tracks extends  Component {
    render() {
        const { tracklist } = this.props
        return(
            <div className="tracklist-container">
                <div className="tracklist-div">
                    {
                        tracklist.map( track => ( 
                            <div className="track" key={track.id}>
                                <img className="track-album" src={track.albumArt} alt="album artwork" />
                                <p>{track.name}</p>
                                <p>{track.artist}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Tracks