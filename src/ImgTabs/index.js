import './index.css'

const ImgTabs = props => {
  const {imgDetails, isImgMatched} = props

  const {id, thumbnailUrl} = imgDetails

  const onClickImg = () => {
    isImgMatched(id)
  }

  return (
    <li>
      <button className="button" type="button" onClick={onClickImg}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default ImgTabs
