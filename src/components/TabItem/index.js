// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, SeparateEachSection, isActive} = props
  const {displayText, tabId} = tabDetails
  const CategoryWise = () => {
    SeparateEachSection(tabId)
  }
  const classList = isActive ? 'button1' : 'button'

  return (
    <li className="button-container">
      <button className={classList} type="button" onClick={CategoryWise}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
