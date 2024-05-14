import React from 'react'
import { EventCard } from '../../components'
//import { events } from '../../utils/dummyData'

const Events = () => {
  const savedEvents = JSON.parse(localStorage.getItem("events"))
  return (
    <div className='gallery'>
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