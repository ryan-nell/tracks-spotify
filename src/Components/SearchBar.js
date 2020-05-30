import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
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
            <div className="searchbar-div">
                <input className="searchbar-input" onChange={this.updateInput}></input>
                <FontAwesomeIcon className="search-button" icon={faSearch} onClick={this.onSearch} />
            </div>
        )
    }
}

export default SearchBar