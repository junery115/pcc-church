import React from 'react'
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation } from 'react-router-dom'
import { convertTime, deletePost } from '../../utils/utils';
import { Link, useParams } from 'react-router-dom';


const Event = () => {
  const { id } = useParams()
  const { state } = useLocation()
  const user = localStorage.getItem("user")
  const {displayName } = user || {}
  const { eventTitle, imageUrl, description, timestamp, startDate, time, venue } = state
  const date = convertTime(timestamp)

  return (
    <div className=''>
      <div className="gallery__items-info">
        <div className="main__image-container">
          <img src={imageUrl[0]} alt="" />
          <div className="main__header">
            <h3>{eventTitle}</h3>
          </div>
        </div>
        <div className="gallery__item-info">
          <EventAvailableIcon /><h5>{startDate}</h5>
        </div>
        <div className="gallery__item-info">
          <ScheduleRoundedIcon /><h5>{time}</h5>
        </div>
        <div className="gallery__item-info">
          <LocationOnIcon /><h5>{venue}</h5>
        </div>
        <div className="gallery__item-info-description">
          <p>{description}</p>
        </div>
        <div className="gallery__item-info">
          <h5>{date}</h5>
        </div>
      </div>

      {
        displayName && (
          <div className="gallery__item-actions">
            <Link to={`/edit-event/${id}`} className='gallery__item-edit-link' state={state}>
              <EditIcon />
            </Link>
            <DeleteIcon onClick={() => deletePost(id)} />
          </div>
        )
      }
    </div>
  )
}

export default Event