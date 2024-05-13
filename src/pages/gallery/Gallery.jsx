import React from 'react'
import './gallery.css'
import { galleryImages } from '../../utils/dummyData'
import { GalleryCard } from '../../components'

const Gallery = () => {
  return (
    <div className='gallery'>
      <div className="gallery__header">
        <h3>GALLERY IMAGES</h3>
      </div>
      <div className="gallery__items">
        {
          galleryImages?.map((item) => (
            <GalleryCard item={item} key={item?.id}/>
          ))
        }
      </div>
    </div>
  )
}

export default Gallery