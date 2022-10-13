// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestion, updateInput} = props

  const onClickingArrow = () => {
    updateInput(suggestion)
  }

  return (
    <li>
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={onClickingArrow}
      />
    </li>
  )
}

export default SuggestionItem
