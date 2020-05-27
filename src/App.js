import React, { Component} from 'react';
import Tracks from './Components/Tracks'
import Spotify from './utils/Spotify.js'

import './App.css';

class App extends Component {

  componentDidMount() {
    Spotify.getAccessToken()
    
  }

  state = {
    tracklist: [
      // { id: 1,
      //   name: 'track1',
      //   artist: 'artist1',
      //   albumName: 'album1',
      //   albumArt: 'https://i.pinimg.com/originals/1b/a4/ee/1ba4ee679061b6af4033667da2a8e0c3.jpg'
      //  },
      //  { id: 2,
      //   name: 'track2',
      //   artist: 'artist2',
      //   albumName: 'album2',
      //   albumArt: 'https://images-na.ssl-images-amazon.com/images/I/71Bk7FnGznL._AC_SY355_.jpg'
      //  },
      //  { id: 3,
      //   name: 'track3',
      //   artist: 'artist3',
      //   albumName: 'album3',
      //   albumArt: 'https://pm1.narvii.com/6874/14c4c75bac68ebb1f53006934902b19c42798c1fr1-591-595v2_uhq.jpg'
      //  }
    ]
  }

  searchTracks = () => {
    Spotify.getTracks('eminem').then(tracks => {
      this.setState({
        tracklist: tracks
      })
      console.log(`clicked: ${this.state.tracklist}`)
    })
    
  }

  render() {
    return(
      <div className="App">
        <button onClick={this.searchTracks}>searchTracks</button>
        <Tracks tracklist={this.state.tracklist} />
        
      </div>
    );
  }
}

export default App;
