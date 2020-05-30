import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faPlayCircle,faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

class Tracks extends  Component {
    
    state = {
        isPlaying: false,
    }

    // Render icon based on the state of isPlaying
    renderAction() {
        if(!this.state.isPlaying) {
            return <FontAwesomeIcon className="play-button" icon={faPlayCircle} onClick={this.changeMediaControls}/>
        }
        else {
            return <FontAwesomeIcon className="pause-button" icon={faPauseCircle} onClick={this.changeMediaControls}/>
        }
    }

    // Change state
    changeMediaControls = () => {
        if(this.state.isPlaying) {
            this.setState({
                isPlaying: false,     
            }) 
        } else {
            this.setState({
                isPlaying: true,     
            })
        }
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
                            <FontAwesomeIcon className="like-button" icon={faHeart}/>
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