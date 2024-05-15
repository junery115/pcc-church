import React from 'react'
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { convertTime, deletePost } from '../../utils/utils';


const EventCard = ({ item, id }) => {
  const { eventTitle, imageUrl, startDate, time, venue, timestamp } = item
  const user = JSON.parse(localStorage.getItem("user"))
  const {displayName } = user || {}
  const date = convertTime(timestamp)

  return (
    <div className='gallery__item'>
      <div className="gallery__item-imageContainer">
        <img src={imageUrl[0]} alt="" />
      </div>
      <div className="gallery__items-info">
        <div className="gallery__item-info-title">
          <h5>{eventTitle}</h5>
        </div>
        <div className="gallery__item-info">
          <EventAvailableIcon fontSize='small'/><h5>{startDate}</h5>
        </div>
        <div className="gallery__item-info">
          <ScheduleRoundedIcon fontSize='small'/><h5>{time}</h5>
        </div>
        <div className="gallery__item-info">
          <LocationOnIcon fontSize='small'/><h5>{venue}</h5>
        </div>
        <div className="gallery__item-info">
          <h5>Posted {date}</h5>
        </div>
      </div>
      <div className="gallery__item-info-title">
        <Link to={`/event/${id}`} className='gallery__item-link' state={item}>see more</Link>
      </div>
      {
        displayName && (
          <div className="gallery__item-actions">
            <Link to={`/edit/${id}`} className='gallery__item-edit-link' state={item}>
              <EditIcon />
            </Link>
            <DeleteIcon onClick={() => deletePost(id)} />
          </div>
        )
      }
    </div>
  )
}

export default EventCard