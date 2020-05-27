import React, { Component } from 'react'
import '../App.css'

class SearchBar extends Component {
    
    state = {
        inputValue: ''
    }

    updateInput = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    onSearch = () => {
        this.props.searchTracks(this.state.inputValue)
    }

    render() {
        return(
            <div className="search-bar-div">
                <h1>{this.state.inputValue}</h1>
                <input className="search-input" onChange={this.updateInput}></input>
                <button className="search-button" onClick={this.onSearch} >Search</button>
            </div>
        )
    }
}

export default SearchBar