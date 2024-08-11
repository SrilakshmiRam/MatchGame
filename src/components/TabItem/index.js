import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails
  const onClickTab = () => {
    updateActiveTabId(tabId)
  }

  const buttonClassName = isActive ? 'activeBtn' : 'button'

  return (
    <li className="tab-item">
      <button type="button" className={buttonClassName} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem