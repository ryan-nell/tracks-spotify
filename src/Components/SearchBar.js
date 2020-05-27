import React, { Component } from 'react'
import '../App.css'

class SearchBar extends Component {
    render() {
        return(
            <div className="search-bar-div">
                <h1>This is a search bar component</h1>
                <input className="search-input"></input>
            </div>
        )
    }
}

export default SearchBar