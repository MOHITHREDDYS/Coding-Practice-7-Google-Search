// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {newSuggestionsList: '', searchInput: ''}

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  updateInput = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    this.state.newSuggestionsList = suggestionsList
    const {newSuggestionsList, searchInput} = this.state
    const filteredList = newSuggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg_container">
        <div className="main_container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google"
          />
          <ul>
            <li className="search">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search_icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                value={searchInput}
                onChange={this.changeSearchInput}
              />
            </li>
            {filteredList.map(eachSuggestion => (
              <SuggestionItem
                key={eachSuggestion.id}
                suggestion={eachSuggestion.suggestion}
                updateInput={this.updateInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
