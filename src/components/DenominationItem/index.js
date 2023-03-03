import './index.css'

const DenominationItem = props => {
  const {items, onButtonClick} = props

  const {value} = items

  const onClicking = () => {
    onButtonClick(value)
  }

  return (
    <li>
      <button type="button" className="btn" onClick={onClicking}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
