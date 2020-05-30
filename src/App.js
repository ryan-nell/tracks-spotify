import React, { Component} from 'react';
import TrackData from './Components/TrackData.js'
import SearchBar from './Components/SearchBar.js'
import Spotify from './utils/Spotify.js'

import './App.css';

class App extends Component {

  componentDidMount() {
    Spotify.getAccessToken()
  }

  state = {
    tracklist: [],
  }

  searchTracks = (value) => {
    console.log(`value is: ${value}`)
    Spotify.getTracks(value).then(tracks => {
      this.setState({
        tracklist: tracks
      })  
    })  
  }

  render() {
    
    return(
      <div className="App">
        <SearchBar searchTracks={this.searchTracks}/>
        <TrackData tracklist={this.state.tracklist} />
      </div>
    );
  }
}

export default App;
