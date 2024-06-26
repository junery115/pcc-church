import React from 'react'
import './gallery.css'
//import { galleryImages } from '../../utils/dummyData'
import { GalleryCard } from '../../components'


const Gallery = () => {
  const gallery = JSON.parse(localStorage.getItem("gallery"))
  return (
    <div className='gallery'>
      {
        gallery?.length === 0 && (
          <div className="gallery__message">
        <h3>There are no events at the moment</h3>
      </div>
        )
      }
      <div className="gallery__items">
        {
          gallery?.map(({ post, id }) => (
            <GalleryCard item={post} id={id} key={id} />
          ))
        }
      </div>
    </div>
  )
}

export default Gallery