import React, { useEffect} from 'react'
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import './testimonies.css'
import { TestimonyCard } from '../../components';
import { Link } from 'react-router-dom'

const Testimonies = () => {
const testimonies = JSON.parse(localStorage.getItem("testimonies"))

  useEffect(() => {
    const data = query(
      collection(db, "testimonies"),
      orderBy("timestamp", "desc")
    );
    const getData = async () => {
      await onSnapshot(data, (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          id: doc?.id,
          post: doc?.data(),
        }))
      
    localStorage.setItem("testimonies", JSON.stringify(newData))

      })
    }
    getData()
  }, [])

  return (
    <div className='testimonies'> 
    <div className="testimony__buttons">
              <div className="testimony__button">
              <Link to='/events' className="footer__current-seriesLink">
                CHECKOUT EVENTS
              </Link>
              </div>
              <div className="testimony__button">
              <Link to='/create-testimony' className="footer__current-seriesLink">
              SHARE YOUR STORY
              </Link>
              </div>
    </div>
    <div className="testimonies__header">
      <h3>Read stories of Transformation</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum, vitae aperiam ullam maxime, sint similique magnam alias eos commodi iste vero? Unde rerum iste quis hic libero nobis sunt necessitatibus velit quasi voluptas et odio error ipsum, vel, sapiente quisquam sequi consequatur ipsam eveniet! Molestiae quis architecto sint possimus?</p>
    </div>
    <div className="">
    {
        testimonies?.length === 0 && (
          <div className="gallery__message">
        <h3>There are no Inspiring stories at the moment</h3>
      </div>
        )
      }
    </div>
    <div className="gallery__items">
{
testimonies?.map(({post,id}) => (
  <TestimonyCard item={post} id={id} key={id}/>
))
}
    </div>
    </div>
  )
}

export default Testimonies
