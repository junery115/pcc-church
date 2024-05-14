import React from 'react'
import { EventCard } from '../../components'
//import { events } from '../../utils/dummyData'

const Events = () => {
  const savedEvents = JSON.parse(localStorage.getItem("events"))
  return (
    <div className='gallery'>
      {
        savedEvents?.length === 0 && (
          <div className="gallery__message">
        <h3>There are no events at the moment</h3>
      </div>
        )
      }
      <div className="gallery__items">
        {
          savedEvents?.map(({ post, id }) => (
            <EventCard item={post} id={id} key={id} />
          ))
        }
      </div>
    </div>
  )
}

export default Events