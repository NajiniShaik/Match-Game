import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onUpdateTabId} = props

  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    onUpdateTabId(tabId)
  }

  const activeBtn = isActive ? ' active-btn' : ''

  return (
    <li className="img-card">
      <button
        className={`tab-btn ${activeBtn}`}
        type="button"
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
