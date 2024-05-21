import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { convertTime,deletePost } from '../../utils/utils';


const TestimonyCard = ({ item, id }) => {
    const { 
        testimony,
        title,
        timestamp
      } = item
  const user = JSON.parse(localStorage.getItem("user"))
  const {displayName } = user || {}
  const date = convertTime(timestamp)

  return (
    <div className='gallery__item'>
      <div className="gallery__items-info">
        <h5 style={{color:"#2196f3", padding:"10px 0"}}>{title}</h5>      
      </div>
      <div className="gallery__item-info-description">
          <p>{testimony?.slice(0,150)}...<Link to={`/testimony/${id}`} className='gallery__item-link' state={item}>see more</Link></p>
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
        <h5>posted {date}</h5>
      </div>
    </div>
  )
}

export default TestimonyCard