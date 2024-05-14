import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { convertTime,deletePost } from '../../utils/utils';


const GalleryCard = ({ item, id }) => {
  const { eventTitle, imageUrl, timestamp } = item
  const user = JSON.parse(localStorage.getItem("user"))
  const {displayName } = user || {}
  const date = convertTime(timestamp)

  return (
    <div className='gallery__item'>
      <div className="gallery__item-imageContainer">
        <img src={imageUrl[0]} alt="" />
      </div>
      <div className="gallery__items-info">
        <h5>{eventTitle}</h5>
        <Link to={`/gallery/${id}`} className='gallery__item-link' state={item}>see more</Link>
      </div>
      {
        displayName && (
          <div className="gallery__item-actions">
            <Link to={`/edit/${id}`} className='gallery__item-edit-link' state={item}>
            <EditIcon />
            </Link>
            <DeleteIcon onClick={() => deletePost(id)}/>
          </div>
        )
      }
      <div className="gallery__item-timestamp">
        <h5>{date}</h5>
      </div>
    </div>
  )
}

export default GalleryCard