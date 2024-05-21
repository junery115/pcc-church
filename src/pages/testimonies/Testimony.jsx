import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation } from 'react-router-dom'
import { convertTime, deletePost } from '../../utils/utils';
import { useParams } from 'react-router-dom';

const Testimony = () => {
  const { id } = useParams()
  const { state } = useLocation()
  const user = JSON.parse(localStorage.getItem("user"))
  const {displayName } = user || {}
  const { fullName,
    testimony,
    country,
    city,
    title,
    homeAddress,
    phoneNumber,
    timestamp,
    photo
  } = state
  const date = convertTime(timestamp)
 

  return (
    <div className=''>
      <div className="gallery__items-info">
        <div className="main__image-container">
          <div className="main__header">
            <h3>{title}</h3>
          </div>
        </div>
        
        <div className="gallery__item-info-description">
          <p>{testimony}</p>
        </div>
        <div className="gallery__item-info">
          <h5>posted {date}</h5>
        </div>
      </div>

      {
        displayName && (
          <div className='gallery__items-info'>
             <div className="imageSlider__images" >
            <img src={photo} alt="details slider" className="" />
          </div>
          <div className="gallery__item-info">
        <h5>{fullName}</h5>
        </div>
        <div className="gallery__item-info">
         <h5>{phoneNumber}</h5>
        </div>
        <div className="gallery__item-info">
         <h5>{homeAddress}</h5>
        </div>
        <div className="gallery__item-info">
          <h5>{country}</h5>
        </div>
        <div className="gallery__item-info">
          <h5>{city}</h5>
        </div>
          <div className="gallery__item-actions">
            <DeleteIcon onClick={() => deletePost(id)} />
          </div>
          </div>
        )
      }
    </div>
  )
}

export default Testimony