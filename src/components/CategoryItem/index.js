import './index.css'

const CategoryItem = props => {
  const {itemDetails, updateImagSrcRandomly} = props
  const {thumbnailUrl} = itemDetails
  const onClickThumbnail = () => {
    updateImagSrcRandomly(thumbnailUrl)
  }
  return (
    <li className="item">
      <button type="button" className="thumbnailBtn" onClick={onClickThumbnail}>
        <img src={thumbnailUrl} alt="thumbnailUrl" className="thumbnail" />
      </button>
    </li>
  )
}

export default CategoryItem