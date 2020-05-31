import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faPlayCircle,faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

class Tracks extends  Component {
    
    // Create new Audio object
    audio = new Audio(this.props.track.previewTrack); 

    state = {
        isPlaying: false,
        isPaused: true, 
        isLiked: false
    }
    
    // Render icon based on the state of isPlaying
    renderAction = () => {
        if(this.state.isPlaying) {
            return <FontAwesomeIcon className="pause-button" icon={faPauseCircle} onClick={this.changeMediaControls}/>
        }
        else {
            return <FontAwesomeIcon className="play-button" icon={faPlayCircle} onClick={this.changeMediaControls}/>
        }
    }

    // Change state on click
    changeMediaControls = () => {
        this.state.isPlaying
        ? this.setState({ isPlaying: false, isPaused: true })
        : this.setState({ isPlaying: true, isPaused: false })
        
        this.toggleAudio(this.audio)   
    }

    // Pause or play audio sample
    toggleAudio = (song) => {
        song !== null
            ? this.state.isPlaying ? song.pause() : song.play() 
            : console.log('no track') 
    }

    endOfSong = (song) => {
        song.ended 
        ? console.log('the song has ended') 
        : console.log('the song is still playing')
    }

    likeSong = () => {
        this.state.isLiked 
        ? this.setState({ isLiked: false })
        : this.setState({ isLiked: true })
    }

    render() {
        const {track} = this.props

        return(                
            <div className="track" >
                <img className="track-album" src={track.image} alt="album artwork" />
                <div className="track-details-container">
                    <div className="track-details">
                        <div className="track-buttons">
                            {this.renderAction()}
                            <FontAwesomeIcon className={this.state.isLiked ? "like-button-clicked" :"like-button-unclicked"} 
                            icon={faHeart} onClick={this.likeSong}/>
                        </div>
                        <p className="details">{track.artist} | {track.name}</p>
                        <p className="details">{track.album}</p>
                    </div>
                </div>
            </div>           
        )
    }
}

export default Tracks