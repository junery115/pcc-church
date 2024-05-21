import React from 'react'
import { Carousel } from "react-responsive-carousel";
import { useLocation } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { convertTime, deletePost } from '../../utils/utils';
import { Link, useParams } from 'react-router-dom';

const GalleryImage = () => {
  const { id } = useParams()
  const user = JSON.parse(localStorage.getItem("user"))
  const {displayName } = user || {}
  const { state } = useLocation()
  const { eventTitle, imageUrl, description, timestamp } = state
  const date = convertTime(timestamp)
  console.log(state)
  return (
    <div className="imageSlider-container">
      <Carousel
        className="carousel"
        axis="horizontal"
        dynamicHeight={true}
        showArrows={true}
        showIndicators={false}
        showThumbs={true}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={110}
      >
        {imageUrl?.map((image, index) => (
          <div className="imageSlider__images" key={index}>
            <img src={image} alt="details slider" className="" />
          </div>
        ))}
      </Carousel>
      <div className="gallery__items-info">
        <div className="gallery__item-info">
          <h5>{eventTitle}</h5>
        </div>
        <div className="gallery__item-info-description">
          <p>{description}</p>
        </div>
        <div className="gallery__item-info">
          <h5>posted {date}</h5>
        </div>
      </div>
      {
       displayName && (
          <div className="gallery__item-actions">
            <Link to={`/edit/${id}`} className='gallery__item-edit-link' state={state}>
              <EditIcon />
            </Link>
            <DeleteIcon onClick={() => deletePost(id)} />
          </div>
        )}
    </div>

  )
}

export default GalleryImage