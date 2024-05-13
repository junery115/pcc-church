import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import './cards.css'
//import moment from "moment";

const GalleryCard = ({item}) => {
  const {eventTitle,imageUrls,description,timestamp,id } = item
  const user = localStorage.getItem("user")
  return (
    <div className='gallery__item'>
      <div className="gallery__item-imageContainer">
        <img src={imageUrls[0]} alt="" />
      </div>
<div className="gallery__item-info">
  <h5>{eventTitle}</h5>
  <Link to={`/gallery/${id}`} className='gallery__item-link' state={item}>see more</Link>
</div>
{
  user && (
    <div className="gallery__item-actions">
  <EditIcon/>
  <DeleteIcon/>
</div>
  )
}
<div className="gallery__item-timestamp">
 <h5>{timestamp}</h5>
</div>
    </div>
  )
}

export default GalleryCard