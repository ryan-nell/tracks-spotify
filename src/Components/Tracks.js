import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faPlayCircle,faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

class Tracks extends  Component {
    
    state = {
        isPlaying: true
    }

    renderAction() {
        if(!this.state.playing) {
            return <FontAwesomeIcon className="play-button" icon={faPlayCircle} />
        }
        else {
            return <FontAwesomeIcon className="pause-button" icon={faPauseCircle} />
        }
    }

    render() {
        const { tracklist } = this.props
        return(
            <div className="tracklist-container">
                <div className="tracklist-div">
                    {
                        tracklist.map( track => ( 
                            <div className="track" key={track.id}>
                                <img className="track-album" src={track.image} alt="album artwork" />
                                <div className="track-details-container">
                                    <div className="track-details">
                                        <div className="track-buttons">
                                            {this.renderAction()}
                                            <FontAwesomeIcon className="like-button" icon={faHeart}/>
                                        </div>
                                        <p className="details">{track.artist} | {track.name}</p>
                                        <p className="details">{track.album}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Tracks